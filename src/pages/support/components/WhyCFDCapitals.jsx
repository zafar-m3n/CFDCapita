import React from "react";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";

const features = [
  {
    title: "Transparent Pricing",
    description:
      "At CFD Capitals, we offer clear, upfront explanations of fees and costs, ensuring that you always make informed trading decisions.",
    icon: "mdi:check-circle-outline",
  },
  {
    title: "Powerful Trading Platform",
    description:
      "Our advanced, customizable platforms let you manage your account and trade seamlessly on both mobile and desktop.",
    icon: "mdi:check-circle-outline",
  },
  {
    title: "24/7 Customer Service",
    description:
      "Our dedicated support team is available around the clock to assist you via phone, email, or live chat whenever you need help.",
    icon: "mdi:check-circle-outline",
  },
];

const WhyCFDCapitals = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Why Choose CFD Capitals?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
          >
            <div
              key={index}
              className="bg-gray-50 hover:bg-green-50 rounded-2xl p-8 text-center transition-colors flex flex-col items-center justify-center"
            >
              <Icon icon={item.icon} width={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default WhyCFDCapitals;
