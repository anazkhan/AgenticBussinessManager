import React from 'react';
import Button from '../components/Button'; // Assuming Button component is in src/components/Button.jsx

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Restaurant!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience the finest dining in a cozy and elegant atmosphere. Our chefs prepare
          mouth-watering dishes using only the freshest, locally sourced ingredients.
        </p>
        <Button onClick={() => console.log('View Menu clicked!')}>
          View Menu
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
