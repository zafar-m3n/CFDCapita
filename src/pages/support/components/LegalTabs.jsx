import React, { useState } from "react";

const tabs = [
  { id: "general", label: "General Terms" },
  { id: "bonus", label: "Bonus Terms and Conditions" },
  { id: "privacy", label: "Privacy Policy" },
];

const LegalTabs = () => {
  const [activeTab, setActiveTab] = useState("general");

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">General Terms</h2>
            <p>
              <strong>1. Introduction</strong>
              <br />
              Welcome to CFD Capitals. By accessing and using our services, you agree to be bound by these General Terms
              and Conditions, which govern the use of our platform. These terms establish the legal relationship between
              you and CFD Capitals and define your rights and responsibilities as a user.
            </p>
            <p>
              <strong>2. Eligibility</strong>
              <br />
              CFD Capitals offers services exclusively to individuals who are at least 18 years old and possess the
              legal capacity to enter into binding agreements. By using our services, you confirm that you meet these
              eligibility requirements.
            </p>
            <p>
              <strong>3. Account Registration and Security</strong>
              <br />
              To access certain features, you must create an account and provide accurate, current, and complete
              information. You are responsible for safeguarding your login credentials and must notify us immediately if
              you suspect unauthorized access to your account.
            </p>
            <p>
              <strong>4. Services Provided</strong>
              <br />
              CFD Capitals offers trading services in Contracts for Difference (CFDs) and other financial instruments.
              We reserve the right to modify, suspend, or discontinue any aspect of our services without notice.
            </p>
            <p>
              <strong>5. User Conduct</strong>
              <br />
              You agree to use our platform responsibly and not engage in activities that are unlawful, fraudulent, or
              could harm CFD Capitals or other users. Prohibited activities include, but are not limited to, market
              manipulation, using automated systems without permission, and exploiting system vulnerabilities.
            </p>
            <p>
              <strong>6. Fees and Charges</strong>
              <br />
              You acknowledge and accept all applicable fees, including spreads, commissions, overnight financing, and
              any other charges that may apply. Detailed information on fees is provided on our website and may be
              updated periodically.
            </p>
            <p>
              <strong>7. Risk Disclosure</strong>
              <br />
              Trading CFDs involves significant risk and may result in the loss of your entire investment. It is your
              responsibility to understand these risks, seek professional advice if needed, and only trade with funds
              you can afford to lose.
            </p>
            <p>
              <strong>8. Intellectual Property</strong>
              <br />
              All intellectual property rights, including copyrights, trademarks, and proprietary technology, remain the
              exclusive property of CFD Capitals. Unauthorized use of our content, systems, or designs is strictly
              prohibited.
            </p>
            <p>
              <strong>9. Termination and Suspension</strong>
              <br />
              CFD Capitals reserves the right to suspend or terminate your account at any time, with or without cause,
              and without liability. Reasons may include breaches of these terms, suspected fraudulent activity, or
              legal requirements.
            </p>
            <p>
              <strong>10. Governing Law and Jurisdiction</strong>
              <br />
              These terms are governed by the laws of the jurisdiction where CFD Capitals is incorporated. You agree to
              submit to the exclusive jurisdiction of the courts of that jurisdiction for any disputes arising under
              these terms.
            </p>
          </div>
        );
      case "bonus":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Bonus Terms and Conditions</h2>
            <p>
              <strong>1. Eligibility</strong>
              <br />
              Bonus offers are available only to verified clients who meet specific eligibility criteria, including
              minimum deposit requirements, trading volume thresholds, and adherence to platform policies.
            </p>
            <p>
              <strong>2. Types of Bonuses</strong>
              <br />
              CFD Capitals may offer various bonuses, including welcome bonuses, deposit match bonuses, loyalty rewards,
              cashback offers, and promotional incentives. Each bonus type has unique terms and conditions.
            </p>
            <p>
              <strong>3. Bonus Activation</strong>
              <br />
              To activate a bonus, clients must follow the specific procedures outlined in the respective promotion.
              This may include opting in, meeting deposit criteria, or accepting the terms at the time of the offer.
            </p>
            <p>
              <strong>4. Wagering and Turnover Requirements</strong>
              <br />
              Bonuses are subject to wagering requirements that must be fulfilled before bonus funds or associated
              profits can be withdrawn. Failure to meet these requirements within the stated timeframe may result in
              bonus forfeiture.
            </p>
            <p>
              <strong>5. Trading Restrictions</strong>
              <br />
              Bonuses may not be applicable to all trading instruments. CFD Capitals reserves the right to restrict
              bonus usage on certain products or under specific market conditions.
            </p>
            <p>
              <strong>6. Bonus Abuse and Fraud</strong>
              <br />
              Any attempt to abuse bonus offers, including multiple account registrations, collusion, or arbitrage
              trading, will result in the immediate cancellation of bonuses, confiscation of profits, and potential
              account suspension or closure.
            </p>
            <p>
              <strong>7. Bonus Expiry</strong>
              <br />
              Bonuses may have an expiration period, typically stated in the offer details. Unused bonuses or
              unfulfilled wagering requirements will expire automatically after this period.
            </p>
            <p>
              <strong>8. Withdrawal Restrictions</strong>
              <br />
              Withdrawal of funds linked to a bonus may be subject to conditions. Partial withdrawals may void the
              bonus, and attempting to withdraw bonus funds before fulfilling requirements may result in forfeiture.
            </p>
            <p>
              <strong>9. Modification and Cancellation</strong>
              <br />
              CFD Capitals reserves the right to modify, suspend, or cancel any bonus offer or program at its sole
              discretion and without prior notice.
            </p>
            <p>
              <strong>10. Liability</strong>
              <br />
              CFD Capitals is not liable for any losses or damages resulting from bonus participation. You are
              responsible for understanding the terms and ensuring compliance before engaging in bonus offers.
            </p>
          </div>
        );
      case "privacy":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p>
              <strong>1. Introduction</strong>
              <br />
              At CFD Capitals, we respect your privacy and are committed to safeguarding your personal data. This
              Privacy Policy explains how we collect, use, and protect your information when you use our services.
            </p>
            <p>
              <strong>2. Information We Collect</strong>
              <br />
              We may collect personal data such as name, email, address, phone number, date of birth, government-issued
              identification, financial data, IP address, browser type, device information, and transaction details.
            </p>
            <p>
              <strong>3. How We Use Your Information</strong>
              <br />
              Your information is used to verify your identity, process transactions, provide customer support, enhance
              security, send marketing communications (where permitted), comply with legal obligations, and improve our
              services.
            </p>
            <p>
              <strong>4. Cookies and Tracking</strong>
              <br />
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze usage
              patterns, and deliver relevant content. You can manage cookie preferences through your browser settings.
            </p>
            <p>
              <strong>5. Data Sharing</strong>
              <br />
              We may share your information with regulatory authorities, payment processors, KYC/AML service providers,
              IT partners, and other trusted vendors under strict confidentiality agreements. We do not sell your data.
            </p>
            <p>
              <strong>6. International Data Transfers</strong>
              <br />
              Your information may be transferred to and processed in countries outside your jurisdiction. We ensure
              appropriate safeguards, such as Standard Contractual Clauses or equivalent, to protect your data.
            </p>
            <p>
              <strong>7. Data Security</strong>
              <br />
              We implement robust technical and organizational measures to secure your data, including encryption,
              access controls, secure servers, and regular security audits. However, no system is entirely risk-free.
            </p>
            <p>
              <strong>8. Your Rights</strong>
              <br />
              You have the right to access, rectify, delete, restrict, or object to the processing of your data. You may
              also request data portability and withdraw consent for certain processing activities.
            </p>
            <p>
              <strong>9. Data Retention</strong>
              <br />
              We retain your personal data for as long as necessary to fulfill legal, regulatory, and business
              obligations. When no longer required, we securely delete or anonymize your data.
            </p>
            <p>
              <strong>10. Policy Updates</strong>
              <br />
              CFD Capitals reserves the right to modify this Privacy Policy at any time. Changes will be posted on our
              website, and your continued use of our services after updates signifies your acceptance of the revised
              policy.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Tab Navigation */}
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-black text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-black hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl text-justify text-gray-700 text-base leading-relaxed space-y-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default LegalTabs;
