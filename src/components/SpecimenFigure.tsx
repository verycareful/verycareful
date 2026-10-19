import type { ClusterMember } from "@/lib/types";

/**
 * One small figure per repository, drawn from what that repository does.
 * All share a 160 x 100 viewBox so the plates line up.
 */

const INK = "var(--ink-3)";
const FAINT = "var(--ink-4)";
const ACC = "var(--accent)";
const WARM = "var(--collapse)";
const mono = { fontFamily: "var(--font-mono)" } as const;

/** Three-qubit circuit: H, a CNOT, a rotation, measurement. */
function Circuit() {
  const wires = [26, 50, 74];
  return (
    <>
      {wires.map((y, i) => (
        <g key={y}>
          <line x1="22" y1={y} x2="146" y2={y} stroke={INK} strokeWidth="0.6" />
          <text x="6" y={y + 2.5} fontSize="6.5" fill={FAINT} style={mono}>q{i}</text>
        </g>
      ))}
      {[["H", 38, 26], ["H", 38, 50], ["RZ", 96, 74], ["X", 120, 26]].map(([g, x, y]) => (
        <g key={`${g}${x}${y}`}>
          <rect x={+x - 8} y={+y - 8} width="16" height="16" fill="var(--bg)" stroke={ACC} strokeWidth="0.8" />
          <text x={x} y={+y + 2.5} textAnchor="middle" fontSize="7" fill={ACC} style={mono}>{g}</text>
        </g>
      ))}
      <line x1="68" y1="26" x2="68" y2="74" stroke={ACC} strokeWidth="0.8" />
      <circle cx="68" cy="26" r="2.6" fill={ACC} />
      <circle cx="68" cy="74" r="5.5" fill="var(--bg)" stroke={ACC} strokeWidth="0.8" />
      <line x1="62.5" y1="74" x2="73.5" y2="74" stroke={ACC} strokeWidth="0.6" />
      <line x1="68" y1="68.5" x2="68" y2="79.5" stroke={ACC} strokeWidth="0.6" />
      {wires.map((y) => (
        <g key={`m${y}`}>
          <rect x="136" y={y - 7} width="14" height="14" fill="var(--bg-2)" stroke={INK} strokeWidth="0.6" />
          <path d={`M 139 ${y + 3} A 4 4 0 0 1 147 ${y + 3}`} fill="none" stroke={INK} strokeWidth="0.6" />
          <line x1="143" y1={y + 3} x2="146" y2={y - 3} stroke={INK} strokeWidth="0.6" />
        </g>
      ))}
    </>
  );
}

/** Nelder-Mead: a simplex contracting towards the minimum of an elliptic bowl. */
function Simplex() {
  const simplices = [
    "M 22 78 L 58 84 L 40 52 Z",
    "M 58 84 L 40 52 L 76 58 Z",
    "M 76 58 L 40 52 L 70 34 Z",
    "M 76 58 L 70 34 L 96 44 Z",
    "M 96 44 L 70 34 L 88 32 Z",
  ];
  return (
    <>
      {[44, 32, 21, 11].map((r, i) => (
        <ellipse key={r} cx="100" cy="40" rx={r * 1.45} ry={r} fill="none" stroke={INK} strokeWidth="0.5" opacity={0.35 + i * 0.12} />
      ))}
      {simplices.map((d, i) => (
        <path
          key={d} d={d}
          fill={i === simplices.length - 1 ? "color-mix(in oklch, var(--accent) 18%, transparent)" : "none"}
          stroke={i === simplices.length - 1 ? ACC : INK}
          strokeWidth={i === simplices.length - 1 ? 0.9 : 0.6}
          strokeDasharray={i === simplices.length - 1 ? undefined : "2 1.6"}
          opacity={0.45 + i * 0.13}
        />
      ))}
      <circle cx="100" cy="40" r="2.2" fill={ACC} />
      <text x="105" y="37" fontSize="6.5" fill={ACC} style={mono}>x*</text>
      <text x="6" y="96" fontSize="6" fill={FAINT} style={mono}>reflect · expand · contract</text>
    </>
  );
}

/** Singular value spectrum with a truncation cut. */
function Spectrum() {
  const sv = [70, 52, 38, 27, 19, 12, 8, 5, 3, 2, 1.2, 0.8];
  const cut = 6;
  return (
    <>
      <line x1="14" y1="84" x2="152" y2="84" stroke={INK} strokeWidth="0.5" />
      {sv.map((v, i) => (
        <rect
          key={i}
          x={18 + i * 11} y={84 - v} width="7" height={v}
          fill={i < cut ? ACC : "none"}
          stroke={i < cut ? ACC : FAINT}
          strokeWidth="0.6"
          opacity={i < cut ? 0.25 + 0.75 * (v / sv[0]) : 0.8}
        />
      ))}
      <line x1={18 + cut * 11 - 2} y1="10" x2={18 + cut * 11 - 2} y2="88" stroke={WARM} strokeWidth="0.8" strokeDasharray="3 2" />
      <text x={18 + cut * 11 + 1} y="16" fontSize="6.5" fill={WARM} style={mono}>truncate</text>
      <text x="14" y="96" fontSize="6.5" fill={FAINT} style={mono}>σ₁ ≥ σ₂ ≥ … ≥ σₙ</text>
    </>
  );
}

