import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServiceHighlights from "@/components/sections/ServiceHighlights";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Quality from "@/components/sections/Quality";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ServiceHighlights />
        <TrustStrip />
        <About />
        <Services />
        <Projects />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
