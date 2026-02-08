import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Beams from './components/Beams';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-primary selection:text-black font-sans relative">
      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
