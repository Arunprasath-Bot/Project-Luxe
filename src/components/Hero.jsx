import React from 'react';

const Hero = ({ onShopNowClick }) => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=700&fit=crop"
        alt="Premium Fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/80 text-sm md:text-base font-medium tracking-widest uppercase mb-6">
            Curated Collections
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Effortless Elegance
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-12 leading-relaxed">
            Discover our hand-picked selection of premium apparel, from timeless basics to statement pieces.
          </p>
          <button
            onClick={onShopNowClick}
            className="inline-block bg-gray-900 text-white uppercase tracking-widest text-sm font-medium px-12 py-4 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
