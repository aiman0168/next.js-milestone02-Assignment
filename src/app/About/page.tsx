import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-16 px-8 sm:px-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Savourly, we strive to deliver an exceptional dining experience that brings together
            fresh ingredients, expert chefs, and a welcoming atmosphere. Our passion for food is evident in every
            dish we serve, whether it is a comforting classic or a contemporary twist on a traditional favorite.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Located in the heart of the city, we offer a vibrant dining space with an inviting ambiance perfect for
            family meals, intimate dinners, and special celebrations.
          </p>
        </div>
      </section>
  );
};

export default AboutPage;
