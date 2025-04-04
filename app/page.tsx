import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Skills/>
    <Experience/>
    <ProjectSection/>
    </>
  );
}
