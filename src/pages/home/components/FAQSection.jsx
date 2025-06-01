import React, { useState } from "react";

const faqs = [
  {
    question: "What is CFD Capitals?",
    answer:
      "At CFD Capitals, we empower traders with a comprehensive suite of advanced trading tools and personalized leverage options tailored to suit your unique investment strategy. Our platform is designed to enhance your trading experience, allowing you to make informed decisions and maximize your potential for success.",
  },
  {
    question: "How to create an account?",
    answer: "To create an account, simply sign up on our website and follow the step-by-step process.",
  },
  {
    question: "How much money do I need to open an account?",
    answer: "You can open an account with a minimum deposit that suits your trading preferences.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-yellow-50 w-full py-16 rounded-[48px] my-8 md:my-16">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <button className="bg-accent text-primary font-semibold px-6 py-2 rounded hover:opacity-90 transition">
            More FAQs
          </button>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-accent text-primary" : "bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-left transition-all duration-300 ${
                  openIndex === index ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`px-4 text-sm transition-all duration-300 ease-in-out ${
                  openIndex === index ? "py-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
