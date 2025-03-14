import { useState } from "react";
import "./App.css";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="bg-zinc-900 overflow-hidden">
      <Hero />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
