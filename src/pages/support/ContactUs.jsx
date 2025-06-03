import React from "react";
import HeroSection from "@/components/HeroSection";
import depositsImg from "@/assets/deposits.png";
import ReachUs from "./components/ReachUs";
import ContactForm from "./components/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <HeroSection
        title="Get in Touch"
        subtitle="We value your feedback and are here to assist you in any way possible. Our dedicated team is always ready to help. Simply fill out the contact form, and we’ll be in touch shortly."
        image={depositsImg}
        imageSize="w-full max-w-2xl"
        alignImageRightBottom
      />
      <ReachUs />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
