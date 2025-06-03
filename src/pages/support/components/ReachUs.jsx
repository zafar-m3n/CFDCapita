import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Icon from "@/components/ui/Icon";

const contactDetails = [
  {
    title: "Phone Numbers",
    icon: "mdi:phone-outline",
    content: (
      <div>
        <p>
          <strong>Sweden:</strong> +46 90 695 7555
        </p>
        <p>
          <strong>UK:</strong> +44 20 3504 2776
        </p>
      </div>
    ),
  },
  {
    title: "Email",
    icon: "mdi:email-outline",
    content: (
      <div>
        <p>
          <strong>Customer Support:</strong>
        </p>
        <p>support@cfdcapitals.co</p>
      </div>
    ),
  },
  {
    title: "Sweden Office",
    icon: "mdi:map-marker-outline",
    content: <p>Hammarbybacken 27, Stockholm, Sweden</p>,
  },
  {
    title: "UK Office",
    icon: "mdi:map-marker-outline",
    content: <p>55 Colmore Row Birmingham, B3 2AA</p>,
  },
];

const ReachUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reach Us Directly</h2>
        <p className="text-lg text-gray-700 mb-12">
          Prefer a more direct approach? Connect with us using the details below. Whether by phone or email, we’re
          always ready to help you navigate your trading journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-green-50 rounded-2xl p-8 text-center transition-colors flex flex-col items-center justify-center"
            >
              <Icon icon={item.icon} width={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <div className="text-gray-700 text-base space-y-1">{item.content}</div>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
};

export default ReachUs;
