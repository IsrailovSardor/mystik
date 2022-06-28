import "./App.css";
import Home from './components/Home/Home';
import React from "react";
import Language from "./components/Language/Language";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Language/>
      <Home />
      <About/>  
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Contact/>  
    </div>
  );
}

export default App;
