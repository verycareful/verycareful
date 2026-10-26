import type {
  Hero,
  About,
  Research,
  Cluster,
  IndexProject,
  NotebookEntry,
  Currently,
  Cert,
  Patent,
} from "./types";

export const HERO: Hero = {
  name: "SRICHARAN SURESH",
  thesis:
    "I write a quantum computing stack in C++23, with the optimizers and linear algebra under it, and document tools for Android and the desktop that never touch the network. Ising Hamiltonians one week, tectonic plates the next.",
  affil: "B.Tech CSE + Quantum Computing (Honors) · SRM IST Vadapalani",
  state: "|ψ⟩ = α|research⟩ + β|production⟩",
  status: [
    { k: "READING",  v: "Batsambuu Batbold and Lori Ziegelmeier. From Chaos to Continents: Voronoi-Based Procedural Terrain Generation with Hydrology and 3D Visualization (Media Exposition)" },
    { k: "BUILDING", v: "My own Hyprland configuration" },
    { k: "PUBLISHED", v: "Merit-Order State Preparation for Budget-Efficient MA-QAOA (Quantum Machine Intelligence 8(2), 117)" },
  ],
};

export const ABOUT: About = {
  body: "Computer Science undergraduate at SRM IST Vadapalani, specialising in Quantum Computing. Half my time goes into research code: Ising and QUBO formulations, quantum K-means built on SWAP-test fidelity, MA-QAOA benchmarked against simulated annealing. The other half goes into private software, like a document toolkit that asks for no network permission at all. Clone any repo of mine and you should be able to reproduce what it claims.",
  stats: [
    { v: "9.40/10",  k: "B.Tech CSE · CGPA" },
    { v: "10.00/10", k: "Quantum (Hons) · CGPA" },
    { v: "3",        k: "Papers (2 published)" },
    { v: "15+",      k: "Public repositories" },
  ],
  edu: [
    { d: "B.Tech CSE",                       i: "SRM IST Vadapalani", p: "2023 – present", c: "9.40" },
    { d: "B.Tech (Honors), Quantum Computing", i: "SRM IST Vadapalani", p: "2025 – present", c: "10.00" },
  ],
  org: [
    { n: "CSI Club",       r: "Head of PR & Outreach", p: "Jul 2025 – Aug 2026" },
    { n: "SYNC Community", r: "President",              p: "Apr 2026 – present" },
    { n: "SYNC Community", r: "Head of Operations",    p: "Aug 2024 – Apr 2026" },
  ],
};

export const RESEARCH: Research[] = [
  {
    n: "01",
    title: "Merit-Order State Preparation for Budget-Efficient MA-QAOA: A Factorial Study of Initialisation, Training, and Noise Resilience in Power Systems Unit Commitment",
    period: "Jan 2026 – May 2026",
    status: "published",
    venue: "Quantum Machine Intelligence 8(2), 117 (2026) · Springer Nature · DOI 10.1007/s42484-026-00465-7",
    doi: "doi.org/10.1007/s42484-026-00465-7",
    stack: ["C++23", "lindblad", "NLopt", "Eigen", "QAOA"],
    summary:
      "Factorial benchmark of 42 MA-QAOA variants across three budget tiers and two problem sizes, applied to Unit Commitment in power systems. The contributions are merit-order state preparation, physics-informed and inverse mixer weights, power orbits, and layerwise-progressive training. Merit-order preparation reaches 98.5% success at 50 circuit evaluations, then falls to between 22 and 40% the moment you pair it with any other parameter initialisation.",
    eq: "Ĥ = −J Σᵢⱼ σᵢᶻσⱼᶻ − Γ Σᵢ σᵢˣ",
    repo: null,
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
    repo: null,
  },
];

