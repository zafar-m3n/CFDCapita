import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import cfdImg from "@/assets/cfd.jpg";
import cryptoImg from "@/assets/crypto.jpg";
import stocksImg from "@/assets/stocks.jpg";
import indicesImg from "@/assets/indices.jpg";
import metalsImg from "@/assets/metals.jpg";
import commoditiesImg from "@/assets/commodities.jpg";

const instruments = [
  {
    name: "CFD Trading",
    description: "Access over 100 dynamic and highly liquid CFD pairs available on our platform for seamless trading.",
    image: cfdImg,
    route: "cfd-trading",
  },
  {
    name: "CryptoCFD",
    description: "Trade over 100 crypto pairs with some of the most competitive spreads in the CryptoCFD market.",
    image: cryptoImg,
    route: "crypto-cfd",
  },
  {
    name: "Stocks",
    description: "Make informed investments in the right stocks by carefully analyzing and understanding the markets.",
    image: stocksImg,
    route: "stocks",
  },
  {
    name: "Indices",
    description: "Monitor the top 100 companies on the London Stock Exchange with the FTSE 100 index.",
    image: indicesImg,
    route: "indices",
  },
  {
    name: "Metals",
    description: "Trade gold, silver, and platinum CFDs without the hassle of purchasing physical metals.",
    image: metalsImg,
    route: "metals",
  },
  {
    name: "Commodities",
    description:
      "Enhance your portfolio with natural resources, taking advantage of our improved trading conditions and tools.",
    image: commoditiesImg,
    route: "commodities",
  },
];

const InstrumentsList = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {instruments.map((item) => (
        <div
          key={item.name}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-colors duration-300 hover:bg-green-50"
        >
          <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
          <div className="p-6 flex flex-col flex-grow text-center">
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-3">{item.name}</h2>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                to={`/instruments/${item.route}`}
                className="font-medium hover:text-accent flex items-center space-x-1 rounded px-3 py-2 transition-colors"
              >
                <span>Read more</span>
                <Icon icon="ci:chevron-right-duo" width={20} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstrumentsList;
