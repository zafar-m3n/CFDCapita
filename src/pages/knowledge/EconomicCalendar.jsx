import React from "react";
import HeroSection from "@/components/HeroSection";
import depositsImg from "@/assets/deposits.png"; // Adjust based on your file structure
import CalendarWidget from "./components/CalendarWidget";

const EconomicCalendar = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Economic Calendar"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        image={depositsImg}
        imageSize="w-full max-w-2xl"
        alignImageRightBottom
      />

      {/* Description Paragraph */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is an Economic Calendar?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          An economic calendar tracks significant national and global events that can influence the prices and trends in
          the global economy, financial markets, and assets in real time. This schedule of upcoming events has the
          potential to affect various markets, including CFDs, stocks, indices, commodities, and cryptocurrencies.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          Regardless of your trading time frame or level of activity, keeping an eye on the economic calendar is
          essential. Even long-term CFD investors will benefit from staying updated on key economic releases, forecasts,
          and their actual outcomes.
        </p>
      </div>

      {/* TradingView Widget */}
      <div className="max-w-5xl mx-auto px-6 h-auto overflow-hidden">
        <CalendarWidget />
      </div>

      {/* Key Parts Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Key Parts of an Economic Calendar</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          An economic calendar typically offers the following information, though some calendars may include additional
          customized elements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 hover:bg-green-50 rounded-2xl p-8 text-center transition-colors flex flex-col items-center justify-center">
            <div className="bg-accent text-primary font-semibold text-xl px-3 py-1 rounded-full mb-4">01</div>
            <h3 className="text-xl font-bold mb-4">Date & Time</h3>
            <p className="text-base text-gray-700">
              The calendar organizes events by date and time, allowing traders to schedule their activities effectively.
            </p>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 rounded-2xl p-8 text-center transition-colors flex flex-col items-center justify-center">
            <div className="bg-accent text-primary font-semibold text-xl px-3 py-1 rounded-full mb-4">02</div>
            <h3 className="text-xl font-bold mb-4">Event</h3>
            <p className="text-base text-gray-700">
              The title of the economic data, monetary policy decision, or any other announcement to be made.
            </p>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 rounded-2xl p-8 text-center transition-colors flex flex-col items-center justify-center">
            <div className="bg-accent text-primary font-semibold text-xl px-3 py-1 rounded-full mb-4">03</div>
            <h3 className="text-xl font-bold mb-4">Country or Region</h3>
            <p className="text-base text-gray-700">
              Events are categorised regionally, as different economies lead to market movements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicCalendar;
