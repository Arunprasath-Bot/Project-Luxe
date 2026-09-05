import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="group cursor-pointer">
      {/* Product Image - Premium container with 3:4 aspect ratio */}
      <div className="relative overflow-hidden bg-gray-50 mb-6 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Product Info - Minimal and clean */}
      <div className="space-y-3">
        {/* Brand */}
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          {product.brand}
        </p>

        {/* Product Name */}
        <h3 className="text-base font-medium text-gray-900 leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-semibold text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Add to Bag Button - Premium black button with hover effects */}
      <button
        onClick={handleAddToCart}
        className="w-full mt-6 bg-gray-900 text-white text-sm font-medium uppercase tracking-widest py-3 px-4 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer"
      >
        <ShoppingCart className="w-4 h-4" strokeWidth={2} />
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
