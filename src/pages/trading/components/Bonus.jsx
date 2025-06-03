import React from "react";
import referralsImg from "@/assets/referrals.jpg";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";

const features = [
  {
    title: "Risk Management",
    description: "Control and reduce risks while aligning with market trends and trading patterns.",
    icon: "mdi:cellphone",
  },
  {
    title: "Strategy Testing",
    description: "Experiment with new CFD strategies confidently, knowing you can test without substantial loss.",
    icon: "mdi:chart-line",
  },
  {
    title: "Market Accessibility",
    description: "Claim a bonus to ease into CFD trading and prepare for advanced trading opportunities.",
    icon: "mdi:currency-usd",
  },
];

const Bonus = () => {
  return (
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
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={referralsImg} alt="Referrals" className="rounded-lg h-full object-contain" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Strengthen Your Trading Journey with CFD Capitals Bonuses
          </h2>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-black text-white p-2 rounded-full flex items-center justify-center">
                  <Icon icon={item.icon} width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Bonus;
