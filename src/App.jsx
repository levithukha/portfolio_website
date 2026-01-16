import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowCaseSection";
import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