/** Energy landscape over QAOA parameters, with the found minimum. */
function Landscape() {
  return (
    <>
      <path d="M 10 30 C 26 30, 28 70, 44 66 S 62 26, 78 40 S 96 86, 112 82 S 134 30, 150 22"
        fill="none" stroke={ACC} strokeWidth="1" />
      <path d="M 10 30 C 26 30, 28 70, 44 66 S 62 26, 78 40 S 96 86, 112 82 S 134 30, 150 22 L 150 90 L 10 90 Z"
        fill="color-mix(in oklch, var(--accent) 8%, transparent)" />
      <line x1="10" y1="90" x2="150" y2="90" stroke={INK} strokeWidth="0.5" />
      <circle cx="111" cy="82" r="2.6" fill={ACC} />
      <text x="111" y="74" textAnchor="middle" fontSize="6.5" fill={ACC} style={mono}>0110</text>
      <circle cx="44" cy="66" r="2" fill="none" stroke={WARM} strokeWidth="0.8" />
      <text x="44" y="58" textAnchor="middle" fontSize="6" fill={WARM} style={mono}>local</text>
      <text x="10" y="12" fontSize="6.5" fill={FAINT} style={mono}>⟨H_UC⟩</text>
      <text x="150" y="98" textAnchor="end" fontSize="6" fill={FAINT} style={mono}>γ, β</text>
    </>
  );
}

function Page({ x, y, w = 22, h = 30, lines = 4, accent = false }: { x: number; y: number; w?: number; h?: number; lines?: number; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="var(--bg)" stroke={accent ? ACC : INK} strokeWidth={accent ? 0.9 : 0.6} />
      {Array.from({ length: lines }, (_, i) => (
        <line key={i} x1={x + 4} y1={y + 6 + i * 5} x2={x + w - (i === lines - 1 ? 9 : 4)} y2={y + 6 + i * 5} stroke={FAINT} strokeWidth="0.5" />
      ))}
    </g>
  );
}

/** PDF page operations: two documents merged, one split back out. */
function Pages() {
  return (
    <>
      <Page x={10} y={12} />
      <Page x={14} y={16} />
      <Page x={10} y={56} />
      <path d="M 40 32 Q 54 32 60 46" fill="none" stroke={INK} strokeWidth="0.6" />
      <path d="M 36 70 Q 54 70 60 56" fill="none" stroke={INK} strokeWidth="0.6" />
      <text x="48" y="54" textAnchor="middle" fontSize="6" fill={FAINT} style={mono}>merge</text>
      <Page x={64} y={30} w={26} h={36} lines={5} accent />
      <Page x={68} y={34} w={26} h={36} lines={5} accent />
      <path d="M 98 46 Q 110 30 118 26" fill="none" stroke={INK} strokeWidth="0.6" />
      <path d="M 98 56 Q 110 70 118 72" fill="none" stroke={INK} strokeWidth="0.6" />
      <text x="108" y="54" textAnchor="middle" fontSize="6" fill={FAINT} style={mono}>split</text>
      <Page x={122} y={12} />
      <Page x={122} y={58} />
      <text x="6" y="98" fontSize="6" fill={FAINT} style={mono}>atomic save: write, sync, rename</text>
    </>
  );
}

/** A desktop window: file list on the left, a document open on the right. */
function DesktopWindow() {
  return (
    <>
      <rect x="12" y="10" width="136" height="80" fill="var(--bg)" stroke={INK} strokeWidth="0.7" />
      <line x1="12" y1="19" x2="148" y2="19" stroke={INK} strokeWidth="0.6" />
      {[18, 24, 30].map((x) => <circle key={x} cx={x} cy="14.5" r="1.6" fill="none" stroke={INK} strokeWidth="0.5" />)}
      <line x1="50" y1="19" x2="50" y2="90" stroke={INK} strokeWidth="0.5" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="17" y={25 + i * 10} width="5" height="6" fill="none" stroke={i === 1 ? ACC : FAINT} strokeWidth="0.5" />
          <line x1="25" y1={28 + i * 10} x2={44 - (i % 3) * 4} y2={28 + i * 10} stroke={i === 1 ? ACC : FAINT} strokeWidth="0.6" />
        </g>
      ))}
      <Page x={76} y={26} w={46} h={58} lines={9} accent />
    </>
  );
}

