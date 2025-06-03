import React from "react";
import bgLine from "@/assets/bg-line.png";

const HeroSection = ({
  title,
  subtitle,
  button1,
  button2,
  image,
  imageSize = "w-full",
  alignImageRightBottom = false,
}) => {
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

      {/* Text + Image for Flex Layout */}
      {!alignImageRightBottom && (
        <div className="relative z-10 flex flex-col md:flex-row items-end justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {image && (
            <div className="mt-10 md:mt-0 md:ms-12">
              <img src={image} alt="Hero Visual" className={`${imageSize}`} />
            </div>
          )}
        </div>
      )}

      {/* Image Only (Aligned Bottom-Right) */}
      {alignImageRightBottom && image && (
        <>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">{title}</h1>
            <p className="text-lg text-gray-700">{subtitle}</p>
            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
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

          <div className="absolute right-0 bottom-0 opacity-50">
            <img src={image} alt="Hero Visual" className={`${imageSize}`} />
          </div>
        </>
      )}
    </div>
  );
};

export default HeroSection;
