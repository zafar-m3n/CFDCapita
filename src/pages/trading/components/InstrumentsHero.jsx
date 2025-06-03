import React from "react";
import bgLine from "@/assets/bg-line.png";
import instrumentsHero from "@/assets/Instruments-min.png";

const InstrumentsHero = () => {
  return (
    <div className="relative bg-yellow-50 rounded-b-[48px] overflow-hidden">
      {/* Background Line Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-cover opacity-50 rounded-t-[48px]"
        style={{
          backgroundImage: `url(${bgLine})`,
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-center md:text-left py-16 md:py-24">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Expand Your <br /> Opportunities
          </h1>
          <p className="text-lg text-gray-700">
            We know that a successful trading strategy thrives on variety. That’s why we provide access to a wide range
            of trading instruments across multiple markets.
          </p>
        </div>

        <div className="mt-10 md:ms-12 relative flex items-end">
          <img src={instrumentsHero} alt="Instruments Hero" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default InstrumentsHero;
