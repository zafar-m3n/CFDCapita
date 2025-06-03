import React from "react";
import promo1 from "@/assets/promo1.png";
import promo2 from "@/assets/promo2.png";
import promo3 from "@/assets/promo3.png";
import promo4 from "@/assets/promo4.jpg";
import AnimatedContent from "@/components/ui/AnimatedContent";

const promotions = [
  {
    img: promo1,
    title: "Kickstart Your Trading with a 70% Bonus!",
    points: [
      "Greater Returns – Boost earnings when trades perform well.",
      "More Market Access – Access to markets previously out of reach.",
      "Experiment with Strategies – Test new strategies without risking own capital.",
    ],
  },
  {
    img: promo2,
    title: "Enjoy a 10% Cashback Reward",
    points: [
      "Direct Savings – 10% discount on trading costs.",
      "Budget-Friendly – Instant rebate to stick to your budget.",
      "Emergency Cushion – Extra funds when needed most.",
    ],
  },
  {
    img: promo3,
    title: "Let a 60% Tradable Bonus Pave Your Trading Path",
    points: [
      "Increased Leverage – Larger positions for bigger profits.",
      "Profit Withdrawal – Flexibility to withdraw profits anytime.",
      "Psychological Comfort – Confidence in trading strategies.",
    ],
  },
  {
    img: promo4,
    title: "Unlock Your Freedom at the End of the Month",
    points: [
      "Increased Margin – Higher buying power for open positions.",
      "Increased Capital – Larger positions for more market opportunities.",
      "New Strategies – Test strategies without losing funds.",
    ],
  },
];

const PromotionsList = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
      {promotions.map((promo, index) => (
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={index % 2 === 0}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <div
            key={index}
            className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img src={promo.img} alt={promo.title} className="rounded-lg w-full h-64 object-cover" />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">{promo.title}</h3>
              <ul className="space-y-3">
                {promo.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-xs">
                      ➤
                    </span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-accent text-primary px-4 py-2 rounded">Claim Now</button>
            </div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default PromotionsList;
