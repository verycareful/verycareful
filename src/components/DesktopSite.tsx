import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import Patent from "@/components/sections/Patent";
import ProjectsNew from "@/components/sections/ProjectsNew";
import LabNotebook from "@/components/sections/LabNotebook";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function DesktopSite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Patent />
        <ProjectsNew />
        <LabNotebook />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
