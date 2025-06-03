import React from "react";
import HeroSection from "@/components/HeroSection";
import accountHeroImage from "@/assets/Account-Types-min.png";
import AccountTypesList from "./components/AccountTypesList";

const AccountTypes = () => {
  return (
    <div>
      <HeroSection
        title="Customized Account Options"
        subtitle="Account types designed to match your trading style and goals."
        button1="Open Account"
        button2="Try Demo Account"
        image={accountHeroImage}
        // alignImageRightBottom
        imageSize="w-full max-w-2xl"
      />
      <AccountTypesList />
    </div>
  );
};

export default AccountTypes;
