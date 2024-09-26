import React, { useState } from "react";

const ContactPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-section py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-t from-green-400 to-green-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We’d love to hear from you. Please fill out the form below.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            {/* Name input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Message Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
