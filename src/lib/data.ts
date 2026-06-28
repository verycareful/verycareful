import type {
  Hero,
  About,
  Research,
  Featured,
  IndexProject,
  NotebookEntry,
  Currently,
  Cert,
  Patent,
} from "./types";

export const HERO: Hero = {
  name: "SRICHARAN SURESH",
  thesis:
    "I build at the boundary of quantum theory and shipped software — Ising Hamiltonians, blind-signature protocols, NFC campus systems.",
  affil: "B.Tech CSE + Quantum Computing (Honors) · SRM IST Vadapalani",
  state: "|ψ⟩ = α|research⟩ + β|production⟩",
  status: [
    { k: "READING",  v: "Vaswani et al., Attention Is All You Need (2017)" },
    { k: "BUILDING", v: "lindblad — C++23 quantum simulator suite" },
    { k: "REVIEW",   v: "Merit-Order State Preparation for Budget-Efficient MA-QAOA (preprint rs-9533781)" },
  ],
};

export const ABOUT: About = {
  body: "Computer Science undergraduate at SRM IST Vadapalani specialising in Quantum Computing. I work at the intersection of research and production software — Ising/QUBO optimization, quantum K-means, and cross-platform campus systems with NFC, OCR and real-time sync. I care about technically serious work that is reproducible, usable, and privacy-respecting.",
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
    { n: "CSI Club",       r: "Head of PR & Outreach", p: "Jul 2025 — present" },
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
      "Full factorial benchmark of 44 MA-QAOA variants across budget tiers and problem sizes. Novel contributions: Merit-Order State Preparation (QSP), physics-informed and inverse-physics-informed mixer weights, Power Orbits, and Layerwise-Progressive training — applied to the Unit Commitment problem in power systems.",
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
      "Genuine quantum K-Means using SWAP-test fidelity as the distance metric. Validated on the ENB2012 dataset (n=768) and an expanded 4,998-sample high-dimensional set.",
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
    desc: "A full quantum stack in modern C++. Four simulator backends — statevector (OpenMP), density-matrix with exact Kraus channels, Clifford stabilizer tableau, and MPS — behind an AUTO selector. Device-realistic noise from T1/T2 specs with exact fidelity, concurrence, and von Neumann entropy metrics. A complete transpiler: ZYZ + KAK consolidation, SABRE layout and routing, IBM heavy-hex targeting, basis translation. Parameter-shift Estimator and Sampler primitives feed a broad algorithm suite — VQE, QAOA / MA-QAOA, Grover, Shor, QPE, QFT / IQFT / AQFT, Bernstein-Vazirani, Simon, Deutsch-Jozsa. OpenQASM 2/3 I/O and optional Python bindings. My long-term systems bet.",
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
    desc: "Four-phase C++ optimizer that exhaustively finds all global minima of a differentiable 2D loss function. Standard gradient descent collapses to one minimum; MAD uses minimum-ascent trajectories, pass-point stacking, and directional exclusion sets to systematically escape and catalogue every basin. Validated on Himmelblau, Rastrigin, Ackley, and Beale. Collaborations welcome — reach out if this direction interests you.",
    stack: ["C++17", "CMake", "Python"],
    cat: "Systems",
    status: "active",
    diagram: "mad",
    repo: "github.com/verycareful/MAD",
  },
  {
    name: "uc-quantum",
    sub: "Factorial quantum study of Unit Commitment in power systems",
    desc: "Full factorial benchmark of 44 MA-QAOA variants. Novel contributions include Merit-Order State Preparation, physics-informed mixer weights, Power Orbits, and Layerwise-Progressive training. Preprint under review.",
    stack: ["C++23", "Python", "Qiskit", "lindblad v2.3.2"],
    cat: "Quantum",
    status: "complete",
    diagram: "qaoa",
    repo: "github.com/verycareful/uc-quantum",
    doi: "doi.org/10.21203/rs.3.rs-9533781/v1",
  },
];

