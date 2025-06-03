import React, { useEffect, useState } from "react";
import depositsImg from "@/assets/deposits.png";
import lineBg from "@/assets/bg-line.png";
import AnimatedContent from "@/components/ui/AnimatedContent";

const HeroSection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <>
      <section className="relative bg-white overflow-hidden py-16 px-6 lg:px-20">
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: `url(${lineBg})` }}
        ></div>
        <img src={depositsImg} alt="Deposits" className="absolute bottom-0 right-0 w-[45%] opacity-90" />

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Expand Your Portfolio <br /> with{" "}
                <span className="bg-lime-400 text-white px-2 py-1 rounded">Premium</span> Brokerage
              </h1>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
              delay={0.5}
            >
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
                Welcome to CFD Capitals, your gateway to seamless trading. Our advanced brokerage technology and
                customized services will help you manage your investments with ease.
              </p>
            </AnimatedContent>
            <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded hover:bg-lime-500 transition-all mb-6">
              Get Started
            </button>
            <p className="font-bold text-gray-800">
              185k<span className="text-lime-400">+</span> Customers
            </p>
            <div className="flex -space-x-2">
              {users.map((user, index) => (
                <img
                  key={index}
                  src={user.picture.thumbnail}
                  alt={user.name.first}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Active customers and counting.</p>
          </div>
        </div>
      </section>
      <div className="w-full bg-lime-400 text-black text-center uppercase font-bold text-3xl p-4 rounded">
        Road to Your Earnings
      </div>
    </>
  );
};

export default HeroSection;
