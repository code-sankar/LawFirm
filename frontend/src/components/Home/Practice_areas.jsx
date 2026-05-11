import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaArrowRight,
  FaBuilding,
  FaUsers,
  FaShieldAlt,
  FaBookOpen,
  FaHome,
  FaFileContract,
  FaAdversal
} from "react-icons/fa";
import { href } from "react-router-dom";

const Practice_areas = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], ["60px", "0px"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const descriptionY = useTransform(scrollYProgress, [0, 0.4], ["40px", "0px"]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardsScale = useTransform(scrollYProgress, [0.3, 0.7], [0.9, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const practiceAreas = [
    {
      icon: <FaBuilding className="h-10 w-10 text-[#D17D0F]" />,
      title: "Corporate Law",
      href: "/corporate-law",
      description:
        "Comprehensive legal guidance for business formations, mergers, acquisitions, and compliance matters.",
    },
    {
      icon: <FaUsers className="h-10 w-10 text-[#D17D0F]" />,
      title: "Family Law",
      href: "/family-law",
      description:
        "Compassionate representation in divorce, child custody, adoption, and complex family disputes.",
    },
    {
      icon: <FaShieldAlt className="h-10 w-10 text-[#D17D0F]" />,
      title: "Criminal Defense",
      href: "/criminal-defense",
      description:
        "Vigorous defense strategies protecting your rights in felony, misdemeanor, and federal cases.",
    },
    {
      icon: <FaShieldAlt className="h-10 w-10 text-[#D17D0F]" />,
      title: "Litigation",
      href: "/litigation",
      description:
        "Vigorous defense strategies protecting your rights in felony, misdemeanor, and federal cases.",
    },
    {
      icon: <FaBookOpen className="h-10 w-10 text-[#D17D0F]" />,
      title: "Intellectual Property",
      href: "/intellectual-property",
      description:
        "Securing and defending your patents, trademarks, copyrights, and trade secrets globally.",
    },
    {
      icon: <FaHome className="h-10 w-10 text-[#D17D0F]" />,
      title: "Real Estate Law",
      href: "/real-estate",
      description:
        "Expert counsel on commercial and residential property transactions, zoning, and litigation.",
    },
    {
      icon: <FaFileContract className="h-10 w-10 text-[#D17D0F]" />,
      title: "Employment Law",
      href: "/employment-law",
      description:
        "Advocating for fair workplace practices, handling discrimination, and contract disputes.",
    },
    {
      icon: <FaAdversal className="h-10 w-10 text-[#D17D0F]" />,
      title: "IP & Tech Law",
      href: "/tech-law",
      description:
        "Advocating for fair workplace practices, handling discrimination, and contract disputes.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-slate-50"
    >
      {/* Parallax Background Pattern */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900/5 via-transparent to-transparent" />

        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#D17D0F 1px, transparent 1px), linear-gradient(to right, #D17D0F 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Parallax */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
              Areas of Expertise
            </span>
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6">
            Our Practice Areas
          </h2>
        </motion.div>

        <motion.p
          style={{ y: descriptionY, opacity: descriptionOpacity }}
          className="text-lg text-slate-600 max-w-2xl mx-auto text-center font-light leading-relaxed mb-20"
        >
          We provide strategic legal counsel across diverse practice areas. Our
          seasoned attorneys are committed to delivering tailored solutions for
          your unique legal challenges.
        </motion.p>

        {/* Cards Grid with Parallax Scale */}
        <motion.div
          style={{ scale: cardsScale, opacity: cardsOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl border border-slate-100 hover:border-[#D17D0F]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#D17D0F] rounded-tr-xl" />
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D17D0F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 group-hover:bg-[#D17D0F]/10 transition-colors duration-500 border border-slate-100 group-hover:border-[#D17D0F]/20 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {area.icon}
                  </motion.div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute -inset-2 bg-[#D17D0F]/0 group-hover:bg-[#D17D0F]/5 rounded-full blur-xl transition-all duration-500 -z-0" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-[#D17D0F] transition-colors duration-300">
                {area.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8 font-light">
                {area.description}
              </p>

              <a
                href={area.href}
                className="inline-flex items-center gap-2 text-slate-900 group-hover:text-[#D17D0F] font-semibold text-sm uppercase tracking-wider transition-all duration-300 group/link"
              >
                Learn More
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight className="h-4 w-4 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                </motion.span>
              </a>

              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D17D0F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-slate-600 uppercase tracking-wider font-medium">
              Available for Immediate Consultation
            </span>
            <a
              href="/contact"
              className="text-[#D17D0F] font-semibold text-sm uppercase tracking-wider hover:text-[#b0680c] transition-colors ml-2"
            >
              Contact Us →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Practice_areas;
