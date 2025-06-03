// pages/Promotions.jsx
import React from "react";
import HeroSection from "@/components/HeroSection";
import Bonus from "./components/Bonus";
import PromotionsList from "./components/PromotionsList";
import referralsImg from "@/assets/Referrals-min.png";
import BonusesSection from "./components/BonusesSection";

const Promotions = () => {
  return (
    <div>
      <HeroSection
        title="Unlock Exclusive Deals with CFD Capitals"
        subtitle="Choose the perfect bonus to match your trading needs and goals."
        image={referralsImg}
        imageSize="w-full max-w-2xl"
      />
      <Bonus />
      <BonusesSection />
      <PromotionsList />
    </div>
  );
};

export default Promotions;
