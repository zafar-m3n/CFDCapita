// components/BonusesSection.jsx
import React from "react";

const bonuses = [
  {
    title: "70% Welcome Bonus",
    description: "Experience CFD trading with one of the highest welcome bonuses. Start strong!",
    button: "Claim Now",
  },
  {
    title: "10% Cash Back",
    description: "Invest $200 or more and receive $20 cash back on your first trade.",
    button: "Claim Now",
  },
  {
    title: "60% Tradable Bonus",
    description: "Get a 60% bonus on every $200 deposit, daily!",
    button: "Claim Now",
  },
  {
    title: "100% Deposit Bonus",
    description: "Upgrade your 60% tradable bonus to a 100% deposit bonus each month.",
    button: "Claim Now",
  },
];

const steps = [
  {
    number: "01",
    title: "Register for an Account",
    description:
      "Create your trading account by verifying your identity and providing required personal and financial details.",
  },
  {
    number: "02",
    title: "Make a Qualifying Deposit",
    description: "Deposit the required amount to meet bonus terms and start trading with enhanced benefits.",
  },
  {
    number: "03",
    title: "Claim Your Bonus",
    description: "Activate your bonus using a promo code, special link, or by contacting customer support.",
  },
];

const BonusesSection = () => {
  return (
    <div className="w-full bg-black">
      {/* Top Black Banner */}
      <div className="text-white text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Christmas Bonanza
          <br />
          Trade Now & Win Instantly
        </h2>
        <button className="bg-lime-500 text-black font-semibold py-2 px-6 rounded-md">Enter Now</button>
      </div>

      {/* Light Yellow Bonuses */}
      <div className="bg-yellow-50 py-16 rounded-[48px]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            Choose Your Bonus Type
            <br />
            Tailored for Your Trading Needs!
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {bonuses.map((bonus, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
                <p className="text-gray-700 mb-4">{bonus.description}</p>
                <button className="bg-lime-500 text-black font-semibold py-2 px-4 rounded-md">{bonus.button}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Black Path to Earn */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">Your Path to Earning a Bonus</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg space-y-2 text-center">
                <div className="bg-lime-500 text-black text-sm font-semibold p-2 rounded inline-block">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusesSection;
