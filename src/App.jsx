import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/home";
import NotFound from "@/pages/NotFound";
import Instruments from "@/pages/trading/instruments";
import Promotions from "@/pages/trading/promotions";
import AccountTypes from "@/pages/trading/accountTypes";
import DepositsAndWithdrawals from "@/pages/trading/depositsandwithdrawals";
import Referrals from "@/pages/trading/referrals";
import FAQs from "@/pages/knowledge/FAQs";
import EconomicCalendar from "@/pages/knowledge/EconomicCalendar";
import AboutUs from "@/pages/support/AboutUs";
import ContactUs from "@/pages/support/ContactUs";
import Legal from "@/pages/support/Legal";
import Platform from "@/pages/platform";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/instruments" element={<Instruments />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/account-types" element={<AccountTypes />} />
          <Route path="/deposits-and-withdrawals" element={<DepositsAndWithdrawals />} />
          <Route path="/referrals" element={<Referrals />} />

          <Route path="/FAQ" element={<FAQs />} />
          <Route path="/economic-calendar" element={<EconomicCalendar />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/legal" element={<Legal />} />

          <Route path="/platform" element={<Platform />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
