import React from 'react';
import { categories } from '../data/products';

const FilterBar = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white border-b border-gray-200/50 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest mb-6">Filter by Category</h3>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.value)}
              className={`text-sm font-medium uppercase tracking-wider px-6 py-2 transition-all duration-300 ease-in-out ${
                selectedCategory === category.value
                  ? 'bg-gray-900 text-white'
                  : 'bg-transparent text-gray-900 border-b-2 border-transparent hover:border-gray-900'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
