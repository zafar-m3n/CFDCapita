import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Icon from "@/components/ui/Icon";

const withdrawalOptions = [
  {
    title: "Credit & Debit Card",
    icon: "mdi:credit-card-outline",
    details: [
      { label: "Supported Currencies", value: "USD, EUR, GBP" },
      { label: "Fees", value: "0%" },
      { label: "Method Type", value: "Card Payment" },
      { label: "Processing Time", value: "Instant" },
    ],
  },
  {
    title: "Bank Transfer",
    icon: "mdi:bank-outline",
    details: [
      { label: "Supported Currencies", value: "USD" },
      { label: "Fees", value: "0%" },
      { label: "Method Type", value: "Local/Bank Wire" },
      { label: "Processing Time", value: "24-72 hours" },
    ],
  },
  {
    title: "Cryptocurrency",
    icon: "mdi:currency-btc",
    details: [
      { label: "Supported Currencies", value: "All Popular Crypto" },
      { label: "Fees", value: "0%" },
      { label: "Method Type", value: "Wallet-to-Wallet" },
      { label: "Processing Time", value: "Instant" },
    ],
  },
];

const WithdrawalOptions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Convenient Withdrawals at Your Fingertips</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-12">Withdrawal Options</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {withdrawalOptions.map((option, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-green-50 rounded-2xl p-6 text-left border border-gray-100 shadow-sm transition-colors duration-300"
            >
              <div className="mb-4">
                <Icon icon={option.icon} width={28} className="text-accent" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">{option.title}</h4>
              <hr className="border-gray-200 mb-4" />
              <div className="space-y-4 text-sm text-gray-700">
                {option.details.map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
};

export default WithdrawalOptions;
