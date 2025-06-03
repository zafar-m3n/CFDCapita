import React from "react";
import HeroSection from "@/components/HeroSection";
import deposits from "@/assets/deposits.png";
import DepositOptions from "./components/DepositOptions";
import WithdrawalOptions from "./components/WithdrawalOptions";

const DepositsAndWithdrawals = () => {
  return (
    <div>
      <HeroSection
        title="Effortless Access to Your Funds During Your Investment Journey"
        subtitle="Seamlessly manage your funds with fast, secure, and flexible deposit and withdrawal options tailored to your needs."
        image={deposits}
        alignImageRightBottom
        imageSize="w-full max-w-2xl"
      />
      <DepositOptions />
      <WithdrawalOptions />
    </div>
  );
};

export default DepositsAndWithdrawals;
