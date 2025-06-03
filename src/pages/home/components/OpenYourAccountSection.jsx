import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";

const steps = [
  {
    number: "01",
    title: "Register for an Account",
    description: "Sign up for a trading account of your consent, by providing personal information.",
  },
  {
    number: "02",
    title: "Make your Preferred Deposit",
    description: "Deposit an amount that you think would make a profit within your trading span.",
  },
  {
    number: "03",
    title: "Trade through the Markets",
    description: "Trade and invest in an array financial markets of any choice of yours. Trade Now!",
  },
];

const OpenYourAccountSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-16 text-center">
      <h2 className="text-4xl font-bold mb-12">Open Your Trading Account Now!</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
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
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center space-y-4">
              <span className="bg-accent text-primary font-bold text-sm rounded py-1 px-3">{step.number}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default OpenYourAccountSection;
