import type {
  Hero,
  About,
  Research,
  Featured,
  IndexProject,
  NotebookEntry,
  Currently,
  RoadmapWeek,
  Cert,
  Patent,
} from "./types";

export const HERO: Hero = {
  name: "SRICHARAN SURESH",
  thesis:
    "I write quantum simulators in C++ and privacy-first Android software that never touches the network. Ising Hamiltonians one week, tectonic plate simulation the next.",
  affil: "B.Tech CSE + Quantum Computing (Honors) · SRM IST Vadapalani",
  state: "|ψ⟩ = α|research⟩ + β|production⟩",
  status: [
    { k: "READING",  v: "Batsambuu Batbold and Lori Ziegelmeier. From Chaos to Continents: Voronoi-Based Procedural Terrain Generation with Hydrology and 3D Visualization (Media Exposition)" },
    { k: "BUILDING", v: "kern - PPTX suite" },
    { k: "REVIEW",   v: "Merit-Order State Preparation for Budget-Efficient MA-QAOA (preprint rs-9533781)" },
  ],
};

export const ABOUT: About = {
  body: "Computer Science undergraduate at SRM IST Vadapalani, specialising in Quantum Computing. Half my time goes into research code: Ising and QUBO formulations, quantum K-means built on SWAP-test fidelity, MA-QAOA benchmarked against simulated annealing. The other half goes into software that runs offline by construction, like a document toolkit that asks for no network permission at all. Clone any repo of mine and you should be able to reproduce what it claims.",
  stats: [
    { v: "9.40/10",  k: "B.Tech CSE — CGPA" },
    { v: "10.00/10", k: "Quantum (Hons) — CGPA" },
    { v: "3",        k: "Papers (incl. under review)" },
    { v: "15+",      k: "Public repositories" },
  ],
  edu: [
    { d: "B.Tech CSE",                       i: "SRM IST Vadapalani", p: "2023 — present", c: "9.40" },
    { d: "B.Tech (Honors), Quantum Computing", i: "SRM IST Vadapalani", p: "2025 — present", c: "10.00" },
  ],
  org: [
    { n: "CSI Club",       r: "Head of PR & Outreach", p: "Jul 2025 — Aug 2026" },
    { n: "SYNC Community", r: "President",              p: "Apr 2026 — present" },
    { n: "SYNC Community", r: "Head of Operations",    p: "Aug 2024 — Apr 2026" },
  ],
};

export const RESEARCH: Research[] = [
  {
    n: "01",
    title: "Merit-Order State Preparation for Budget-Efficient MA-QAOA: A Factorial Study of Initialisation, Training, and Noise Resilience in Power Systems Unit Commitment",
    period: "Jan 2026 — May 2026",
    status: "under review",
    venue: "Research Square · preprint · DOI 10.21203/rs.3.rs-9533781/v1",
    doi: "doi.org/10.21203/rs.3.rs-9533781/v1",
    stack: ["C++23", "Python", "Qiskit", "lindblad", "QAOA"],
    summary:
      "Factorial benchmark of 42 MA-QAOA variants across three budget tiers and two problem sizes, applied to Unit Commitment in power systems. The contributions are merit-order state preparation, physics-informed and inverse mixer weights, power orbits, and layerwise-progressive training. Merit-order preparation reaches 98.5% success at 50 circuit evaluations, then falls to between 22 and 40% the moment you pair it with any other parameter initialisation.",
    eq: "Ĥ = −J Σᵢⱼ σᵢᶻσⱼᶻ − Γ Σᵢ σᵢˣ",
    repo: "github.com/verycareful/uc-quantum",
  },
  {
    n: "02",
    title: "Comparative Analysis of Classical and Quantum K-Means Clustering",
    period: "2025",
    status: "published",
    venue: "Zenodo · DOI 10.5281/zenodo.18802705",
    doi: "doi.org/10.5281/zenodo.18802705",
    stack: ["Python", "Qiskit", "Scikit-learn", "NumPy"],
    summary:
      "Quantum K-Means that takes its distance metric from SWAP-test fidelity instead of approximating it classically. Tested on ENB2012 (n=768) and a 4,998-sample high-dimensional set.",
    eq: "F(|φ⟩,|ψ⟩) = |⟨φ|ψ⟩|²  via SWAP test",
    repo: "github.com/verycareful/QKM",
  },
  {
    n: "03",
    title: "Automated Industrial Surface Defect Classification System",
    period: "2025",
    status: "seeking venue",
    venue: "seeking venue",
    stack: ["PyTorch", "EfficientNet", "ResNet-50", "ROCm"],
    summary:
      "17-model study across 4 deep-learning architectures and 9 classical baselines. ResNet-50 (GPU) reached 89.03% accuracy at 3.02 ms latency (331 FPS).",
    eq: "argmin_θ  𝔼[ℓ(f_θ(x), y)]   with transfer init",
    repo: "github.com/verycareful/DL4SDD",
  },
];