/** A phone in landscape showing a slide, with the editor's side rail. */
function Phone() {
  return (
    <>
      <rect x="14" y="20" width="132" height="64" rx="7" fill="var(--bg)" stroke={INK} strokeWidth="0.8" />
      <rect x="22" y="27" width="96" height="50" fill="var(--bg-2)" stroke={ACC} strokeWidth="0.7" />
      <line x1="30" y1="38" x2="78" y2="38" stroke={ACC} strokeWidth="1.4" />
      <line x1="30" y1="47" x2="70" y2="47" stroke={FAINT} strokeWidth="0.6" />
      <line x1="30" y1="53" x2="66" y2="53" stroke={FAINT} strokeWidth="0.6" />
      <rect x="82" y="44" width="28" height="24" fill="none" stroke={WARM} strokeWidth="0.7" />
      <path d="M 84 66 L 92 56 L 98 62 L 104 52 L 108 66" fill="none" stroke={WARM} strokeWidth="0.6" />
      {[30, 42, 54, 66].map((y) => <rect key={y} x="124" y={y} width="14" height="8" fill="none" stroke={INK} strokeWidth="0.5" />)}
      <text x="80" y="96" textAnchor="middle" fontSize="6" fill={FAINT} style={mono}>no network permission</text>
    </>
  );
}

/** Voronoi plates with a mountain ridge on the convergent boundary. */
function Plates() {
  const edges = [
    "M 0 34 L 34 40 L 52 18 L 56 0",
    "M 34 40 L 46 70 L 30 100",
    "M 46 70 L 92 62 L 112 82 L 118 100",
    "M 92 62 L 86 30 L 52 18",
    "M 86 30 L 120 20 L 128 0",
    "M 120 20 L 160 40",
    "M 112 82 L 160 70",
  ];
  const ridge: [number, number][] = [[88, 36], [90, 44], [91, 52], [92, 59]];
  return (
    <>
      <path d="M 86 30 L 120 20 L 160 40 L 160 70 L 112 82 L 92 62 Z" fill="color-mix(in oklch, var(--accent) 10%, transparent)" />
      {edges.map((d) => <path key={d} d={d} fill="none" stroke={INK} strokeWidth="0.6" />)}
      <path d="M 92 62 L 86 30" fill="none" stroke={ACC} strokeWidth="1.2" />
      {ridge.map(([x, y]) => <path key={`${x}${y}`} d={`M ${x - 4} ${y + 3} L ${x} ${y - 3} L ${x + 4} ${y + 3}`} fill="none" stroke={ACC} strokeWidth="0.7" />)}
      {[[18, 18], [70, 44], [130, 50], [40, 86], [100, 10], [140, 88]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="1.3" fill={INK} />
      ))}
      <path d="M 52 18 L 46 70" fill="none" stroke={WARM} strokeWidth="0.8" strokeDasharray="1.5 2" />
      <text x="96" y="98" fontSize="6" fill={FAINT} style={mono}>convergent: uplift</text>
    </>
  );
}

/** Large Biomes at 4x against realworld's 16x, at the same map scale. */
function BiomeScale() {
  const small = [0, 1, 2, 3].flatMap((r) => [0, 1, 2, 3].map((c) => [r, c]));
  return (
    <>
      {small.map(([r, c]) => (
        <rect key={`${r}${c}`} x={14 + c * 14} y={18 + r * 14} width="14" height="14"
          fill={(r + c) % 3 === 0 ? "color-mix(in oklch, var(--collapse) 22%, transparent)" : (r * c) % 2 ? "var(--bg-2)" : "var(--bg)"}
          stroke={INK} strokeWidth="0.4" />
      ))}
      <text x="42" y="12" textAnchor="middle" fontSize="6.5" fill={FAINT} style={mono}>4x</text>
      <rect x="86" y="18" width="56" height="56" fill="color-mix(in oklch, var(--accent) 16%, transparent)" stroke={ACC} strokeWidth="0.8" />
      <path d="M 86 52 Q 104 44 120 58 T 142 50" fill="none" stroke={ACC} strokeWidth="0.6" />
      <text x="114" y="12" textAnchor="middle" fontSize="6.5" fill={ACC} style={mono}>16x</text>
      <text x="80" y="92" textAnchor="middle" fontSize="6" fill={FAINT} style={mono}>same area, one biome</text>
    </>
  );
}

const FIGURES: Record<ClusterMember["fig"], () => React.JSX.Element> = {
  circuit: Circuit,
  simplex: Simplex,
  spectrum: Spectrum,
  landscape: Landscape,
  pages: Pages,
  window: DesktopWindow,
  phone: Phone,
  plates: Plates,
  biomes: BiomeScale,
};

export default function SpecimenFigure({ fig, label }: { fig: ClusterMember["fig"]; label: string }) {
  const Figure = FIGURES[fig];
  return (
    <svg viewBox="0 0 160 100" style={{ width: "100%", height: "100%", display: "block" }} role="img" aria-label={label}>
      <Figure />
    </svg>
  );
}
