import React from 'react';

const MenuItem = ({ name, description, price, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-48 object-cover object-center"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">${price}</span>
          {/* Optional: Add a button to add to cart or view details */}
          {/* <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
