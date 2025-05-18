import React from 'react';

export default function Hero({ image, children }) {
  return (
    <div
      className="relative w-full h-50 bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4">
        {children}
      </div>
    </div>
  );
}
