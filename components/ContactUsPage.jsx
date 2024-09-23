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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold">Message/Query</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-semibold">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#F9C935] text-black font-semibold p-3 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;
