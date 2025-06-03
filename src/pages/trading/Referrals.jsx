import React from "react";
import HeroSection from "@/components/HeroSection";
import referralsHeroImg from "@/assets/Referrals-min.png";
import referralsSubImg from "@/assets/referrals.jpg";
import Icon from "@/components/ui/Icon";

const Referrals = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Invite & Earn with CFD Capitals!"
        subtitle="Bring in a driven, enthusiastic trader, and watch your trading empires grow together. Let’s make success a team effort!"
        image={referralsHeroImg}
        imageSize="w-full max-w-2xl"
        // alignImageRightBottom
      />

      {/* Refer Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Refer Your Friends & Earn Big with CFD Capitals!
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Earn up to $5000 when your referrals join and start trading. The more friends you bring, the more you can
          earn. Don’t miss this chance to grow your earnings together!
        </p>
        <button className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:opacity-90 transition">
          Refer Now
        </button>
      </div>

      {/* Why Partner Section */}
      <div className="bg-black text-white text-center py-16 px-6 rounded-[48px]">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Partner with CFD Capitals?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Get the Best Conditions for Partners! CFD Capitals provides top-notch trading terms, popular instruments, and
          powerful platforms that attract clients. Partnering with us makes client referrals simple and profitable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:cash-multiple" width={24} className="text-accent" />
            <span className="text-lg font-semibold">High Commissions</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:bank-transfer" width={24} className="text-accent" />
            <span className="text-lg font-semibold">Withdrawals 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:currency-usd" width={24} className="text-accent" />
            <span className="text-lg font-semibold">Daily Payouts</span>
          </div>
        </div>
      </div>

      {/* Steps to Partner */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Become a Partner of CFD Capitals & Earn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-50 hover:bg-green-50 rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="bg-accent text-primary font-semibold text-xl px-3 py-1 rounded-full mb-4">01</div>
            <h3 className="text-lg font-bold mb-2">Register & Get IB Link</h3>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="bg-accent text-primary font-semibold text-xl px-3 py-1 rounded-full mb-4">02</div>
            <h3 className="text-lg font-bold mb-2">Bring in New Clients</h3>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="bg-accent text-primary font-semibold text-xl px-3 py-1 rounded-full mb-4">03</div>
            <h3 className="text-lg font-bold mb-2">Your Clients Start to Trade</h3>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="bg-accent text-primary font-semibold text-xl px-3 py-1 rounded-full mb-4">04</div>
            <h3 className="text-lg font-bold mb-2">Earn Commission Income</h3>
          </div>
        </div>
      </div>

      {/* Become IB Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Become an Introducing Broker with CFD Capitals
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Sign up as an Introducing Broker (IB) with CFD Capitals and give your clients access to premium trading
            conditions, precise execution, top-tier liquidity, and industry-leading service from experienced
            professionals.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="mdi:check" width={20} className="text-accent" />
              <span className="font-semibold">Advanced client reporting</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:check" width={20} className="text-accent" />
              <span className="font-semibold">Dedicated Personal Account Managers</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:check" width={20} className="text-accent" />
              <span className="font-semibold">Instant commission withdrawals</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img src={referralsSubImg} alt="Referral Program" className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default Referrals;
