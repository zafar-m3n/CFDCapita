import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import LP1 from "@/assets/lp1.png";
import LP2 from "@/assets/lp2.png";
import LP3 from "@/assets/lp3.png";
import LP4 from "@/assets/lp4.png";
import LP5 from "@/assets/lp5.png";
import LP6 from "@/assets/lp6.png";
import "swiper/css";

const LPs = [
  { name: "Tether", logo: LP1 },
  { name: "Peer-2-Peer", logo: LP2 },
  { name: "Litecoin", logo: LP3 },
  { name: "Bitcoin", logo: LP4 },
  { name: "Bank Transfer", logo: LP5 },
  { name: "VISA", logo: LP6 },
  { name: "Tether", logo: LP1 },
  { name: "Peer-2-Peer", logo: LP2 },
  { name: "Litecoin", logo: LP3 },
  { name: "Bitcoin", logo: LP4 },
  { name: "Bank Transfer", logo: LP5 },
  { name: "VISA", logo: LP6 },
];

const LiquidityProviders = () => {
  return (
    <section className="py-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        breakpoints={{
          1024: { slidesPerView: 6 },
        }}
      >
        {LPs.map((bank, index) => (
          <SwiperSlide key={index}>
            <img src={bank.logo} alt={bank.name} className="w-36 h-36 object-contain mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LiquidityProviders;
