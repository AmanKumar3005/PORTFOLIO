import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);

      if (response.status === 201) {
        alert('Contact information saved successfully');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error saving contact information', error);
      setError('There was an error saving your contact information. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative p-6 max-w-md w-full bg-gray-900 rounded-lg border-4 border-gray-600">
          <div className="absolute top-0 left-0 w-6 h-6 bg-gray-900 border-4 border-gray-600 rounded-tr-lg -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-6 h-6 bg-gray-900 border-4 border-gray-600 rounded-tl-lg -translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 bg-gray-900 border-4 border-gray-600 rounded-br-lg translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-900 border-4 border-gray-600 rounded-bl-lg translate-x-2 translate-y-2"></div>
  
          <h1 className="text-3xl text-center font-bold mb-6 relative z-10">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-lg">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-lg">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-lg">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
