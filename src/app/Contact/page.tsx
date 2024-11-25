import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-16 px-8 sm:px-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Have questions or want to make a reservation? Fill out the form below, and we will get back to you as soon as possible!
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 px-8 py-4 rounded-md text-white text-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
  );
};

export default ContactPage;
