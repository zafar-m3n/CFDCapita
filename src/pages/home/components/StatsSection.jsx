import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import award1 from "@/assets/award1.png";
import award2 from "@/assets/award2.png";
import award3 from "@/assets/award3.png";
import award4 from "@/assets/award4.png";
import award5 from "@/assets/award5.png";
import award6 from "@/assets/award6.png";

const awards = [
  { name: "Award 1", logo: award1 },
  { name: "Award 2", logo: award2 },
  { name: "Award 3", logo: award3 },
  { name: "Award 4", logo: award4 },
  { name: "Award 5", logo: award5 },
  { name: "Award 6", logo: award6 },
  { name: "Award 1", logo: award1 },
  { name: "Award 2", logo: award2 },
  { name: "Award 3", logo: award3 },
  { name: "Award 4", logo: award4 },
  { name: "Award 5", logo: award5 },
  { name: "Award 6", logo: award6 },
];

const stats = [
  { value: "4.8", suffix: "/5", label: "User Ratings" },
  { value: "10", suffix: "y+", label: "Experience" },
  { value: "173", suffix: "+", label: "Countries" },
  { value: "24", suffix: "/7", label: "Support" },
  { value: "$1M", suffix: "+", label: "Transactions/Month" },
  { value: "5M", suffix: "+", label: "Withdrawals" },
];

const StatsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight mb-6">
              Achieve a Well-Balanced <br /> Trade Portfolio with <br />
              <span className="bg-lime-400 text-black px-2 rounded">Streamlined Brokerage</span>
              <br /> Service
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              At CFD Capitals, we empower traders with a comprehensive suite of advanced trading tools and personalized
              leverage options tailored to suit your unique investment strategy. Our platform is designed to enhance
              your trading experience, allowing you to make informed decisions and maximize your potential for success.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              Additionally, we prioritize your growth as a trader by providing extensive educational resources. From
              beginner courses to advanced strategies, our expert-led training will equip you with the knowledge and
              skills needed to navigate the financial markets with confidence. Start building your trading portfolio
              with CFD Capitals today!
            </p>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-neutral-900 text-center py-8 px-4 rounded text-lime-400 font-bold text-xl flex flex-col items-center justify-center"
              >
                <span className="text-3xl font-bold text-white">
                  {stat.value}
                  <span className="text-lime-400">{stat.suffix}</span>
                </span>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedContent>
      <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 md:px-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2.5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <img src={award.logo} alt={award.name} className="w-36 object-contain mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StatsSection;