export const FEATURED: Featured[] = [
  {
    name: "lindblad",
    sub: "C++23 quantum computing framework",
    desc: "A quantum stack in modern C++. Four simulator backends sit behind an AUTO selector: statevector on OpenMP, density matrix with exact Kraus channels, Clifford stabilizer tableau, and MPS. Noise comes from real T1 and T2 specs, with fidelity, concurrence and von Neumann entropy computed exactly rather than sampled. The transpiler does ZYZ and KAK consolidation, SABRE layout and routing, IBM heavy-hex targeting, and basis translation. Parameter-shift Estimator and Sampler primitives drive VQE, QAOA, MA-QAOA, Grover, Shor, QPE, the QFT family, Bernstein-Vazirani, Simon and Deutsch-Jozsa. Reads and writes OpenQASM 2 and 3, with Python bindings if you want them. This is the project I expect to still be working on in five years.",
    stack: ["C++23", "CMake", "Eigen", "NLopt", "OpenMP", "pybind11"],
    cat: "Quantum",
    status: "active",
    diagram: "qpp",
    repo: "github.com/verycareful/lindblad",
    site: "verycareful.github.io/lindblad-site/",
  },
  {
    name: "MAD",
    sub: "Minimum Ascent Descent — multi-minimum optimizer",
    desc: "Four-phase C++ optimizer that finds every global minimum of a differentiable 2D loss function, not just the first one gradient descent falls into. It descends to a minimum, climbs out along the shallowest valid uphill direction while avoiding basins it has already catalogued, drops a pass point wherever the valley branches, then pops that stack to try the other branches. Tested on Himmelblau, Rastrigin, Ackley and Beale. I would welcome collaborators on this one.",
    stack: ["C++17", "CMake", "Python"],
    cat: "Systems",
    status: "active",
    diagram: "mad",
    repo: "github.com/verycareful/MAD",
  },
  {
    name: "uc-quantum",
    sub: "Factorial quantum study of Unit Commitment in power systems",
    desc: "Factorial benchmark of 42 MA-QAOA variants against the Unit Commitment problem, covering state preparation, parameter initialisation, training schedule and symmetry reduction. Merit-order state preparation wins at tight budgets and breaks under most pairings, which is the result the paper is built around. Preprint under review at Quantum Machine Intelligence.",
    stack: ["C++23", "Python", "Qiskit", "lindblad v2.3.2"],
    cat: "Quantum",
    status: "complete",
    diagram: "qaoa",
    repo: "github.com/verycareful/uc-quantum",
    doi: "doi.org/10.21203/rs.3.rs-9533781/v1",
  },
];

