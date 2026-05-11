import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaGavel,
  FaPhoneAlt,
  FaRegClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navbarRef = useRef(null);
  const navRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle submenu close only when mouse leaves BOTH the button and the dropdown
  const handleSubmenuMouseEnter = (index) => {
    // Clear any existing timeout to prevent closing
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setOpenSubmenu(index);
  };

  const handleSubmenuMouseLeave = (index) => {
    // Only set timeout to close if this is the currently open submenu
    if (openSubmenu === index) {
      submenuTimeoutRef.current = setTimeout(() => {
        setOpenSubmenu(null);
      }, 3000); // 3 seconds delay when mouse leaves
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/home", exact: true },
    {
      name: "About Us",
      submenu: [
        { name: "Our Firm", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Mission & Vision", href: "#vision" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      name: "Practice Areas",
      submenu: [
        { name: "Corporate Law", href: "/corporate-law" },
        { name: "Family Law", href: "/family-law" },
        { name: "Litigation", href: "/litigation" },
        { name: "Criminal Defense", href: "/criminal-defense" },
        { name: "Real Estate", href: "/real-estate" },
        { name: "IP & Tech Law", href: "/tech-law" },
        { name: "Intellectual Property", href: "/intellectual-property" },
      ],
    },
    { name: "Case Studies", href: "/case-studies" },
    { name: "News & Media", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header ref={navbarRef} className="relative z-50">
      {/* Top info bar */}
      <div className="bg-slate-950 text-gray-300 text-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-2.5">
            <div className="flex items-center space-x-6 flex-wrap">
              <a
                href="tel:+9198765432xx"
                className="flex items-center hover:text-[#D17D0F] transition-colors"
              >
                <FaPhoneAlt className="w-3.5 h-3.5 mr-2 text-[#D17D0F]" />
                <span>+91 98765 432xx</span>
              </a>
              <div className="flex items-center">
                <FaRegClock className="w-3.5 h-3.5 mr-2 text-[#D17D0F]" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-3.5 h-3.5 mr-2 text-[#D17D0F]" />
                <span>Supreme Court Complex, New Delhi</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Available 24/7 for Emergencies
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Now uses ref for sticky positioning */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-2xl shadow-black/50"
            : "bg-slate-900/98 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Branding */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="bg-[#D17D0F]/10 p-2.5 rounded-lg border border-[#D17D0F]/20">
                  <FaGavel className="text-[#D17D0F] w-7 h-7" />
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D17D0F] rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide font-serif">
                  Justice<span className="text-[#D17D0F]">Guard</span>
                </h1>
                <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">
                  Legal Excellence
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <ul className="flex space-x-1">
                {navItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      item.submenu && handleSubmenuMouseEnter(index)
                    }
                    onMouseLeave={() =>
                      item.submenu && handleSubmenuMouseLeave(index)
                    }
                  >
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                            openSubmenu === index
                              ? "text-[#D17D0F] bg-white/5"
                              : "text-gray-300 hover:text-[#D17D0F] hover:bg-white/5"
                          }`}
                          aria-expanded={openSubmenu === index}
                          aria-haspopup="true"
                        >
                          {item.name}
                          <motion.span
                            animate={{
                              rotate: openSubmenu === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="w-3 h-3" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {openSubmenu === index && (
                            <motion.ul
                              initial={{ opacity: 0, y: 10, scaleY: 0.95 }}
                              animate={{ opacity: 1, y: 0, scaleY: 1 }}
                              exit={{ opacity: 0, y: 10, scaleY: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              onMouseEnter={() =>
                                handleSubmenuMouseEnter(index)
                              }
                              onMouseLeave={() =>
                                handleSubmenuMouseLeave(index)
                              }
                              className="absolute left-0 top-full mt-2 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl shadow-black/50 w-60 overflow-hidden z-50"
                              aria-label={`${item.name} submenu`}
                            >
                              {item.submenu.map((sub, subIndex) => (
                                <motion.li
                                  key={sub.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05 }}
                                >
                                  <a
                                    href={sub.href}
                                    className="block px-5 py-3.5 text-sm text-gray-300 hover:text-[#D17D0F] hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0"
                                    onClick={() => setOpenSubmenu(null)}
                                  >
                                    {sub.name}
                                  </a>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-[#D17D0F] hover:bg-white/5 transition-all duration-300 block"
                        aria-current={item.exact ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="ml-4 pl-4 border-l border-white/10">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 group"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  Free Consultation
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-[#D17D0F] p-2 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 py-4 max-h-[70vh] overflow-y-auto">
                <ul className="space-y-1">
                  {navItems.map((item, index) =>
                    item.submenu ? (
                      <li key={item.name}>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className={`flex justify-between items-center w-full px-4 py-3 rounded-md text-sm font-medium transition-all ${
                            openSubmenu === index
                              ? "text-[#D17D0F] bg-white/5"
                              : "text-gray-300 hover:text-[#D17D0F] hover:bg-white/5"
                          }`}
                          aria-expanded={openSubmenu === index}
                        >
                          {item.name}
                          <motion.span
                            animate={{
                              rotate: openSubmenu === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="w-4 h-4" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {openSubmenu === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 py-2 space-y-1">
                                {item.submenu.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    className="block px-4 py-2.5 text-sm text-gray-400 hover:text-[#D17D0F] hover:bg-white/5 rounded-md transition-all"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setOpenSubmenu(null);
                                    }}
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-[#D17D0F] hover:bg-white/5 rounded-md transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ),
                  )}
                </ul>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                  <a
                    href="tel:+9198765432xx"
                    className="flex items-center gap-3 text-gray-400 hover:text-[#D17D0F] px-4 py-2"
                  >
                    <FaPhoneAlt className="w-4 h-4" />
                    +91 98765 432xx
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-[#D17D0F] hover:bg-[#b0680c] text-white text-center py-3 rounded-md font-semibold transition-all shadow-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FaPhoneAlt className="w-4 h-4" />
                    Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Decorative Bottom Bar */}
      <div className="relative h-1 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D17D0F] via-yellow-500 to-[#D17D0F] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </header>
  );
};

export default Navbar;