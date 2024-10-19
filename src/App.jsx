import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./sections/AboutUs/AboutUs";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Testimonial from "./sections/Testimonial/Testimonial";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Projects />
      <AboutUs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