export const INDEX: IndexProject[] = [
  { name: "lindblad",                 cat: "Quantum",      status: "active",         year: "2026", stack: "C++23 · CMake · Eigen",      repo: "github.com/verycareful/lindblad" },
  { name: "Terramax",                 cat: "Systems",      status: "active",         year: "2026", stack: "Java · Fabric · Gradle",     repo: "github.com/verycareful/Terramax" },
  { name: "kern",                     cat: "Privacy",      status: "active",         year: "2026", stack: "Kotlin · Compose · MuPDF",   repo: "github.com/verycareful/kern" },
  { name: "MAD Optimizer",            cat: "Systems",      status: "active",         year: "2026", stack: "C++17 · CMake · Python",     repo: "github.com/verycareful/MAD" },
  { name: "Qyra",                     cat: "Privacy",      status: "active",         year: "2026", stack: "Rust · JNI · MuPDF",         repo: "github.com/verycareful/Qyra",       attr: "fork of zParik" },
  { name: "KuralAI",                  cat: "Systems",      status: "paused",         year: "2026", stack: "Python · Docker",            repo: "github.com/verycareful/KuralAI" },
  { name: "Folio",                    cat: "Web",          status: "paused",         year: "2026", stack: "Next.js · TS · Supabase",    repo: null },
  { name: "ResearchSync",             cat: "Multiplatform",status: "on hold",        year: "2025", stack: "C# · MAUI · SQLite",         repo: null },
  { name: "EnergyGridOptimisation",   cat: "Quantum",      status: "on hold",        year: "2026", stack: "Python · Qiskit · MA-QAOA",  repo: null },
  { name: "Quantum K-Means",          cat: "Quantum",      status: "published",      year: "2025", stack: "Python · Qiskit",            repo: "github.com/verycareful/QKM",        doi: "doi.org/10.5281/zenodo.18802705" },
  { name: "Industrial Defect Classifier", cat: "Systems",  status: "archived",       year: "2025", stack: "PyTorch · ROCm",             repo: null },
  { name: "Stellar Blitz",            cat: "Systems",      status: "archived",       year: "2026", stack: "Unity 6 · C# · URP",         repo: "github.com/verycareful/ARVR-project" },
  { name: "StEAM (Android)",          cat: "Multiplatform",status: "archived",       year: "2025", stack: "Kotlin · Compose · ML Kit",  repo: null },
  { name: "StEAM (.NET MAUI)",        cat: "Multiplatform",status: "archived",       year: "2024", stack: "C# · MAUI · NFC",            repo: "github.com/verycareful/StEAM_cs" },
  { name: "MapStrategyGame",          cat: "Systems",      status: "archived",       year: "2025", stack: "C# · Avalonia · SkiaSharp",  repo: null },
  { name: "Latecomers Web",           cat: "Web",          status: "archived",       year: "2024", stack: "React · TS · Supabase",      repo: "github.com/verycareful/Latecomers" },
  { name: "ODapp",                    cat: "Multiplatform",status: "archived",       year: "2024", stack: "MAUI · Supabase",            repo: "github.com/verycareful/ODAPP" },
  { name: "ODSite",                   cat: "Web",          status: "archived",       year: "2024", stack: "Next.js · Supabase",         repo: "github.com/verycareful/ODSite" },
  { name: "Sports Shop",              cat: "Web",          status: "archived",       year: "2024", stack: "React · Vite · Supabase",    repo: "github.com/verycareful/sportshopsite" },
  { name: "Task Management System",   cat: "Systems",      status: "archived",       year: "2023", stack: "Java · Maven · FlatLaf",     repo: "github.com/verycareful/TMS" },
  { name: "PGP Sentence Lab",         cat: "Systems",      status: "archived",       year: "2025", stack: "Python · Flask · lambeq",    repo: "github.com/verycareful/PGP" },
  { name: "Smart Doorbell Alert",     cat: "IoT",          status: "complete",       year: "2024", stack: "ESP8266 · Arduino",          repo: null },
];

