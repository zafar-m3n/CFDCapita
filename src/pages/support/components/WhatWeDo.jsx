import React from "react";
import whatWeDoImg from "@/assets/whatwedo.jpg";

const WhatWeDo = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
      <p className="text-lg text-gray-700 mb-8">
        Looking to trade the financial markets? You’re in the right place. At CFD Capitals, we offer an extensive range
        of tradable instruments beyond just stocks. Explore opportunities in commodities, metals, indices, currency
        pairs, and CryptoCFDs, all in one powerful platform.
      </p>
      <img src={whatWeDoImg} alt="What We Do" className="rounded-lg mx-auto w-full max-w-2xl" />
    </div>
  );
};

export default WhatWeDo;
