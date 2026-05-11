import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], ["50px", "0px"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const descriptionY = useTransform(scrollYProgress, [0, 0.4], ["40px", "0px"]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardsScale = useTransform(scrollYProgress, [0.2, 0.6], [0.9, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.2, 0.6], ["80px", "0px"]);

  const testimonials = [
    {
      quote:
        "JusticeGuard helped me navigate a complex business merger. Their expertise saved us time and money.",
      author: "Rajesh Sharma",
      company: "Tech Innovations Inc.",
    },
    {
      quote:
        "I was facing serious criminal charges. Thanks to their diligent work, I was completely exonerated.",
      author: "Priya Patel",
      company: "",
    },
    {
      quote:
        "The family law team handled my divorce with compassion and professionalism. Highly recommended.",
      author: "Amit Deshmukh",
      company: "Deshmukh Enterprises",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div 
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
        
        {/* Decorative grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#D17D0F 1px, transparent 1px), linear-gradient(to right, #D17D0F 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D17D0F]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#D17D0F]/3 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Parallax */}
        <motion.div 
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-[#D17D0F]"></div>
            <span className="text-[#D17D0F] uppercase tracking-[0.2em] font-semibold text-sm">
              Testimonials
            </span>
            <div className="w-12 h-1 bg-[#D17D0F]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
            Trusted by Clients
          </h2>
        </motion.div>

        <motion.p
          style={{ y: descriptionY, opacity: descriptionOpacity }}
          className="text-gray-400 max-w-2xl mx-auto text-center text-lg leading-relaxed font-light mb-20"
        >
          Hear from our satisfied clients about their experience with our dedicated legal team.
        </motion.p>

        {/* Testimonials Grid with Parallax */}
        <motion.div
          style={{ y: cardsY, scale: cardsScale, opacity: cardsOpacity }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-950/70 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D17D0F]/0 to-transparent group-hover:from-[#D17D0F]/5 transition-all duration-500" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D17D0F] rounded-tr-xl opacity-30 transform translate-x-2 -translate-y-2 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Quote Icon */}
              <div className="mb-6 relative z-10">
                <div className="bg-[#D17D0F]/10 p-3 rounded-lg border border-[#D17D0F]/20 inline-block group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaQuoteLeft className="h-5 w-5 text-[#D17D0F]" />
                  </motion.div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1.5 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-4 h-4 text-[#D17D0F]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light italic relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="relative z-10 mb-6">
                <div className="w-full h-px bg-white/10 group-hover:bg-[#D17D0F]/20 transition-colors duration-300"></div>
              </div>

              {/* Author Info */}
              <div className="relative z-10">
                <p className="font-semibold text-white text-lg font-serif group-hover:text-[#D17D0F] transition-colors duration-300">
                  {testimonial.author}
                </p>
                {testimonial.company && (
                  <p className="text-[#D17D0F] text-sm mt-1 tracking-wide uppercase font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {testimonial.company}
                  </p>
                )}
              </div>

              {/* Bottom corner decoration */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#D17D0F] rounded-bl-xl opacity-30 transform -translate-x-2 translate-y-2 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-950/70 backdrop-blur-sm rounded-full border border-white/10 shadow-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-400 text-sm uppercase tracking-wider">
                4.9 Average Rating
              </span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">
              500+ Happy Clients
            </span>
            <div className="w-px h-6 bg-white/10"></div>
            <a 
              href="#contact" 
              className="text-[#D17D0F] font-semibold text-sm uppercase tracking-wider hover:text-[#b0680c] transition-colors"
            >
              Read More Reviews →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;