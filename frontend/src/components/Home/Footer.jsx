import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGavel,
  FaRegClock,
  FaArrowRight,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState(null);

  const toggle = (key) =>
    setOpenSection((prev) => (prev === key ? null : key));

  const practiceAreas = [
    "Corporate Law",
    "Family Law",
    "Criminal Defense",
    "Intellectual Property",
    "Real Estate Law",
    "Litigation",
    "Technology Law",
    "Employment Law",
  ];

  const quickLinks = [
    ["Home", "#home"],
    ["About Our Firm", "#about"],
    ["Practice Areas", "#services"],
    ["Our Legal Team", "#team"],
    ["Case Studies", "#cases"],
    ["Testimonials", "#testimonials"],
    ["News & Media", "#news"],
    ["Contact Us", "#contact"],
  ];

  const AccordionSection = ({ sectionKey, title, children }) => {
    const isOpen = openSection === sectionKey;
    return (
      <div className="border-t border-white/5">
        {/* Mobile: clickable header */}
        <button
          className="w-full flex items-center justify-between py-4 px-0 md:hidden focus:outline-none"
          onClick={() => toggle(sectionKey)}
          aria-expanded={isOpen}
        >
          <h3 className="text-white font-serif font-bold text-sm uppercase tracking-widest flex items-center gap-2">
            <div className="w-6 h-0.5 bg-[#D17D0F]"></div>
            {title}
          </h3>
          <FaChevronDown
            className={`w-3 h-3 text-[#D17D0F] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Desktop: always visible heading */}
        <h3 className="hidden md:flex text-white font-serif font-bold text-lg mb-6 items-center gap-2 mt-0">
          <div className="w-8 h-0.5 bg-[#D17D0F]"></div>
          {title}
        </h3>

        {/* Content: collapsible on mobile, always visible on desktop */}
        <div
          className={`overflow-hidden transition-all duration-300 md:block ${
            isOpen ? "max-h-[600px] pb-4" : "max-h-0 md:max-h-none"
          }`}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* Top Decorative Bar */}
      <div className="relative h-1 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D17D0F] via-yellow-500 to-[#D17D0F] opacity-80"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-12">

          {/* ── Brand Section ── */}
          <div className="pb-6 md:pb-0 border-b border-white/5 md:border-none">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="bg-[#D17D0F]/10 p-2.5 rounded-lg border border-[#D17D0F]/20">
                  <FaGavel className="text-[#D17D0F] w-6 h-6" />
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D17D0F] rounded-full"></div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide font-serif">
                  Justice<span className="text-[#D17D0F]">Guard</span>
                </h2>
                <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mt-0.5">
                  Legal Excellence
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm font-light mb-5">
              Providing exceptional legal services for over 25 years. Our elite
              team of attorneys is dedicated to protecting your rights and
              delivering outstanding results for every client.
            </p>

            {/* Social Links */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {[
                  { Icon: FaFacebookF, href: "#", label: "Facebook" },
                  { Icon: FaTwitter, href: "#", label: "Twitter" },
                  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                  { Icon: FaInstagram, href: "#", label: "Instagram" },
                ].map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D17D0F] hover:bg-[#D17D0F]/10 hover:border-[#D17D0F]/30 transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* App Store Buttons — mobile only */}
            <div className="flex gap-3 md:hidden">
              <a
                href="#"
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex-1 hover:border-[#D17D0F]/30 transition-all duration-300"
              >
                <FaApple className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <div>
                  <div className="text-[9px] text-gray-500 leading-none">
                    Download on the
                  </div>
                  <div className="text-xs font-semibold text-gray-200 leading-tight mt-0.5">
                    App Store
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex-1 hover:border-[#D17D0F]/30 transition-all duration-300"
              >
                <FaGooglePlay className="w-4 h-4 text-gray-300 flex-shrink-0" />
                <div>
                  <div className="text-[9px] text-gray-500 leading-none">
                    Get it on
                  </div>
                  <div className="text-xs font-semibold text-gray-200 leading-tight mt-0.5">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ── Practice Areas ── */}
          <AccordionSection sectionKey="practiceAreas" title="Practice Areas">
            <ul className="space-y-2 md:space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#D17D0F] transition-all duration-300 group text-sm"
                  >
                    <FaChevronRight className="w-2.5 h-2.5 text-[#D17D0F] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                    <span>{area}</span>
                  </a>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* ── Quick Links ── */}
          <AccordionSection sectionKey="quickLinks" title="Quick Links">
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#D17D0F] transition-all duration-300 group text-sm"
                  >
                    <FaChevronRight className="w-2.5 h-2.5 text-[#D17D0F] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* ── Contact Info ── */}
          <AccordionSection sectionKey="contactUs" title="Contact Us">
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#D17D0F]" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">
                    Office Address
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Supreme Court Complex
                    <br />
                    Tilak Marg, New Delhi - 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <FaPhoneAlt className="w-3.5 h-3.5 text-[#D17D0F]" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-500 text-sm hover:text-[#D17D0F] transition-colors block"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="tel:+919876543999"
                    className="text-gray-500 text-sm hover:text-[#D17D0F] transition-colors block"
                  >
                    +91 98765 43999 (24/7)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <FaEnvelope className="w-3.5 h-3.5 text-[#D17D0F]" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email</p>
                  <a
                    href="mailto:info@justiceguard.com"
                    className="text-gray-500 text-sm hover:text-[#D17D0F] transition-colors block"
                  >
                    info@justiceguard.com
                  </a>
                  <a
                    href="mailto:support@justiceguard.com"
                    className="text-gray-500 text-sm hover:text-[#D17D0F] transition-colors block"
                  >
                    support@justiceguard.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <FaRegClock className="w-3.5 h-3.5 text-[#D17D0F]" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">
                    Working Hours
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </AccordionSection>
        </div>

        {/* ── Newsletter Section ── */}
        <div className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-serif font-bold text-xl mb-2">
              Stay Informed
            </h3>
            <p className="text-gray-500 text-sm mb-6 font-light">
              Subscribe to our newsletter for legal updates, insights, and firm
              news.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#D17D0F] focus:ring-1 focus:ring-[#D17D0F]/50 transition-all text-sm"
              />
              <button
                type="submit"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide group flex-shrink-0"
              >
                Subscribe
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* ── App Store Buttons — desktop only ── */}
        <div className="hidden md:flex justify-center gap-4 mt-10 pt-8 border-t border-white/5">
          <a
            href="#"
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 hover:border-[#D17D0F]/40 hover:bg-[#D17D0F]/5 transition-all duration-300"
          >
            <FaApple className="w-6 h-6 text-gray-300" />
            <div>
              <div className="text-[10px] text-gray-500 leading-none">
                Download on the
              </div>
              <div className="text-sm font-semibold text-gray-200 leading-tight mt-0.5">
                App Store
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 hover:border-[#D17D0F]/40 hover:bg-[#D17D0F]/5 transition-all duration-300"
          >
            <FaGooglePlay className="w-5 h-5 text-gray-300" />
            <div>
              <div className="text-[10px] text-gray-500 leading-none">
                Get it on
              </div>
              <div className="text-sm font-semibold text-gray-200 leading-tight mt-0.5">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs md:text-sm">
            <p className="text-center md:text-left">
              &copy; {currentYear} JusticeGuard Law Firm. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {["Privacy Policy", "Terms of Service", "Disclaimer", "Sitemap"].map(
                (text) => (
                  <a
                    key={text}
                    href="#"
                    className="hover:text-[#D17D0F] transition-colors relative group"
                  >
                    {text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D17D0F] group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Back to Top Button ── */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 w-11 h-11 bg-[#D17D0F] hover:bg-[#b0680c] text-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 z-50"
        aria-label="Back to top"
      >
        <FaChevronRight className="w-4 h-4 -rotate-90" />
      </a>
    </footer>
  );
};

export default Footer;