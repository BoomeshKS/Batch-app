import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>User Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">"This app changed my life!" - User A</div>
        <div className="testimonial-item">"Incredible experience!" - User B</div>
        <div className="testimonial-item">"Highly recommend it!" - User C</div>
      </div>
    </section>
  );
}

export default Testimonials;
