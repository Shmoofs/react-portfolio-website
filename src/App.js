import About from './components/About.js'
import Contact from './components/Contact.js'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import Testimonials from './components/Testimonials.js'

import './App.scss'
import React from "react"

export default function App(){
  return (
    <main>
      <Navbar>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </Navbar>
    </main>
  );
}