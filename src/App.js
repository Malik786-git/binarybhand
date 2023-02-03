import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Faqs from "./Components/FAQs/Faqs";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Packages from "./Components/Packages/Packages";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <Faqs />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
