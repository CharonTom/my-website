import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-texture bg-secondary">
      <Router>
        <Header />
        <Nav />
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
        <div className="h-[4000px]"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
