<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=IBM+Plex+Mono&weight=500&size=15&duration=3000&pause=1000&color=858585&center=true&vCenter=true&width=520&lines=quantum+algorithms+%C2%B7+systems+%C2%B7+research;B.Tech+CSE+%2B+Quantum+Computing+(Hons);SRM+IST+Vadapalani" alt="" />

# Sricharan Suresh

Building at the boundary of quantum theory and shipped software:
Ising Hamiltonians, private document tools, tectonic plates.

![followers](https://img.shields.io/github/followers/verycareful?style=flat-square&color=858585&labelColor=1a1a1a&label=followers)
![stars](https://img.shields.io/github/stars/verycareful?style=flat-square&color=858585&labelColor=1a1a1a&label=total%20stars)

</div>

---

## Research

| | Title | Venue | Status |
|--|-------|-------|--------|
| 01 | [Merit-Order State Preparation for Budget-Efficient MA-QAOA](https://doi.org/10.21203/rs.3.rs-9533781/v1) | Quantum Machine Intelligence (Springer Nature) | Accepted, in production |
| 02 | [Comparative Analysis of Classical and Quantum K-Means Clustering](https://doi.org/10.5281/zenodo.18802705) | Zenodo | Published |
| 03 | Automated Industrial Surface Defect Classification System | – | Seeking venue |

---

## Selected Works

Three clusters of repositories that build on each other. Everything else is in the index on the [portfolio](https://verycareful.github.io/verycareful/#projects).

### lindblad · quantum computing in C++23

- **[lindblad](https://github.com/verycareful/lindblad)** · The framework, and the project everything else orbits. Four simulator backends behind an AUTO selector (statevector with OpenMP, density matrix with exact Kraus channels, Clifford stabilizer tableau, MPS), device-realistic noise from T1/T2 specs, a transpiler with SABRE layout and routing and IBM heavy-hex targeting, and parameter-shift Estimator and Sampler primitives driving VQE, QAOA, MA-QAOA, Grover, Shor, QPE and QFT. OpenQASM 2/3 I/O, optional Python bindings. Source-available, benchmarked head to head against Qiskit Aer.
- **[FLOP](https://github.com/verycareful/FLOP)** · Derivative-free optimizers in C++23, written from the published algorithms: Powell's COBYLA with inequality constraints, and Nelder-Mead. lindblad's variational algorithms call it.
- **[autonne](https://github.com/shek014/autonne)** · Truncated SVD and Hermitian eigendecomposition for small dense complex matrices, the kernels lindblad's MPS backend splits bonds with. A joint project with [shek014](https://github.com/shek014) and [zParik](https://github.com/zParik).
- **uc-quantum** · Factorial study of 42 MA-QAOA variants applied to Unit Commitment in power systems, run on lindblad. Merit-order state preparation reaches a 98.5% success rate at 50 circuit evaluations against 24.0% for simulated annealing, but collapses to 22 to 40% when paired with any other parameter initialisation. Accepted at Quantum Machine Intelligence; [preprint](https://doi.org/10.21203/rs.3.rs-9533781/v1).

### kern · document tools that never touch the network

- **[kernkraft](https://github.com/verycareful/kernkraft)** · The shared Rust core: document formats, PDF page operations (extract, split, merge, rotate, reorder) with MuPDF rendering, and atomic saves. No crate in it may depend on an HTTP, socket or async runtime, and CI checks that.
- **[kern - desktop](https://github.com/verycareful/kern-desktop)** · The desktop app on that core, in Tauri. Early development.
- **[kern - android](https://github.com/verycareful/kern)** · The Android toolkit, with **zero network permissions, not now and not ever**. Reads and writes xlsx, xls, csv, docx, pptx, pdf and epub in place through Android's "Open with", with no app-owned folder and no sync. Kotlin and Jetpack Compose, Apache POI for office formats, MuPDF for PDF.

### Terramax · Minecraft worlds at continental scale

- **[Terramax](https://github.com/verycareful/Terramax)** · A Fabric mod for Minecraft 26.2 that generates worlds from a simulated tectonic plate model rather than from climate noise. Plate centres are scattered by Poisson disk sampling and resolved as a Voronoi diagram; convergent boundaries raise mountains, divergent boundaries open rifts, transform boundaries shear flat. Plates sit around 100,000 blocks apart, so the terrain maths lives in a Minecraft-free core module that a standalone simulator drives.
- **[realworld](https://github.com/verycareful/realworld)** · The smaller mod that came first: vanilla's generator, with the four noises behind Large Biomes lowered an octave so biomes run at 16x vanilla instead of 4x. Released for 26.2 and 1.21.

---

## Stack

**Quantum / ML**

![C++23](https://img.shields.io/badge/C++23-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Qiskit](https://img.shields.io/badge/Qiskit-6929C4?style=flat-square&logo=qiskit&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)

**Systems / Apps**

![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-DEA584?style=flat-square&logo=rust&logoColor=black)
![Tauri](https://img.shields.io/badge/Tauri-24C8D8?style=flat-square&logo=tauri&logoColor=white)
![.NET MAUI](https://img.shields.io/badge/.NET_MAUI-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white)
![Gradle](https://img.shields.io/badge/Gradle-02303A?style=flat-square&logo=gradle&logoColor=white)
![CMake](https://img.shields.io/badge/CMake-064F8C?style=flat-square&logo=cmake&logoColor=white)

**Web**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

---

## Languages

<img src="./assets/top-languages.svg" width="100%" alt="Top languages" />

---

## Activity

<img src="./assets/activity.svg" width="100%" alt="Commit activity, last 24 months" />

---

## Contact

[![Email](https://img.shields.io/badge/sricharans@proton.me-8B89CC?style=flat-square&logo=protonmail&logoColor=white)](mailto:sricharans@proton.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/verycareful)
[![ORCiD](https://img.shields.io/badge/ORCiD-A6CE39?style=flat-square&logo=orcid&logoColor=white)](https://orcid.org/0009-0004-6873-5692)
[![Portfolio](https://img.shields.io/badge/Portfolio-111111?style=flat-square&logo=githubpages&logoColor=white)](https://verycareful.github.io/verycareful/)