export const INDEX: IndexProject[] = [
  { name: "MAD Optimizer",             cat: "Systems",      status: "active",          year: "2026", stack: "C++17 · CMake · Python",     repo: "github.com/verycareful/MAD" },
  { name: "NotBigBrother",             cat: "Privacy",      status: "live",            year: "2024", stack: "Node.js · RSA blind sigs",    repo: "github.com/Zonde246/NotBigBrother", attr: "zParik" },
  { name: "kern",                      cat: "Privacy",      status: "active",          year: "2026", stack: "Kotlin · Compose · MuPDF",   repo: "github.com/verycareful/kern" },
  { name: "Qyra",                      cat: "Multiplatform",status: "active",          year: "2026", stack: "Tauri · Rust · React",       repo: "github.com/zParik/Qyra",            attr: "zParik" },
  { name: "Quantum K-Means",          cat: "Quantum",      status: "published",      year: "2025", stack: "Python · Qiskit",            repo: "github.com/verycareful/QKM",                  doi: "doi.org/10.5281/zenodo.18802705" },
  { name: "Industrial Defect Classifier", cat: "Systems",  status: "seeking venue",  year: "2025", stack: "PyTorch · ROCm",             repo: "github.com/verycareful/DL4SDD" },
  { name: "StEAM (Android)",          cat: "Multiplatform",status: "archived",        year: "2025", stack: "Kotlin · Compose · ML Kit",  repo: "github.com/verycareful/StEAM" },
  { name: "StEAM (.NET MAUI)",        cat: "Multiplatform",status: "archived",        year: "2024", stack: "C# · MAUI · NFC",            repo: "github.com/verycareful/StEAM_cs" },
  { name: "ResearchSync",             cat: "Multiplatform",status: "on hold",         year: "2025", stack: "C# · MAUI · SQLite",         repo: "github.com/verycareful/ResearchSync" },
  { name: "MapStrategyGame",          cat: "Systems",      status: "wip",             year: "2025", stack: "C# · Avalonia",              repo: "github.com/verycareful/MapStrategyGame" },
  { name: "Latecomers Web",           cat: "Web",          status: "complete",        year: "2024", stack: "React · TS · Supabase",      repo: "github.com/verycareful/Latecomers" },
  { name: "ODapp",                    cat: "Multiplatform",status: "complete",        year: "2024", stack: "MAUI · Supabase",            repo: "github.com/verycareful/ODAPP" },
  { name: "Sports Shop",              cat: "Web",          status: "complete",        year: "2024", stack: "React · Vite · Supabase",    repo: "github.com/verycareful/sportshopsite" },
  { name: "Smart Doorbell Alert",     cat: "IoT",          status: "complete",        year: "2024", stack: "ESP8266 · Arduino",          repo: null },
  { name: "ODSite",                   cat: "Web",          status: "complete",        year: "2024", stack: "Next.js · Supabase",         repo: "github.com/verycareful/ODSite" },
  { name: "Task Management System",   cat: "Systems",      status: "complete",        year: "2023", stack: "Java · Maven · FlatLaf",     repo: "github.com/verycareful/TMS" },
  { name: "PGP Sentence Lab",         cat: "Systems",      status: "wip",             year: "2025", stack: "Python · Flask",             repo: "github.com/verycareful/PGP" },
];

export const NOTEBOOK: NotebookEntry[] = [
  {
    date: "May 2026", tag: "ENGINEERING",
    title: "AI replaces coders. It won't replace engineers.",
    body: "Coding is translating a known solution into syntax. Software engineering is figuring out what the solution should even be — requirements that contradict, systems that fail in unexpected ways, tradeoffs nobody documented. AI is very good at the first thing. The second thing requires judgment built from shipping and being wrong.",
  },
  {
    date: "Apr 2026", tag: "ACADEMIC",
    title: "Fast-track semester 7 — best or worst decision",
    body: "Compressing a semester changes the texture of learning entirely. Either everything clicks faster under pressure, or nothing sticks because there's no time for it to settle. I genuinely don't know which one this is yet.",
  },
  {
    date: "Mar 2026", tag: "QUANTUM",
    title: "lindblad exists because I hit the Qiskit wall",
    body: "I needed to simulate more qubits than what was realistically possible in my Qiskit workflow. lindblad is now directly tied to my MA-QAOA energy-grid direction — better simulator control changes what experiments I can actually run.",
  },
  {
    date: "Mar 2026", tag: "QUANTUM",
    title: "Barren plateaus are genuinely terrifying",
    body: "The deeper the QAOA circuit, the flatter the gradient landscape. Layerwise Freezing helps but I'm not convinced it fully solves the problem at scale. Need to re-read Cerezo et al.",
  },
  {
    date: "Mar 2026", tag: "PRIVACY",
    title: "NotBigBrother might actually matter",
    body: "Most age-verification systems are surveillance pipelines with a legal cover story. Blind signatures decouple identity verification from activity tracking. The math is sound. The hard part is getting anyone to care.",
  },
  {
    date: "Feb 2026", tag: "ML",
    title: "Why did ResNet-50 beat EfficientNet on defect classification?",
    body: "EfficientNet is supposed to be more parameter-efficient but ResNet-50 GPU hit 89.03% vs EfficientNet-B0's 84.95%. Hypothesis: ResNet's skip connections handle low-level texture features in defect images better.",
  },
  {
    date: "Jan 2026", tag: "SYSTEMS",
    title: "NFC + Camera on Android is a nightmare",
    body: "On Samsung devices, CameraService actively suppresses NFC polling while a CameraCaptureSession is open. Took 3 days to figure out. Fixed it with a custom MauiCameraViewHandler and explicit CAMERA_STATE_CLOSED sync.",
  },
  {
    date: "Mar 2026", tag: "SYSTEMS",
    title: "Good software feels different when the process is real",
    body: "ResearchSync reminded me how rewarding properly developed software feels. Following a structured SDLC made the project calmer to build, easier to reason about, and far more maintainable.",
  },
];

export const CURRENTLY: Currently[] = [
  { k: "Working on", v: "lindblad roadmap (simulator + transpiler hardening); portfolio curation" },
  { k: "Reading",    v: "Vaswani et al. — Attention Is All You Need (2017)" },
  { k: "Thinking",   v: "German TV shows" },
  { k: "Located",    v: "Chennai, India · SRM IST Vadapalani" },
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
