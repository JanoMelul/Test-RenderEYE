import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./sections/AboutUs/AboutUs";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <div className={"container"}>
      <Navbar />
      <Hero />
      <Projects />
      <AboutUs />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
