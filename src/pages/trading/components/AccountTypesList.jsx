import React from "react";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";

const accountTypes = [
  {
    title: "CFD LITE",
    price: "$200",
    details: [
      "CFDs + Metals + Commodities",
      "$200 Minimum Deposits",
      "1:200 Leverage",
      "Spreads Starting from 1.5 Pips",
      "No Commissions",
    ],
    icon: "mdi:lightbulb-on-outline",
  },
  {
    title: "CFD CLASSIC",
    price: "$1000",
    details: [
      "CFDs + Metals + Commodities",
      "$1,000 Minimum Deposits",
      "1:500 Leverage",
      "Spreads Starting from 1.3 Pips",
      "No Commissions",
    ],
    icon: "mdi:airplane",
  },
  {
    title: "CFD PRO",
    price: "$3000",
    details: [
      "All Instruments",
      "$3,000 Minimum Deposits",
      "1:200 Leverage",
      "Spreads Starting from 0.8 Pips",
      "$5 Commission per lot",
    ],
    icon: "mdi:chart-line",
  },
  {
    title: "CFD VIP",
    price: "$10,000",
    details: [
      "All Instruments",
      "$10,000 Minimum Deposits",
      "1:100 Leverage",
      "Spreads Starting from 0.2 Pips",
      "$3 Commission per lot",
    ],
    icon: "mdi:rocket",
  },
  {
    title: "CFD MAX",
    price: "$20,000",
    details: [
      "All Instruments",
      "$20,000 Minimum Deposits",
      "1:200 Leverage",
      "Spreads Starting from 0.1 Pips",
      "Commission Rebates",
    ],
    icon: "mdi:finance",
  },
  {
    title: "CFD ISLAMIC",
    price: "$500",
    details: [
      "CFDs + Metals + Commodities",
      "$500 Minimum Deposits",
      "1:400 Leverage",
      "Swap Free",
      "Spreads Starting from 2 Pips",
    ],
    icon: "mdi:earth",
  },
];

const AccountTypesList = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {accountTypes.map((account, index) => (
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
            className="bg-yellow-50 rounded-lg shadow-md p-6 text-center flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <Icon icon={account.icon} width={36} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{account.title}</h3>
            <div className="text-2xl font-bold bg-accent text-white inline-block px-4 py-1 rounded mb-4">
              {account.price}
            </div>
            <ul className="text-gray-700 text-sm mb-6 space-y-1">
              {account.details.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <button className="bg-black text-white font-semibold px-6 py-2 rounded hover:opacity-90 transition">
              Trade Now
            </button>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default AccountTypesList;
