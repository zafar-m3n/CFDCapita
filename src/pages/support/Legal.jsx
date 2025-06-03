import React from "react";
import LegalTabs from "./components/LegalTabs";
import HeroSection from "@/components/HeroSection";
import legalImg from "@/assets/Legal-Documents-min.png";

const Legal = () => {
  return (
    <div>
      <HeroSection
        title="Your Trusted Trading Compliance"
        subtitle="At CFD Capitals, we prioritize transparency and compliance to ensure a safe and reliable trading environment. Explore our legal policies and agreements designed to protect your interests and uphold regulatory standards"
        image={legalImg}
        imageSize="w-full max-w-2xl"
      />
      <LegalTabs />
    </div>
  );
};

export default Legal;
