import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Volunteer from "./components/Volunteer";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory md:snap-none overflow-y-scroll md:overflow-y-auto h-screen md:h-auto">
      <Navbar />
      <MobileMenu />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Volunteer />
      <Awards />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
