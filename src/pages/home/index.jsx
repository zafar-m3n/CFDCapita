import React from "react";
import LiquidityProviders from "./components/LiquidityProviders";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import WhyCFDSection from "./components/WhyCFDSection ";
import OpenYourAccountSection from "./components/OpenYourAccountSection";

const HomePage = () => {
  return (
    <div>
      <OpenYourAccountSection />
      <WhyCFDSection />
      <FAQSection />
      <ContactSection />
      <LiquidityProviders />
    </div>
  );
};

export default HomePage;
