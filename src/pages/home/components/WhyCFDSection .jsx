import React from "react";
import Icon from "@/components/ui/Icon";
import whyCFD from "@/assets/whyCFD.png";

const features = [
  {
    icon: "account",
    title: "Easy Registrations",
    description: "Quick and simple sign-up process.",
  },
  {
    icon: "credit-card",
    title: "Diverse Market Access",
    description: "Trade across forex, stocks, commodities, and more.",
  },
  {
    icon: "currency-usd",
    title: "Multiple Withdrawal Options",
    description: "Flexible and convenient ways to access funds.",
  },
];

const WhyCFDSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side: Text and Features */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold">Why CFD Capitals?</h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Icon
                icon={`mdi:${feature.icon}`}
                width={36}
                className="p-2 rounded bg-accent text-light hover:p-1 transition-all duration-300"
              />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex justify-center">
        <img src={whyCFD} alt="Why CFD Capitals" className="max-w-full h-auto object-contain" />
      </div>
    </section>
  );
};

export default WhyCFDSection;
