import React from "react";
import { Link } from "react-router-dom";
import bgLine from "@/assets/bg-line.png";

export default function GetStartedSection() {
  return (
    <section className="w-full bg-primary text-light relative flex items-center justify-center text-center py-16 px-4 sm:px-8 overflow-hidden rounded-t-[48px] md:rounded-t-[96px] mt-4 md:mt-6 lg:mt-8">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-cover opacity-50 rounded-t-3xl"
        style={{
          backgroundImage: `url(${bgLine})`,
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="max-w-2xl relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Start Trading with CFD Capitals</h2>
        <p className="text-lg sm:text-xl mb-8">
          At CFD Capitals, we are dedicated to delivering exceptional trading services and empowering our traders to
          confidently navigate the dynamic financial markets. Whether you’re a beginner exploring the world of CFDs or
          an experienced trader looking for advanced tools and features, our platform ensures a seamless and rewarding
          trading experience.
        </p>
        <Link
          to="/login"
          className="inline-block px-6 py-3 rounded bg-accent text-primary font-semibold hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
