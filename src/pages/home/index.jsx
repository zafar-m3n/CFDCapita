import React from "react";
import LiquidityProviders from "./components/LiquidityProviders";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import WhyCFDSection from "./components/WhyCFDSection ";
import OpenYourAccountSection from "./components/OpenYourAccountSection";
import AccountTypesList from "./components/AccountTypesList";
import StatsSection from "./components/StatsSection";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AccountTypesList />
      <OpenYourAccountSection />
      <WhyCFDSection />
      <FAQSection />
      <ContactSection />
      <LiquidityProviders />
    </div>
  );
};

export default HomePage;
