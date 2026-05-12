import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Gallery from "./Gallery";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./Footer";

import MaraqueeText from "../components/ui/Maraqueetext";
import ScrollTextReveal from "../components/ui/ScrollTextReveal";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <MaraqueeText />
        <Services />
        <ScrollTextReveal />
        <About />
        <Gallery />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
