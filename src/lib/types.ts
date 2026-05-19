export interface HeroStatus {
  k: string;
  v: string;
}

export interface Hero {
  name: string;
  thesis: string;
  affil: string;
  state: string;
  status: HeroStatus[];
}

export interface Stat {
  v: string;
  k: string;
}

export interface Education {
  d: string;
  i: string;
  p: string;
  c: string;
}

export interface Organisation {
  n: string;
  r: string;
  p: string;
}

export interface About {
  body: string;
  stats: Stat[];
  edu: Education[];
  org: Organisation[];
}

export interface Research {
  n: string;
  title: string;
  period: string;
  status: string;
  venue: string;
  doi?: string;
  stack: string[];
  summary: string;
  eq: string;
  repo: string;
}

export interface Featured {
  name: string;
  sub: string;
  desc: string;
  stack: string[];
  cat: string;
  status: string;
  diagram: "qpp" | "blind" | "qaoa" | "mad";
  repo: string;
  site?: string;
  doi?: string;
}

export interface IndexProject {
  name: string;
  cat: string;
  status: string;
  year: string;
  stack: string;
  repo: string | null;
  doi?: string;
  attr?: string;
}

export interface NotebookEntry {
  date: string;
  tag: string;
  title: string;
  body: string;
}

export interface Currently {
  k: string;
  v: string;
}

export interface Cert {
  n: string;
  i: string;
  d: string | null;
  l: string | null;
}

export interface Patent {
  id: string;
  title: string;
  filed: string;
  office: string;
}
