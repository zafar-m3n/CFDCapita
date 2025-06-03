import React from "react";
import bgLine from "@/assets/bg-line.png";

const HeroSection = ({ title, subtitle, button1, button2, image }) => {
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
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left py-16 md:py-24">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>
          <p className="text-lg text-gray-700">{subtitle}</p>
          <div className="flex items-center gap-4 mt-6">
            {button1 && (
              <button className="bg-accent text-primary font-semibold px-6 py-2 rounded hover:opacity-90 transition">
                {button1}
              </button>
            )}
            {button2 && (
              <button className="border border-gray-800 text-gray-800 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
                {button2}
              </button>
            )}
          </div>
        </div>
        <div className="mt-10 md:ms-12 relative flex items-end">
          <img src={image} alt="Hero Visual" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