export const CLUSTERS: Cluster[] = [
  {
    name: "lindblad",
    sub: "A C++23 quantum computing stack, and the work built on it",
    desc: "lindblad is a quantum computing framework in modern C++. Four simulator backends sit behind an AUTO selector: statevector on OpenMP, density matrix with exact Kraus channels, Clifford stabilizer tableau, and MPS. The transpiler does ZYZ and KAK consolidation, SABRE layout and routing, and IBM heavy-hex targeting, and parameter-shift primitives drive VQE, QAOA, MA-QAOA, Grover, Shor and the QFT family. FLOP supplies the derivative-free optimizers the variational algorithms call. autonne, written with shek014 and zParik, supplies the small complex SVDs the MPS backend splits its bonds with. uc-quantum is the first paper run on it. This is the project I expect to still be working on in five years.",
    cat: "Quantum",
    members: [
      { name: "lindblad",   role: "Simulators, transpiler and algorithms",                       stack: "C++23 · Eigen · OpenMP · pybind11", status: "active",   repo: "github.com/verycareful/lindblad", site: "verycareful.github.io/lindblad-site/", fig: "circuit" },
      { name: "FLOP",       role: "Derivative-free optimizers: COBYLA and Nelder-Mead",          stack: "C++23 · CMake",                     status: "active",   repo: "github.com/verycareful/FLOP", fig: "simplex" },
      { name: "autonne",    role: "Truncated SVD and Hermitian eigensolver for small matrices",  stack: "C++ · CMake",                       status: "active",   repo: "github.com/shek014/autonne", attr: "shek014, zParik", fig: "spectrum" },
      { name: "uc-quantum", role: "MA-QAOA for Unit Commitment, published in Quantum Machine Intelligence", stack: "C++23 · lindblad · NLopt", status: "published", repo: null, doi: "doi.org/10.1007/s42484-026-00465-7", fig: "landscape" },
    ],
  },
  {
    name: "kern",
    sub: "Document tools that never touch the network",
    desc: "kern is a document toolkit that never needs the network. kernkraft is the shared Rust core: document formats, PDF page operations (extract, split, merge, rotate, reorder) and the file operations around them, with atomic saves. No crate in it may depend on an HTTP, socket or async runtime, and CI checks that. kern - desktop wraps the core in a Tauri app. kern - android is the Kotlin app, with document viewers and a PowerPoint editor, and moves onto the same core later.",
    cat: "Privacy",
    members: [
      { name: "kernkraft",     role: "Shared core: formats, PDF operations, atomic save", stack: "Rust · MuPDF",             status: "active",            repo: "github.com/verycareful/kernkraft", fig: "pages" },
      { name: "kern - desktop", role: "Desktop app on the shared core",                   stack: "Rust · Tauri · TypeScript", status: "early development", repo: "github.com/verycareful/kern-desktop", fig: "window" },
      { name: "kern - android", role: "Android app: viewers and a PowerPoint editor",     stack: "Kotlin · Compose · MuPDF",  status: "active",            repo: "github.com/verycareful/kern", fig: "phone" },
    ],
  },
  {
    name: "Terramax",
    sub: "Minecraft worlds at continental scale",
    desc: "Terramax is a Fabric mod for Minecraft 26.2 with its own world generator. Terrain starts from simulated tectonic plates: centres scattered by Poisson disk sampling, cells resolved as a Voronoi diagram, and relief driven by what happens at each boundary, with plates about 100,000 blocks apart. Biomes then follow plate type, elevation and erosion instead of climate noise. realworld came first and is much smaller. It keeps vanilla's generator and lowers the octave of the four noises behind Large Biomes, so biomes run at 16x vanilla instead of 4x. It is released for 26.2 and 1.21.",
    cat: "Systems",
    members: [
      { name: "Terramax",  role: "World generator from a tectonic plate model", stack: "Java 25 · Fabric · Gradle", status: "active",     repo: "github.com/verycareful/Terramax", fig: "plates" },
      { name: "realworld", role: "Large Biomes at 16x, for 26.2 and 1.21",      stack: "Java · Fabric",             status: "maintained", repo: "github.com/verycareful/realworld", fig: "biomes" },
    ],
  },
];

