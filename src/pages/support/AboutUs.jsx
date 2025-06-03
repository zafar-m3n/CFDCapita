import React from "react";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import WhyCFDCapitals from "./components/WhyCFDCapitals";
import depositsImg from "@/assets/deposits.png";

const AboutUs = () => {
  return (
    <div>
      <HeroSection
        title="Know Your Trading Partner"
        subtitle="In the world of trading, CFD Capitals stands as a symbol of innovation and empowerment. With our advanced technology and user-friendly platforms, we are transforming the trading experience. Whether you’re a beginner or a seasoned professional, we provide a wealth of educational resources to ensure you have the tools for success."
        image={depositsImg}
        imageSize="w-full max-w-2xl"
        alignImageRightBottom
      />
      <WhatWeDo />
      <WhyCFDCapitals />
    </div>
  );
};

export default AboutUs;
