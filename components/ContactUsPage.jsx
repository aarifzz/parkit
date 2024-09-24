import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for contacting us! We will get back to you shortly.");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border-black border-black bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message/Query</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#F9C935] text-black font-semibold p-6 rounded-lg">
Submit
</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;


<button type="submit" className="w-full bg-[#F9C935] text-black font-semibold p-6 rounded-lg">
Submit
</button>