export const NOTEBOOK: NotebookEntry[] = [
  {
    date: "May 2026", tag: "ENGINEERING",
    title: "AI replaces coders. It won't replace engineers.",
    body: "Coding turns a known solution into syntax. Engineering works out what the solution should be, against requirements that contradict each other and tradeoffs nobody wrote down. Models handle the first job now. I only got better at the second one by shipping things that broke.",
  },
  {
    date: "Apr 2026", tag: "ACADEMIC",
    title: "Fast-track semester 7: best or worst decision",
    body: "Compressing a semester changes how the material lands. Some of it clicks faster under pressure than it would have otherwise. The rest never settles, because there is no gap left for it to settle into. Ask me in December which half won.",
  },
  {
    date: "Mar 2026", tag: "QUANTUM",
    title: "lindblad exists because I hit the Qiskit wall",
    body: "I needed more qubits than my workflow would give me, so I started writing my own simulator. lindblad now feeds the MA-QAOA energy-grid work. Owning the backend changes which experiments I can run at all, not just how fast they finish.",
  },
  {
    date: "Mar 2026", tag: "QUANTUM",
    title: "Barren plateaus are terrifying",
    body: "The deeper the QAOA circuit, the flatter the gradient landscape gets. Layerwise Freezing helps. I doubt it survives at scale. Re-reading Cerezo et al. this week to find out where it breaks.",
  },
  {
    date: "Mar 2026", tag: "PRIVACY",
    title: "NotBigBrother might matter",
    body: "Most age-verification systems are surveillance pipelines wearing a legal cover story. Chaum blind signatures split the identity check from the activity log, so the issuer and the site each learn one half and neither learns you. The cryptography holds up fine. Convincing a regulator to require it is the part I have no idea how to do.",
  },
  {
    date: "Feb 2026", tag: "ML",
    title: "ResNet-50 beat EfficientNet on defect classification",
    body: "EfficientNet is meant to be the parameter-efficient one, and it lost: ResNet-50 on GPU hit 89.03% against EfficientNet-B0's 84.95%. My guess is the skip connections carry low-level texture through the network, and a surface defect is mostly texture.",
  },
  {
    date: "Jan 2026", tag: "SYSTEMS",
    title: "NFC + Camera on Android is a nightmare",
    body: "On Samsung devices, CameraService suppresses NFC polling while a CameraCaptureSession is open. Three days to find that. The fix was a custom MauiCameraViewHandler that waits on CAMERA_STATE_CLOSED before it re-enables polling.",
  },
  {
    date: "Mar 2026", tag: "SYSTEMS",
    title: "A real process changes how the build feels",
    body: "ResearchSync is the first project where I followed a structured SDLC instead of improvising as I went. The build was calmer. When something broke two increments later I could find it, because I had written down why the thing existed in the first place.",
  },
];

export const CURRENTLY: Currently[] = [
  { k: "Working on", v: "kern's pptx editor, and tectonic terrain in Terramax" },
  { k: "Waiting on", v: "uc-quantum round 2 review. Revisions take priority over everything when they arrive" },
  { k: "Reading",    v: "Vaswani et al. · Attention Is All You Need (2017)" },
  { k: "Located",    v: "Chennai, India · SRM IST Vadapalani" },
];

/**
 * Planned work, four weeks ahead. Hand-written and deliberately short.
 * The generated half of the roadmap lives in activity.json and is not
 * edited here. If a planned week did not happen, leave it: the contrast
 * between this and the activity chart is the point.
 */
export const ROADMAP: RoadmapWeek[] = [
  {
    start: "2026-09-07", label: "Sep 7",
    projects: ["kern", "Terramax"],
    note: "pptx editor work in flight; terrain redesign slice 1",
  },
  {
    start: "2026-09-14", label: "Sep 14",
    projects: ["lindblad", "autonne"],
  },
  {
    start: "2026-09-21", label: "Sep 21",
    projects: ["MAD", "kern"],
  },
  {
    start: "2026-09-28", label: "Sep 28",
    projects: ["lindblad", "autonne"],
    note: "optimizer measurement work, lindblad#101, if scheduled",
  },
];

