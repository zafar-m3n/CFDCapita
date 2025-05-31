import React from "react";
import Icon from "@/components/ui/Icon";
import logoWhite from "@/assets/logo-white.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-primary text-light min-h-40 relative w-full flex flex-col items-center justify-center overflow-hidden border-t border-gray-300 mt-4 md:mt-6 lg:mt-8">
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 py-8">
          {/* Logo and Socials */}
          <div className="flex flex-col space-y-4">
            <img src={logoWhite} alt="CFD Capitals Logo" className="w-1/2 md:w-auto mb-8" />
            <div className="flex space-x-4">
              {["prime:facebook", "prime:instagram", "prime:twitter", "prime:linkedin"].map((icon) => (
                <Icon
                  key={icon}
                  icon={icon}
                  width={36}
                  className="text-light hover:text-accent transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account-types" className="hover:text-accent">
                  Account Types
                </Link>
              </li>
              <li>
                <Link to="/instruments" className="hover:text-accent">
                  Instruments
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-accent">
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Documents */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal Documents</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/general-terms" className="hover:text-accent">
                  General Terms
                </Link>
              </li>
              <li>
                <Link to="/legal/bonus-terms" className="hover:text-accent">
                  Bonus Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal/kyc" className="hover:text-accent">
                  KYC Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/risk-disclosure" className="hover:text-accent">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link to="/legal/referral" className="hover:text-accent">
                  Referral Agreement
                </Link>
              </li>
              <li>
                <Link to="/legal/aml" className="hover:text-accent">
                  AML Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="mb-2">
              <strong>Sweden:</strong> Hammarbybacken 27, Stockholm, Sweden
            </p>
            <p className="mb-2">
              <strong>UK:</strong> 55 Colmore Row, Birmingham, B3 2AA
            </p>
            <p className="mb-2">
              <strong>Sweden:</strong> +46 90 695 7555
            </p>
            <p className="mb-2">
              <strong>UK:</strong> +44 20 3504 2776
            </p>
            <p>support@cfdcapitals.co</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto text-justify text-soft-gray pt-8">
          <p>
            <span className="font-bold">Risk Warning: </span> An investment in derivatives may mean investors may lose
            an amount even greater than their original investment. Anyone wishing to invest in any of the products
            mentioned in www.cfdcapitals.co should seek their own financial or professional advice. Trading of
            securities, CFD, stock market, commodities, options and futures may not be suitable for everyone and
            involves the risk of losing part or all of your money. Trading in the financial markets has large potential
            rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in
            order to invest in the markets. Don’t invest and trade with money which you can’t afford to lose. CFD
            Trading are not allowed in some countries, before investing your money, make sure whether your country is
            allowing this or not. You are strongly advised to obtain independent financial, legal and tax advice before
            proceeding with any CFD or spot metals trade. Nothing in this site should be read or construed as
            constituting advice on the part of CFD Capitals Limited or any of its affiliates, directors, officers or
            employees. Restricted CFD Capitals Limited does not provide services for citizens/residents of the United
            States, Cuba, Iraq, Myanmar, North Korea, Sudan. The services of CFD Capitals are not intended for
            distribution to, or use by, any person in any country or jurisdiction where such distribution or use would
            be contrary to local law or regulation.
          </p>
        </div>

        <div className="border-t border-gray-300 mt-8 py-4 flex justify-center items-center">
          <p className="text-center">Copyright &copy; {new Date().getFullYear()} CFD Capitals. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
