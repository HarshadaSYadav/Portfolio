import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send the message. Please try again.');
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-purple-400 mb-8">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        {/* Contact Info Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <i className="fas fa-envelope text-purple-400 text-xl"></i>
            <span>harshadayadav13@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone text-purple-400 text-xl"></i>
            <span>+91 8668823575</span>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-map-marker-alt text-purple-400 text-xl"></i>
            <span>Sangli, Maharashtra</span>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fab fa-github text-purple-400 text-xl"></i>
            <a href="https://github.com/HarshadaSYadav" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/HarshadaSYadav
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fab fa-linkedin text-purple-400 text-xl"></i>
            <a href="https://linkedin.com/in/harshadayadav13" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/harshadayadav13
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 shadow-lg rounded-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-purple-400">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-900 border border-purple-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-400">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-900 border border-purple-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-purple-400">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md bg-gray-900 border border-purple-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-purple-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
