import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBriefcase,
  FaBalanceScale,
} from "react-icons/fa";

const backgroundImages = [
  "https://cdn.pixabay.com/photo/2018/09/09/18/04/judge-3665164_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/10/23/10/14/scales-of-justice-500052_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/04/10/16/41/lawyer-7123798_1280.jpg",
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
];

const Hero_section = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={backgroundImages[currentImage]}
            src={backgroundImages[currentImage]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Luxurious Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 h-full pt-28">
        {/* Text Content */}
        <div className="lg:w-3/5 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-[0.2em] font-semibold text-sm">
                Excellence in Legal Practice
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-lg font-serif">
              Relentless Advocacy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D17D0F] to-yellow-500">
                Proven Results.
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl leading-relaxed font-light">
              Trusted by individuals and corporations for over 25 years. Our
              elite team of attorneys is committed to safeguarding your rights
              and delivering exceptional legal strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-sm font-semibold transition-all shadow-lg flex items-center justify-center gap-3 group tracking-wide text-sm uppercase">
                Free Consultation
                <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats / Badges Panel */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end relative z-10 w-full mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full max-w-sm"
          >
            <div className="bg-slate-950/70 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-2xl relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D17D0F] rounded-tr-xl opacity-50 transform translate-x-4 -translate-y-4"></div>

              <div className="space-y-8">
                {/* Single Award Item */}
                <div className="flex items-start gap-5">
                  <div className="bg-[#D17D0F]/20 p-3 rounded-lg border border-[#D17D0F]/30 mt-1">
                    <FaAward className="h-6 w-6 text-[#D17D0F]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-serif mb-1">
                      25+
                    </h3>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                      Years of Excellence
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10"></div>

                {/* Additional Award */}
                <div className="flex items-start gap-5">
                  <div className="bg-[#D17D0F]/20 p-3 rounded-lg border border-[#D17D0F]/30 mt-1">
                    <FaBriefcase className="h-6 w-6 text-[#D17D0F]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-serif mb-1">
                      $500M+
                    </h3>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                      Recovered for Clients
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10"></div>

                {/* Third Award */}
                <div className="flex items-start gap-5">
                  <div className="bg-[#D17D0F]/20 p-3 rounded-lg border border-[#D17D0F]/30 mt-1">
                    <FaBalanceScale className="h-6 w-6 text-[#D17D0F]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-serif mb-1">
                      98%
                    </h3>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                      Success Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero_section;
