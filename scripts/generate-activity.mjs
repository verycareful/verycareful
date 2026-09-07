/**
 * Generates src/lib/activity.json: commit counts per week, per public repo.
 *
 * The repo list is derived, not hardcoded: every repo owned by OWNER that is
 * public and not archived. Archiving a repo therefore drops it from the chart
 * on the next run with no edit here.
 *
 * Only public repos are read, so the output can never disclose private work.
 *
 * Usage:
 *   GITHUB_TOKEN=... node scripts/generate-activity.mjs
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OWNER = "verycareful";
const WEEKS = 8;
const OUT = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../src/lib/activity.json"
);

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("GITHUB_TOKEN is not set.");
  process.exit(1);
}

async function api(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": `${OWNER}-activity-generator`,
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${path}`);
  }
  return res.json();
}

/** Monday 00:00 UTC of the week containing `d`. */
function mondayOf(d) {
  const x = new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
  );
  // getUTCDay: 0 = Sunday. Shift so Monday is the start of the week.
  const shift = (x.getUTCDay() + 6) % 7;
  x.setUTCDate(x.getUTCDate() - shift);
  return x;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const label = (d) => `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;

const thisMonday = mondayOf(new Date());

// Oldest first. WEEKS buckets ending with the current week.
const starts = [];
for (let i = WEEKS - 1; i >= 0; i--) {
  const d = new Date(thisMonday);
  d.setUTCDate(d.getUTCDate() - i * 7);
  starts.push(d);
}
const since = starts[0].toISOString();

/** Index of the week bucket a commit date falls in, or -1 if outside. */
function bucketOf(dateStr) {
  const m = mondayOf(new Date(dateStr)).getTime();
  return starts.findIndex((s) => s.getTime() === m);
}

async function listPublicRepos() {
  const out = [];
  for (let page = 1; ; page++) {
    const batch = await api(
      `/users/${OWNER}/repos?per_page=100&page=${page}&type=owner&sort=pushed`
    );
    out.push(...batch);
    if (batch.length < 100) break;
  }
  // The endpoint returns public repos only, but be explicit about both
  // conditions so the intent survives a future switch to an authed endpoint.
  return out
    .filter((r) => !r.private && !r.archived)
    .map((r) => r.name);
}

/**
 * Every branch of a repo. The commits endpoint defaults to the default branch
 * alone, which silently hides work in progress: Terramax had 35 commits on a
 * feature branch and 8 on main, so a default-branch count understated it by
 * more than three quarters.
 */
async function branchesOf(repo) {
  const names = [];
  for (let page = 1; ; page++) {
    const batch = await api(
      `/repos/${OWNER}/${repo}/branches?per_page=100&page=${page}`
    );
    names.push(...batch.map((b) => b.name));
    if (batch.length < 100) break;
  }
  return names;
}

async function commitsFor(repo) {
  const weeks = new Array(WEEKS).fill(0);
  // A commit reachable from several branches must be counted once.
  const seen = new Set();

  let branches;
  try {
    branches = await branchesOf(repo);
  } catch (err) {
    console.warn(`  ${repo}: cannot list branches (${err.message})`);
    return weeks;
  }

  for (const branch of branches) {
    for (let page = 1; ; page++) {
      let batch;
      try {
        batch = await api(
          `/repos/${OWNER}/${repo}/commits?sha=${encodeURIComponent(branch)}` +
            `&author=${OWNER}&since=${since}&per_page=100&page=${page}`
        );
      } catch (err) {
        // 409 is an empty repository. One bad branch should not blank the
        // chart, so warn and carry on.
        console.warn(`  ${repo}@${branch}: ${err.message}`);
        break;
      }
      for (const c of batch) {
        if (seen.has(c.sha)) continue;
        seen.add(c.sha);
        const when = c.commit?.author?.date;
        if (!when) continue;
        const b = bucketOf(when);
        if (b >= 0) weeks[b]++;
      }
      if (batch.length < 100) break;
    }
  }
  return weeks;
}

const repos = await listPublicRepos();
console.log(`${repos.length} public, non-archived repos`);

const rows = [];
for (const repo of repos) {
  const weeks = await commitsFor(repo);
  const total = weeks.reduce((a, b) => a + b, 0);
  console.log(`  ${repo}: ${total}`);
  if (total > 0) rows.push({ repo, weeks, total });
}

rows.sort((a, b) => b.total - a.total);

const snapshot = {
  generated: new Date().toISOString(),
  weeks: starts.map(label),
  repos: rows,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(snapshot, null, 2) + "\n");
console.log(`wrote ${OUT}`);
