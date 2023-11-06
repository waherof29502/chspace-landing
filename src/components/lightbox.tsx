'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Lightbox = ({ images, selectedImage, closeLightbox }:any) => {
  const [currentImage, setCurrentImage] = useState(selectedImage);

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90">
      {/* <button
        onClick={closeLightbox}
        className="absolute top-[140px] right-4 text-white text-3xl cursor-pointer"
      >
        &#x2715;
      </button> */}
      <div className="max-h-full max-w-full relative">
        <Image src={images[currentImage]} width={1920} height={1500} alt="12" />

       
        {/* <button
          onClick={prevImage}
          className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center text-white text-3xl cursor-pointer"
        >
          &#x2190;
        </button> */}
        <button
          onClick={nextImage}
          className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center text-white text-3xl cursor-pointer"
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;