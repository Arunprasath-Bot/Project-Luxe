import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">Our Collection</h2>
      
      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No products found matching your search or filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
