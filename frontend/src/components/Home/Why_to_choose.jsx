import { FaUsers, FaBriefcase, FaShieldAlt, FaBalanceScale, FaStar, FaCheckCircle } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const bgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgOrb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const bgOrb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], ["40px", "0px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const statsScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);
  const statsOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  // Counter animation values
  const stats = [
    { value: "25+", label: "Years of Excellence", icon: FaBalanceScale, gradient: "from-[#D17D0F] to-yellow-500" },
    { value: "5,000+", label: "Cases Successfully Handled", icon: FaBriefcase, gradient: "from-blue-500 to-cyan-500" },
    { value: "98%", label: "Favorable Outcomes", icon: FaShieldAlt, gradient: "from-green-500 to-emerald-500" },
    { value: "$500M+", label: "Recovered for Clients", icon: FaUsers, gradient: "from-purple-500 to-pink-500" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-slate-800 text-white overflow-hidden">
      {/* Unique Animated Background Pattern */}
      <motion.div 
        style={{ y: bgPatternY }}
        className="absolute inset-0 z-0"
      >
        {/* Geometric pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #D17D0F 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #D17D0F 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 80px 80px',
            backgroundPosition: '0 0, 40px 40px'
          }}
        />
        
        {/* Diagonal line pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, #D17D0F 0px, #D17D0F 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, #D17D0F 0px, #D17D0F 1px, transparent 1px, transparent 20px)
            `
          }}
        />

        {/* Animated hexagonal grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="173.2" patternUnits="userSpaceOnUse">
                <path 
                  d="M50 0 L100 28.86 L100 86.6 L50 115.46 L0 86.6 L0 28.86 Z" 
                  fill="none" 
                  stroke="#D17D0F" 
                  strokeWidth="1"
                  opacity="0.3"
                />
                <path 
                  d="M50 173.2 L100 144.34 L100 86.6 L50 115.46 L0 86.6 L0 144.34 Z" 
                  fill="none" 
                  stroke="#D17D0F" 
                  strokeWidth="1"
                  opacity="0.15"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div 
        style={{ y: bgOrb1Y }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-[#D17D0F]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        style={{ y: bgOrb2Y }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle light rays */}
      <div className="absolute inset-0 opacity-[0.02]">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D17D0F] to-transparent"
            style={{ left: `${30 + i * 20}%` }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [1, 2, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Section with Parallax */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-0.5 bg-[#D17D0F]"
              />
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                The Firm of Choice
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Why Partner With
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D17D0F] to-yellow-500">
                  Our Legal Team?
                </span>
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-slate-400 mb-10 font-light leading-relaxed"
            >
              With decades of combined experience, our elite legal team has successfully
              handled complex, high-stakes cases, delivering exceptional results and unwavering advocacy for our clients.
            </motion.p>

            <div className="space-y-8 mt-12">
              {[
                {
                  Icon: FaUsers,
                  title: "Client-Centered Approach",
                  desc: "We prioritize your needs and objectives, crafting personalized legal strategies tailored to your unique situation.",
                },
                {
                  Icon: FaBriefcase,
                  title: "Proven Track Record",
                  desc: "A history of consistent success in complex litigation, negotiations, and high-stakes corporate disputes.",
                },
                {
                  Icon: FaShieldAlt,
                  title: "Integrity & Ethics",
                  desc: "We uphold the highest standards of professionalism, transparency, and ethical conduct in all our dealings.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-6 group cursor-default"
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex-shrink-0 mt-1"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F]/50 transition-all duration-500 relative">
                      <Icon className="h-6 w-6 text-[#D17D0F]" />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-[#D17D0F]/0 group-hover:bg-[#D17D0F]/10 blur-md transition-all duration-500" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-[#D17D0F] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards Section with Parallax */}
          <motion.div
            style={{ scale: statsScale, opacity: statsOpacity }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i + 2}
                variants={fadeUp}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-500 overflow-hidden group hover:-translate-y-2 cursor-default"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(209, 125, 15, 0.15)",
                }}
              >
                {/* Animated gradient border on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                  style={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Animated accent line on hover */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient} origin-left transition-transform duration-500 z-20`}
                />
                
                {/* Decorative corner pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.path
                      d="M 0 100 L 100 100 L 100 0"
                      fill="none"
                      stroke="#D17D0F"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileHover={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </svg>
                </div>

                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-3"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + i * 0.2,
                      type: "spring",
                      stiffness: 100 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-sm font-semibold text-[#D17D0F] uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Background Icon with rotation */}
                <motion.div
                  className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className="h-24 w-24" />
                </motion.div>

                {/* Particle effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(6)].map((_, j) => (
                    <motion.div
                      key={j}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${stat.gradient}`}
                      initial={{ 
                        x: "50%", 
                        y: "50%",
                        opacity: 0 
                      }}
                      whileHover={{
                        x: `${Math.random() * 200 - 50}%`,
                        y: `${Math.random() * 200 - 50}%`,
                        opacity: [0, 1, 0],
                        scale: [0, 2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: j * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#D17D0F]/30 to-transparent"
      />
    </section>
  );
};

export default WhyChooseUs;