import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState("");
  const location = useLocation();

  const menuItems = [
    {
      label: "Start Trading",
      subLinks: ["/instruments", "/promotions", "/account-types", "/deposits-and-withdrawals", "/referrals"],
    },
    {
      label: "Knowledge Hub",
      subLinks: ["/economic-calendar", "/FAQ"],
    },
    {
      label: "Support",
      subLinks: ["/about-us", "/contact-us", "/legal"],
    },
    { label: "Platform", link: "/platform" },
  ];

  const isActive = (path) => location.pathname === path;

  const formatSubLink = (sub) => {
    return sub
      .split("/")
      .pop()
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // To close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenSubMenu("");
  }, [location]);

  return (
    <nav className="w-full">
      {/* Header (Logo + Toggle) */}
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between border-b border-gray-300 md:border-0 z-50 bg-white relative">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="CFD Capitals Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center space-x-8 text-black font-medium">
          {menuItems.map((item) =>
            item.subLinks ? (
              <div key={item.label} className="relative group flex items-center gap-1">
                <span className="cursor-pointer hover:text-green-500 flex items-center gap-1">
                  {item.label}
                  <Icon icon="heroicons:chevron-down" width={16} />
                </span>
                <div
                  className={`
                    absolute left-0 top-full mt-2 py-2 rounded z-50 min-w-[240px]
                    bg-white border border-green-500 shadow-lg
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-in-out
                  `}
                >
                  {item.subLinks.map((sub) => (
                    <Link
                      key={sub}
                      to={sub}
                      className={`block px-4 py-2 capitalize hover:text-green-500 hover:bg-white/10 ${
                        isActive(sub) ? "text-green-500" : "text-black"
                      }`}
                    >
                      {formatSubLink(sub)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className={`hover:text-green-500 ${isActive(item.link) ? "text-green-500" : "text-black"}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Login/Register Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded border border-green-500 text-green-500 font-medium hover:bg-green-500 hover:text-white transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-green-500">
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (below header) */}
      <div
        className={`lg:hidden bg-white overflow-y-auto transition-all duration-500 ease-in-out fixed left-0 right-0 ${
          isOpen ? "top-[80px] opacity-100 max-h-[calc(100vh-80px)]" : "max-h-0 opacity-0"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="px-4 py-4 space-y-4">
          {menuItems.map((item) =>
            item.subLinks ? (
              <div key={item.label} className="border-b border-green-500 pb-2">
                <div
                  onClick={() => setOpenSubMenu(openSubMenu === item.label ? "" : item.label)}
                  className="flex justify-between items-center text-black font-semibold cursor-pointer"
                >
                  <span>{item.label}</span>
                  <Icon
                    icon="heroicons:chevron-down"
                    width="20"
                    className={`transition-transform duration-300 ${openSubMenu === item.label ? "rotate-180" : ""}`}
                  />
                </div>
                <div
                  className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    openSubMenu === item.label ? "max-h-96 opacity-100 visible mt-1" : "max-h-0 opacity-0 invisible"
                  }`}
                >
                  {item.subLinks.map((sub) => (
                    <Link
                      key={sub}
                      to={sub}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubMenu("");
                      }}
                      className={`block py-1 capitalize hover:text-green-500 ${
                        isActive(sub) ? "text-green-500" : "text-black"
                      }`}
                    >
                      {formatSubLink(sub)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div key={item.label} className="border-b border-green-500 pb-2">
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-green-500 ${isActive(item.link) ? "text-green-500" : "text-black"}`}
                >
                  {item.label}
                </Link>
              </div>
            )
          )}

          {/* Login/Register Buttons (below links) */}
          <div className="flex flex-col space-y-3 pt-4">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 rounded border border-green-500 text-green-500 font-medium hover:bg-green-500 hover:text-white transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
