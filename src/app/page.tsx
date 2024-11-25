import React from 'react';

const HomePage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      
      <div className="flex items-center justify-start h-full px-8 text-black z-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">Savourly</h1>
          <p className="text-xl mb-6">Delicious Delights: A Culinary Journey at Your Fingertips.</p>
          <button className="bg-blue-800 px-6 py-3 rounded-md text-lg text-white hover:bg-blue-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;