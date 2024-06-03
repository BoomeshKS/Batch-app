
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