export const CERTS: Cert[] = [
  { n: "Quantum Mechanics",                                       i: "Coursera · UCB",                   d: "May 2026",  l: "https://www.coursera.org/account/accomplishments/verify/PW9GW8GSMMXC" },
  { n: "General Formulation of Quantum Information",              i: "IBM",                               d: "Apr 2026",  l: "https://www.credly.com/badges/5b720628-6057-493e-8f30-9314cf0ce09e/print" },
  { n: "Introduction to Natural Language Processing",             i: "upGrad",                            d: "Apr 2026",  l: "https://certificates.upgrad.com/98a38fac-a8ae-4ce7-a94d-32e7d9bd2272-Free%20Course%20Completion-agXWCOQOTxx4Zpw5.jpeg" },
  { n: "Cybersecurity Essentials",                                i: "FutureSkills Prime",                d: "Mar 2026",  l: "https://inspiration-fun-7467.my.salesforce-sites.com/CDACcertificatePage2?id=a02Vy00001053b3IAA" },
  { n: "Basics of Quantum Information",                           i: "IBM",                               d: "Mar 2026",  l: "https://www.credly.com/badges/ea0f44da-bded-447f-b83d-bc8d2961423b" },
  { n: "Fundamentals of Network Security and Cryptography",       i: "Coursera · Packt",                 d: "Mar 2026",  l: "https://www.coursera.org/account/accomplishments/verify/020M9IAVN6R5" },
  { n: "Compiler Design",                                         i: "Academy Europe Open University",   d: "Mar 2026",  l: "https://drive.google.com/file/d/1xAenCFPP1JaYA5BJq596fproeKSSpmn_/view" },
  { n: "Data Processing and Visualisation",                       i: "FutureSkills Prime",               d: "Mar 2026",  l: "https://drive.google.com/file/d/1jZHOxT3QJm9IdYzG26GmYkibSUxQ6I9w/view" },
  { n: "Data Science for Beginners",                              i: "FutureSkills Prime",               d: "Mar 2026",  l: "https://drive.google.com/file/d/1yCu5k21svcWAty0LbfnB4OndKPV3wAZ6/view" },
  { n: "Software Engineering Fundamentals — Software Development and Testing", i: "Infosys Springboard", d: "Feb 2026",  l: "https://drive.google.com/file/d/1X2zjpxU6hRQTCNhEUoNqg-3TxUiepVt9/view" },
  { n: "Certificate Program in Artificial Intelligence & Machine Learning",    i: "FutureSkills Prime",  d: "Nov 2025",  l: "https://inspiration-fun-7467.my.salesforce-sites.com/CDACcertificatePage2?id=a02Vy00000bZPKnIAO" },
  { n: "Quantum Computing For Everyone — An Introduction",        i: "Coursera · Fractal Analytics",     d: "Oct 2025",  l: "https://coursera.org/share/922ae472bc13700c3d510c2766cf8c5b" },
  { n: "Demystifying Networking",                                 i: "NPTEL",                            d: "Aug 2025",  l: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs125/Course/NPTEL25CS125S63320257809160762.pdf" },
  { n: "Introduction to MongoDB",                                 i: "MongoDB",                          d: "Jun 2025",  l: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b595aee2-c89a-422b-b949-fe9f7524ef27-sricharan-s-ra2311003040063-5111c2b0-5dbe-40a1-96e2-a12b3464f351-certificate.pdf" },
  { n: "MongoDB Basics for Students",                             i: "MongoDB",                          d: "Jun 2025",  l: "https://learn.mongodb.com/c/Z4QkuWhARMmEZMc87MHVnA" },
  { n: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms", i: "Coursera · Stanford University", d: "Apr 2025", l: "https://coursera.org/share/a7d808915d8941da35c85f1423367b80" },
  { n: "Data Base Management System",                             i: "NPTEL",                            d: "Mar 2025",  l: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs18/Course/NPTEL25CS18S55040067101392285.pdf" },
  { n: "Geodata Processing using Python and Machine Learning",    i: "IIRS · ISRO",                      d: "Feb 2025",  l: "https://certificate.iirs.gov.in/checkstatus.php?uid=4def325060381a0042f2c18702524329&enm=20251562683915" },
  { n: "Linux for Beginners",                                     i: "Infosys Springboard",              d: "Oct 2024",  l: "https://drive.google.com/file/d/1au8_vOzPZu2cqvNGTh5WfxIUewZbd-FQ/view" },
  { n: "Introduction to Unix",                                    i: "Infosys Springboard",              d: "Oct 2024",  l: "https://drive.google.com/file/d/1rUeplMCUXIorZ7e-bADZKy60G_Fqf5hY/view" },
  { n: "Programming, Data Structures and Algorithms using Python", i: "NPTEL",                           d: "Sep 2024",  l: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs78/Course/NPTEL24CS78S33310953202760773.pdf" },
  { n: "Design Thinking — A Primer",                             i: "NPTEL",                             d: "Aug 2024",  l: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/110/noc24-mg72/Course/NPTEL24MG72S43310970802760773.pdf" },
  { n: "C for Beginners",                                         i: "Great Learning",                   d: null,        l: "https://www.mygreatlearning.com/certificate/GOUOKTCJ" },
];

export const PATENT: Patent = {
  id: "IN202541069649",
  title: "A System of Ergonomic Assistive Writing Using a Pressure-Sensitive Digital Pen",
  filed: "July 2025",
  office: "Indian Patent Office",
};
