import React from "react";
import InstrumentsList from "./components/InstrumentsList";
import HeroSection from "@/components/HeroSection";
import instrumentsHero from "@/assets/Instruments-min.png";

const Instruments = () => {
  return (
    <div>
      <HeroSection
        title="Expand Your Opportunities"
        subtitle="We know that a successful trading strategy thrives on variety. That’s why we provide access to a wide range of trading instruments across multiple markets."
        image={instrumentsHero}
      />
      <InstrumentsList />
    </div>
  );
};

export default Instruments;
