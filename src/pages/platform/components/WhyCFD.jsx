import React from "react";
import Icon from "@/components/ui/Icon";
import analyticsImg from "@/assets/analytics.jpg";
import interfaceImg from "@/assets/interface.jpg";
import executionImg from "@/assets/execution.jpg";
import AnimatedContent from "@/components/ui/AnimatedContent";

const sections = [
  {
    title: "Real-Time Market Data & Analytics",
    description: "Make informed decisions and execute trades with precision using real-time data.",
    features: ["Live data streams", "Detailed charts", "Advanced technical analysis tools"],
    image: analyticsImg,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Designed for both beginners and experienced traders, CFD Capitals provides an easy-to-navigate interface that enhances your trading experience.",
    features: ["Personalize your dashboard", "One-click access to favorite tools", "Custom alerts and notifications"],
    image: interfaceImg,
  },
  {
    title: "Fast & Reliable Execution",
    description: "Speed and reliability are critical for successful trading, and CFD Capitals delivers both.",
    features: [
      "Lightning-fast trade execution",
      "Minimal delays or slippage",
      "Robust platform stability during peak market hours",
    ],
    image: executionImg,
  },
];

const WhyCFD = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        Why CFD Capitals is the Ideal Trading Platform
      </h2>

      {sections.map((section, index) => (
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={index % 2 === 0}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 md:p-12 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 shadow-sm`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <p className="text-lg text-gray-700 mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon icon="mdi:check" width={24} className="text-accent mt-1" />
                    <span className="text-lg font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex-1 max-w-md">
              <img src={section.image} alt={section.title} className="rounded-lg w-full" />
            </div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default WhyCFD;
