// src/components/Gallery.js
import React, { useState } from 'react';
import './Gallery.css';

const images = [
  'screenshot1.png',
  'screenshot2.png',
  'screenshot3.png',
];

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="gallery">
      <h2>App Screenshots</h2>
      <div className="gallery-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Screenshot ${index + 1}`}
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>Close</button>
            <img src={selectedImage} alt="Modal" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
