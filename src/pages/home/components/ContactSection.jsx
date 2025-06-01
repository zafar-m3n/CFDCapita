import React from "react";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">
            We value your feedback and are here to assist you in any way we can. Our dedicated team is ready to help and
            can be reached filling out the contact form.
          </p>
        </div>

        {/* Right Side: Form */}
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block font-semibold text-sm mb-1">
                NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-accent rounded p-2 text-sm text-gray-700"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block font-semibold text-sm mb-1">
                EMAIL <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border border-accent rounded p-2 text-sm text-gray-700"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="mobile" className="block font-semibold text-sm mb-1">
              MOBILE <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile number"
              className="w-full border border-accent rounded p-2 text-sm text-gray-700"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-sm mb-1">
              MESSAGE
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows={4}
              className="w-full border border-accent rounded p-2 text-sm text-gray-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent text-primary font-semibold px-6 py-2 rounded hover:opacity-90 transition w-full md:w-auto self-start"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
