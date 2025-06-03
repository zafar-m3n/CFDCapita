import React from "react";
import whatWeDoImg from "@/assets/whatwedo.jpg";
import AnimatedContent from "@/components/ui/AnimatedContent";

const WhatWeDo = () => {
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
      </AnimatedContent>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
        delay={200}
      >
        <p className="text-lg text-gray-700 mb-8">
          Looking to trade the financial markets? You’re in the right place. At CFD Capitals, we offer an extensive
          range of tradable instruments beyond just stocks. Explore opportunities in commodities, metals, indices,
          currency pairs, and CryptoCFDs, all in one powerful platform.
        </p>
      </AnimatedContent>
      <img src={whatWeDoImg} alt="What We Do" className="rounded-lg mx-auto w-full max-w-2xl" />
    </div>
  );
};

export default WhatWeDo;
