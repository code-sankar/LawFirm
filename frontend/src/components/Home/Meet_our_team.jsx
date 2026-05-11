import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const TeamSection = () => {
  const lawyers = [
    {
      name: "Arthur Pendelton",
      title: "Senior Partner",
      specialty: "Corporate Law",
      experience: "25+ years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Eleanor Vance",
      title: "Managing Partner",
      specialty: "Family Law",
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Marcus Sterling",
      title: "Partner",
      specialty: "Criminal Defense",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Sophia Rossi",
      title: "Senior Associate",
      specialty: "Intellectual Property",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Jameson Locke",
      title: "Partner",
      specialty: "Real Estate Law",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Olivia Chen",
      title: "Associate",
      specialty: "Employment Law",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = useMemo(() => [...lawyers, ...lawyers], [lawyers]);

  // Cards per view depending on screen size
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else if (width < 1280) setCardsPerView(3);
      else setCardsPerView(4);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto Slide
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
              Our Attorneys
            </span>
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Meet Our Legal Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Trusted advisors with decades of collective experience. Our elite team is dedicated to providing strategic, unwavering representation.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden group py-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{
              x: `-${(100 / cardsPerView) * currentIndex}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          >
            {slides.map((lawyer, index) => (
              <div
                key={index}
                className={`w-full px-3 sm:px-4 flex-shrink-0`}
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <motion.div
                  className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden h-full transition-all duration-500 hover:shadow-2xl relative group/card"
                >
                  <div className="h-72 bg-slate-200 relative overflow-hidden">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-full h-full object-cover filter grayscale-[20%] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700"
                      onError={(e) =>
                        (e.currentTarget.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop")
                      }
                    />
                    {/* Overlay with social links on hover */}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-[#D17D0F] text-white flex items-center justify-center hover:bg-white hover:text-[#D17D0F] transition-colors transform translate-y-4 group-hover/card:translate-y-0 duration-300 delay-75">
                        <FaLinkedinIn />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-[#D17D0F] text-white flex items-center justify-center hover:bg-white hover:text-[#D17D0F] transition-colors transform translate-y-4 group-hover/card:translate-y-0 duration-300 delay-150">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 relative bg-white">
                    {/* Decorative accent line */}
                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D17D0F] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-1 group-hover/card:text-[#D17D0F] transition-colors">
                      {lawyer.name}
                    </h3>
                    <p className="text-[#D17D0F] text-sm uppercase tracking-wider font-semibold mb-4">
                      {lawyer.title}
                    </p>
                    <div className="text-sm text-slate-600 space-y-2 border-t border-slate-100 pt-4">
                      <p className="flex justify-between">
                        <span className="font-medium text-slate-900">Practice:</span> 
                        <span className="font-light">{lawyer.specialty}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium text-slate-900">Experience:</span> 
                        <span className="font-light">{lawyer.experience}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:-left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur border border-slate-200 p-3 rounded-full shadow-lg hover:bg-[#D17D0F] hover:text-white hover:border-[#D17D0F] text-slate-600 transition-all z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-4"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 lg:-right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur border border-slate-200 p-3 rounded-full shadow-lg hover:bg-[#D17D0F] hover:text-white hover:border-[#D17D0F] text-slate-600 transition-all z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:-translate-x-4"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-sm font-semibold transition-all flex items-center gap-3 mx-auto uppercase tracking-wide text-sm group">
            View Full Team 
            <FaArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;