export const INDEX: IndexProject[] = [
  { name: "lindblad",                 cat: "Quantum",      status: "active",         year: "2026", stack: "C++23 · CMake · Eigen",      repo: "github.com/verycareful/lindblad" },
  { name: "FLOP",                     cat: "Systems",      status: "active",         year: "2026", stack: "C++23 · CMake",              repo: "github.com/verycareful/FLOP" },
  { name: "autonne",                  cat: "Systems",      status: "active",         year: "2026", stack: "C++ · CMake",                repo: "github.com/shek014/autonne",    attr: "shek014, zParik" },
  { name: "uc-quantum",               cat: "Quantum",      status: "published",      year: "2026", stack: "C++23 · lindblad · NLopt",   repo: null,                              doi: "doi.org/10.1007/s42484-026-00465-7" },
  { name: "lindblad-site",            cat: "Web",          status: "active",         year: "2026", stack: "React · TypeScript",         repo: "github.com/verycareful/lindblad-site" },
  { name: "Terramax",                 cat: "Systems",      status: "active",         year: "2026", stack: "Java · Fabric · Gradle",     repo: "github.com/verycareful/Terramax" },
  { name: "realworld",                cat: "Systems",      status: "maintained",     year: "2026", stack: "Java · Fabric",              repo: "github.com/verycareful/realworld" },
  { name: "kern - android",           cat: "Privacy",      status: "active",         year: "2026", stack: "Kotlin · Compose · MuPDF",   repo: "github.com/verycareful/kern" },
  { name: "kernkraft",                cat: "Privacy",      status: "active",         year: "2026", stack: "Rust · MuPDF",               repo: "github.com/verycareful/kernkraft" },
  { name: "kern - desktop",           cat: "Privacy",      status: "early development", year: "2026", stack: "Rust · Tauri · TypeScript", repo: "github.com/verycareful/kern-desktop" },
  { name: "MAD Optimizer",            cat: "Systems",      status: "active",         year: "2026", stack: "C++17 · CMake · Python",     repo: "github.com/verycareful/MAD" },
  { name: "dotfiles",                 cat: "Systems",      status: "active",         year: "2026", stack: "Hyprland · QML · Shell",     repo: "github.com/verycareful/dotfiles" },
  { name: "KuralAI",                  cat: "Systems",      status: "paused",         year: "2026", stack: "Python · Docker",            repo: "github.com/verycareful/KuralAI" },
  { name: "Folio",                    cat: "Web",          status: "paused",         year: "2026", stack: "Next.js · TS · Supabase",    repo: null },
  { name: "ResearchSync",             cat: "Multiplatform",status: "on hold",        year: "2025", stack: "C# · MAUI · SQLite",         repo: null },
  { name: "EnergyGridOptimisation",   cat: "Quantum",      status: "on hold",        year: "2026", stack: "Python · Qiskit · MA-QAOA",  repo: null },
  { name: "Quantum K-Means",          cat: "Quantum",      status: "published",      year: "2025", stack: "Python · Qiskit",            repo: "github.com/verycareful/QKM",        doi: "doi.org/10.5281/zenodo.18802705" },
  { name: "Gate Set Characterisation", cat: "Quantum",     status: "archived",       year: "2026", stack: "C++23 · Python · lindblad",  repo: null },
  { name: "Industrial Defect Classifier", cat: "Systems",  status: "archived",       year: "2025", stack: "PyTorch · ROCm",             repo: null },
  { name: "Stellar Blitz",            cat: "Systems",      status: "archived",       year: "2026", stack: "Unity 6 · C# · URP",         repo: "github.com/verycareful/ARVR-project" },
  { name: "TrustNote AI",             cat: "Systems",      status: "archived",       year: "2026", stack: "Python · MobileNetV3",       repo: "github.com/verycareful/trustnote-ai", attr: "fork of 11saishiva" },
  { name: "ProjectXero",              cat: "Privacy",      status: "archived",       year: "2026", stack: "JavaScript · Python",        repo: null },
  { name: "RepHelper",                cat: "Multiplatform",status: "archived",       year: "2026", stack: "C# · MAUI",                  repo: null },
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

/**
 * Current entries only. Retired entries live in docs/notebook-archive.md,
 * which is not rendered.
 */
export const NOTEBOOK: NotebookEntry[] = [
  {
    date: "Oct 2026", tag: "QUANTUM",
    title: "Writing COBYLA and Nelder-Mead from the papers",
    body: "FLOP is the optimizer library lindblad's variational algorithms call, and every algorithm in it is written from the original paper: Powell for COBYLA, Lagarias, Reeds, Wright and Wright for Nelder-Mead. Each one shipped first and got its full test suite one release later. COBYLA's suite found two problems. Nelder-Mead's found seven.",
  },
  {
    date: "Oct 2026", tag: "QUANTUM",
    title: "An SVD that changed with the heap layout",
    body: "autonne's divide-and-conquer SVD returned different output for the same matrix depending on where the heap put things, but only when GCC built it for an FMA target. lindblad's MPS backend splits every bond with it, so a run could not reproduce itself. The report went upstream as autonne issue #20, and lindblad 1.1.31.3 shipped with reproducible factorisations.",
  },
  {
    date: "Oct 2026", tag: "PRIVACY",
    title: "No network code, enforced by the build",
    body: "kernkraft has a rule a privacy policy cannot give you: no crate in it may depend on an HTTP client, a socket library or an async runtime. cargo deny fails the build if one appears, so the rule covers dependencies of dependencies too, not just the crates I remember to check.",
  },
  {
    date: "Sep 2026", tag: "SYSTEMS",
    title: "Testing terrain at 100,000-block scale",
    body: "Terramax puts tectonic plates about 100,000 blocks apart. Checking one plate boundary in-game means flying there after every change. So the terrain maths is moving into a core module with no Minecraft dependency, and a standalone simulator renders it instead.",
  },
];

export const CURRENTLY: Currently[] = [
  { k: "Working on", v: "the statevector simulator optimiser in lindblad" },
  { k: "Building",   v: "kern - desktop as the system's default file manager, with clipboard and drag-and-drop that work with other apps" },
  { k: "Located",    v: "Chennai, India · SRM IST Vadapalani" },
];

export const CERTS: Cert[] = [
  { n: "Vector Search Fundamentals",                              i: "MongoDB",                          d: "Jul 2026",  l: "https://drive.google.com/file/d/1yaeH8mndZ5FHcerKaN-CH01A5MdXs_hr/view" },
  { n: "RAG with MongoDB",                                        i: "MongoDB",                          d: "Jul 2026",  l: "https://drive.google.com/file/d/1XUlzHa6uLdEqwcg7_VXfIZ4K27WJC1py/view" },
  { n: "Fundamentals of Data Transformation",                     i: "MongoDB",                          d: "Jul 2026",  l: "https://drive.google.com/file/d/1RFYrH8PXl1j_c6C4Uc8VE2fHqjo4iPXz/view" },
  { n: "Deep Learning for Computer Vision",                       i: "Coursera · UCB",                   d: "Jul 2026",  l: "https://coursera.org/verify/FENDXPVUPCNZ" },
  { n: "Quantum Computing with Qiskit and Advanced Algorithms",   i: "Coursera · Packt",                 d: "Jul 2026",  l: "https://coursera.org/verify/67GIBDE61D0M" },
  { n: "Quantum Mechanics",                                       i: "Coursera · UCB",                   d: "May 2026",  l: "https://www.coursera.org/account/accomplishments/verify/PW9GW8GSMMXC" },
  { n: "General Formulation of Quantum Information",              i: "IBM",                               d: "Apr 2026",  l: "https://www.credly.com/badges/5b720628-6057-493e-8f30-9314cf0ce09e/print" },
  { n: "Introduction to Natural Language Processing",             i: "upGrad",                            d: "Apr 2026",  l: "https://certificates.upgrad.com/98a38fac-a8ae-4ce7-a94d-32e7d9bd2272-Free%20Course%20Completion-agXWCOQOTxx4Zpw5.jpeg" },
  { n: "Cybersecurity Essentials",                                i: "FutureSkills Prime",                d: "Mar 2026",  l: "https://inspiration-fun-7467.my.salesforce-sites.com/CDACcertificatePage2?id=a02Vy00001053b3IAA" },
  { n: "Basics of Quantum Information",                           i: "IBM",                               d: "Mar 2026",  l: "https://www.credly.com/badges/ea0f44da-bded-447f-b83d-bc8d2961423b" },
  { n: "Fundamentals of Network Security and Cryptography",       i: "Coursera · Packt",                 d: "Mar 2026",  l: "https://www.coursera.org/account/accomplishments/verify/020M9IAVN6R5" },
  { n: "Compiler Design",                                         i: "Academy Europe Open University",   d: "Mar 2026",  l: "https://drive.google.com/file/d/1xAenCFPP1JaYA5BJq596fproeKSSpmn_/view" },
  { n: "Data Processing and Visualisation",                       i: "FutureSkills Prime",               d: "Mar 2026",  l: "https://drive.google.com/file/d/1jZHOxT3QJm9IdYzG26GmYkibSUxQ6I9w/view" },
  { n: "Data Science for Beginners",                              i: "FutureSkills Prime",               d: "Mar 2026",  l: "https://drive.google.com/file/d/1yCu5k21svcWAty0LbfnB4OndKPV3wAZ6/view" },
  { n: "Software Engineering Fundamentals: Software Development and Testing", i: "Infosys Springboard", d: "Feb 2026",  l: "https://drive.google.com/file/d/1X2zjpxU6hRQTCNhEUoNqg-3TxUiepVt9/view" },
  { n: "Certificate Program in Artificial Intelligence & Machine Learning",    i: "FutureSkills Prime",  d: "Nov 2025",  l: "https://inspiration-fun-7467.my.salesforce-sites.com/CDACcertificatePage2?id=a02Vy00000bZPKnIAO" },
  { n: "Quantum Computing For Everyone: An Introduction",        i: "Coursera · Fractal Analytics",     d: "Oct 2025",  l: "https://coursera.org/share/922ae472bc13700c3d510c2766cf8c5b" },
  { n: "Demystifying Networking",                                 i: "NPTEL",                            d: "Aug 2025",  l: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs125/Course/NPTEL25CS125S63320257809160762.pdf" },
  { n: "Introduction to MongoDB",                                 i: "MongoDB",                          d: "Jun 2025",  l: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b595aee2-c89a-422b-b949-fe9f7524ef27-sricharan-s-ra2311003040063-5111c2b0-5dbe-40a1-96e2-a12b3464f351-certificate.pdf" },
  { n: "MongoDB Basics for Students",                             i: "MongoDB",                          d: "Jun 2025",  l: "https://learn.mongodb.com/c/Z4QkuWhARMmEZMc87MHVnA" },
  { n: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms", i: "Coursera · Stanford University", d: "Apr 2025", l: "https://coursera.org/share/a7d808915d8941da35c85f1423367b80" },
  { n: "Data Base Management System",                             i: "NPTEL",                            d: "Mar 2025",  l: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs18/Course/NPTEL25CS18S55040067101392285.pdf" },
  { n: "Geodata Processing using Python and Machine Learning",    i: "IIRS · ISRO",                      d: "Feb 2025",  l: "https://certificate.iirs.gov.in/checkstatus.php?uid=4def325060381a0042f2c18702524329&enm=20251562683915" },
  { n: "Linux for Beginners",                                     i: "Infosys Springboard",              d: "Oct 2024",  l: "https://drive.google.com/file/d/1au8_vOzPZu2cqvNGTh5WfxIUewZbd-FQ/view" },
  { n: "Introduction to Unix",                                    i: "Infosys Springboard",              d: "Oct 2024",  l: "https://drive.google.com/file/d/1rUeplMCUXIorZ7e-bADZKy60G_Fqf5hY/view" },
  { n: "Programming, Data Structures and Algorithms using Python", i: "NPTEL",                           d: "Sep 2024",  l: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs78/Course/NPTEL24CS78S33310953202760773.pdf" },
  { n: "Design Thinking: A Primer",                             i: "NPTEL",                             d: "Aug 2024",  l: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/110/noc24-mg72/Course/NPTEL24MG72S43310970802760773.pdf" },
  { n: "C for Beginners",                                         i: "Great Learning",                   d: null,        l: "https://www.mygreatlearning.com/certificate/GOUOKTCJ" },
];

export const PATENT: Patent = {
  id: "IN202541069649",
  title: "A System of Ergonomic Assistive Writing Using a Pressure-Sensitive Digital Pen",
  filed: "July 2025",
  office: "Indian Patent Office",
};
