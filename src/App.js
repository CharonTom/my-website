import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="global-style overflow-hidden">
      <Router>
        <Header />
        <Nav />
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
