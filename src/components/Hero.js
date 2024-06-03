import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Our Amazing App</h1>
      <p style={{fontWeight: 'bold'}}>The best app for all your needs.</p>
      <div className="buttons">
        <button className="cta">Get Started</button>
        <button className="cta">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
