import React from "react";
import HeroSection from "@/components/HeroSection";
import platformImage from "@/assets/Platform-min.png";
import WhyCFD from "./components/WhyCFD";

const Platform = () => {
  return (
    <div>
      <HeroSection
        title="Your Ultimate Trading Platform"
        subtitle="CFD Capitals is a state-of-the-art platform that empowers traders of all experience levels to take control of their financial future. Whether you’re an experienced trader or just beginning, CFD Capitals offers a seamless and intuitive trading experience tailored to your unique needs."
        image={platformImage}
        imageSize="w-full max-w-4xl"
        // alignImageRightBottom
      />
      <WhyCFD />
    </div>
  );
};

export default Platform;
