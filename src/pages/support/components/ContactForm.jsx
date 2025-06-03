import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form handling logic here
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
      <p className="text-gray-700 mb-8">
        Have a specific question or request? Fill out the form below, and our team will get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Email"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700 block mb-1" htmlFor="mobile">
            Mobile
          </label>
          <input
            name="mobile"
            type="text"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Mobile"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700 block mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-accent text-primary font-semibold px-6 py-2 rounded hover:opacity-90 transition mx-auto block"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
