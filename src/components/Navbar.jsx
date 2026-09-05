import React from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount, searchTerm, onSearchChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wider text-gray-900 uppercase">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">Shop</a>
            <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">Collections</a>
            <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">About</a>
            <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">Contact</a>
          </div>

          {/* Right Side - Search and Cart */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="px-4 py-2 bg-gray-100/50 border border-gray-200/50 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-900 text-sm placeholder-gray-500 transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            <div className="relative cursor-pointer hover:opacity-70 transition-opacity duration-300">
              <ShoppingCart className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-gray-900 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="relative cursor-pointer hover:opacity-70 transition-opacity duration-300">
              <ShoppingCart className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-gray-900 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:opacity-70 transition-opacity duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/40 pb-6">
            <div className="flex flex-col gap-4 pt-6">
              <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">Shop</a>
              <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">Collections</a>
              <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">About</a>
              <a href="#" className="text-gray-900 text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors duration-300">Contact</a>
              <div className="relative pt-4 border-t border-gray-200/40">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100/50 border border-gray-200/50 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-900 text-sm placeholder-gray-500 transition-all duration-300"
                />
                <Search className="absolute right-3 top-7 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
