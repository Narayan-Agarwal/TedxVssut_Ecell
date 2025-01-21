"use client"
import React, { useState } from 'react';

const images = [
  '/images/images.png',
  '/images/images.png',
  '/images/images.png',
  '/images/images.png',
  '/images/images.png',
  '/images/images.png',
  '/images/images.png',
  '/images/images.png',
  '/images/images.png'
];

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 4;
    return window.innerWidth < 768 ? 2 : 4;
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      const maxIndex = images.length - getVisibleSlides();
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex(prev => {
      return prev <= 0 ? images.length - getVisibleSlides() : prev - 1;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-16 pb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
          MEMORY LANE <span className="text-red-600">HIGHLIGHTS</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto text-sm md:text-base">
          Relive the moments that inspired, connected, and transformed. Explore the
          visual journey of TEDxVSSUT 2024, where groundbreaking ideas met a
          vibrant audience.
        </p>
      </div>

      <div className="relative w-full max-w-[880px] mx-auto px-4">
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/4 flex-shrink-0"
                style={{ width: '200px' }}
              >
                <div className="w-[200px] h-[200px] overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 filter brightness-90"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button 
            onClick={goToPrev}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Previous slide"
          >
            <span className="text-white text-xl font-bold select-none">←</span>
          </button>

          <button 
            onClick={goToNext}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Next slide"
          >
            <span className="text-white text-xl font-bold select-none">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;