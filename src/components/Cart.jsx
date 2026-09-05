import React from 'react';
import { Trash2 } from 'lucide-react';

const Cart = ({ cartItems, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex items-center justify-between border-b pb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                  <p className="text-gray-900 font-semibold">₹{item.price}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(`${item.id}-${item.selectedSize}`)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-gray-900">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
