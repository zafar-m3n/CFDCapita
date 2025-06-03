import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import depositsImg from "@/assets/deposits.png";

const faqData = [
  {
    question: "What is CFD Capitals?",
    answer:
      "At CFD Capitals, we empower traders with a comprehensive suite of advanced trading tools and personalized leverage options tailored to suit your unique investment strategy. Our platform is designed to enhance your trading experience, allowing you to make informed decisions and maximize your potential for success.",
  },
  {
    question: "How to create an account?",
    answer: "You can apply for an account with CFD Capitals online. Open Trading Account.",
  },
  {
    question: "How much money do I need to open an account?",
    answer:
      "The minimum initial deposit required is at least $200. However, we recommend you deposit at least $2,000 to allow you more flexibility and better risk management when trading your account. Visit our account types page to learn more about the different account types available.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Get some of the most commonly asked questions answered shortly and precisely."
        image={depositsImg}
        imageSize="w-full max-w-2xl"
        alignImageRightBottom
      />

      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-4">
        <div className="flex flex-col space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-accent text-primary" : "bg-gray-50"
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
    </div>
  );
};

export default FAQs;
