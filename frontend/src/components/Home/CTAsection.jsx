import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight, FaPhoneAlt, FaBalanceScale, FaClock, FaShieldAlt, FaUserCheck } from "react-icons/fa";

const CTASection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for background
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 0.85, 0.85, 0.7]);
  
  // Content animations
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["60px", "0px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);

  // Floating elements for decoration
  const floatingElements = [
    { icon: <FaBalanceScale className="h-8 w-8" />, top: "10%", left: "10%", delay: 0 },
    { icon: <FaShieldAlt className="h-6 w-6" />, top: "20%", right: "15%", delay: 0.5 },
    { icon: <FaClock className="h-5 w-5" />, bottom: "30%", left: "20%", delay: 1 },
    { icon: <FaUserCheck className="h-7 w-7" />, bottom: "20%", right: "10%", delay: 1.5 },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Parallax Background with Court Image */}
      <motion.div 
        style={{ scale: backgroundScale, y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://cdn.pixabay.com/photo/2022/10/22/07/04/gavel-7538565_960_720.jpg"
          alt="Courtroom background"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      {/* Dynamic Overlay Layers */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95"
      />
      <div className="absolute inset-0 z-[1] bg-black/50" />
      
      {/* Animated Gold Accent Overlay */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D17D0F]/20 via-transparent to-transparent"
      />

      {/* Floating Decorative Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-[#D17D0F]/20 z-[2] hidden lg:block"
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Animated Particles/Lines */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ 
              x: "100%", 
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#D17D0F]/20 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
          className="text-center"
        >
          {/* Decorative Header Line with Animation */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-[#D17D0F]/60"
            />
            <motion.div 
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              className="bg-[#D17D0F]/10 p-2.5 rounded-lg border border-[#D17D0F]/20"
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
              >
                <FaBalanceScale className="h-5 w-5 text-[#D17D0F]" />
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-[#D17D0F]/60"
            />
          </motion.div>

          {/* Main Heading with Character Animation */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block"
            >
              Ready to Discuss
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D17D0F] to-yellow-500">
                Your Case?
              </span>
            </motion.span>
          </motion.h2>

          {/* Description with Typewriter Effect */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light"
          >
            Schedule a free, confidential consultation with one of our experienced attorneys today. 
            We'll review your case and outline the best path forward.
          </motion.p>

          {/* CTA Buttons with Advanced Animations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(209, 125, 15, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-sm font-semibold transition-all shadow-lg flex items-center justify-center gap-3 group tracking-wide text-sm uppercase overflow-hidden"
            >
              {/* Animated shine effect */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "200%", opacity: 0.3 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              />
              <FaPhoneAlt className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Free Consultation</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative border border-white/30 hover:border-white text-white px-8 py-4 rounded-sm font-semibold transition-all tracking-wide text-sm uppercase backdrop-blur-sm overflow-hidden group"
            >
              {/* Border glow animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 border-2 border-[#D17D0F] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
              />
              Contact Our Firm
            </motion.button>
          </motion.div>

          {/* Trust Indicators with Sequential Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mt-14 flex flex-wrap justify-center items-center gap-8 text-gray-400"
          >
            {[
              { text: "100% Confidential", delay: 1.8 },
              { text: "No Obligation", delay: 2.0 },
              { text: "Available 24/7", delay: 2.2 },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: item.delay }}
                className="flex items-center gap-2 group cursor-default"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="w-2 h-2 rounded-full bg-[#D17D0F]"
                />
                <span className="text-sm uppercase tracking-wider group-hover:text-[#D17D0F] transition-colors">
                  {item.text}
                </span>
                {index < 2 && <div className="w-px h-4 bg-white/20 hidden sm:block" />}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"
      />
    </section>
  );
};

export default CTASection;