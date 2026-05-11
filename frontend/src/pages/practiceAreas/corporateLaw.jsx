import { FaBuilding, FaHandshake, FaFileContract, FaBalanceScale, FaShieldAlt, FaUsers, FaChartLine, FaGlobe, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const CorporateLaw = () => {
  const services = [
    {
      icon: <FaBuilding className="h-8 w-8" />,
      title: "Business Formation & Structuring",
      description: "Expert guidance on choosing the right business entity - Private Limited, LLP, Partnership, or Sole Proprietorship. We handle all registration, compliance, and documentation to establish your business on solid legal ground.",
    },
    {
      icon: <FaHandshake className="h-8 w-8" />,
      title: "Mergers & Acquisitions",
      description: "End-to-end M&A advisory including due diligence, valuation, negotiation, deal structuring, and post-merger integration. We've successfully facilitated transactions worth over $500M.",
    },
    {
      icon: <FaFileContract className="h-8 w-8" />,
      title: "Contract Drafting & Review",
      description: "Comprehensive contract lifecycle management - from drafting vendor agreements, NDAs, and partnership deeds to reviewing complex commercial contracts to protect your interests.",
    },
    {
      icon: <FaBalanceScale className="h-8 w-8" />,
      title: "Corporate Litigation",
      description: "Aggressive representation in shareholder disputes, breach of contract cases, corporate fraud, and regulatory proceedings before NCLT, NCLAT, SEBI, and other forums.",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8" />,
      title: "Regulatory Compliance",
      description: "Stay compliant with Companies Act, FEMA, SEBI regulations, RBI guidelines, and other statutory requirements. We provide ongoing compliance support and audit preparation.",
    },
    {
      icon: <FaGlobe className="h-8 w-8" />,
      title: "International Business Law",
      description: "Cross-border transaction advisory, foreign direct investment (FDI), joint ventures, technology transfers, and international trade compliance for global businesses entering India.",
    },
    {
      icon: <FaChartLine className="h-8 w-8" />,
      title: "Corporate Restructuring",
      description: "Strategic restructuring solutions including demergers, slump sales, business transfers, and debt restructuring to optimize operations and enhance shareholder value.",
    },
    {
      icon: <FaUsers className="h-8 w-8" />,
      title: "Board Advisory & Governance",
      description: "Expert counsel on corporate governance best practices, board composition, directors' duties, shareholder rights, and ESG compliance for sustainable business growth.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion to understand your business objectives, challenges, and legal requirements. This helps us craft a tailored strategy.",
    },
    {
      step: "02",
      title: "Legal Assessment",
      description: "Our team conducts thorough legal due diligence, identifies potential risks, and evaluates regulatory implications specific to your business sector.",
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "We develop a comprehensive legal strategy aligned with your business goals, outlining the optimal approach and timeline for implementation.",
    },
    {
      step: "04",
      title: "Implementation & Support",
      description: "Our attorneys execute the strategy with precision, handling all documentation, filings, and negotiations while keeping you informed at every stage.",
    },
  ];

  const industries = [
    "Technology & IT Services",
    "Manufacturing & Engineering",
    "Banking & Financial Services",
    "Healthcare & Pharmaceuticals",
    "Real Estate & Infrastructure",
    "E-commerce & Retail",
    "Energy & Natural Resources",
    "Media & Entertainment",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Practice Area
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Corporate Law
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Comprehensive corporate legal services designed to protect your business interests, 
              ensure regulatory compliance, and drive sustainable growth in today's competitive landscape.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>500+ Corporate Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>$500M+ Deals Facilitated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Your Trusted Partner in Corporate Legal Excellence
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  In today's complex business environment, sound legal counsel is not just a necessity—it's a strategic advantage. 
                  Our Corporate Law practice combines deep industry knowledge with legal expertise to help businesses navigate 
                  challenges and seize opportunities with confidence.
                </p>
                <p>
                  From startups seeking proper incorporation to multinational corporations managing complex cross-border transactions, 
                  we provide tailored legal solutions that align with your business objectives. Our team of seasoned corporate attorneys 
                  brings together decades of experience across diverse industry sectors.
                </p>
                <p>
                  We don't just offer legal advice; we become your strategic partners, understanding your business model, 
                  anticipating challenges, and crafting proactive solutions that protect your interests while driving growth.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2 text-sm uppercase tracking-wide"
                >
                  Schedule Consultation
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="border border-slate-300 hover:border-[#D17D0F] text-slate-700 hover:text-[#D17D0F] px-6 py-3 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide"
                >
                  View Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">
                  Why Choose Our Corporate Law Team?
                </h3>
                <div className="space-y-4">
                  {[
                    "Deep understanding of Indian corporate regulations",
                    "Proven track record in complex transactions",
                    "Industry-specific legal expertise",
                    "Practical, business-oriented solutions",
                    "Responsive and accessible legal team",
                    "Cost-effective fee structures",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                      </div>
                      <p className="text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                What We Offer
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Corporate Law Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Comprehensive legal solutions designed to address every aspect of your business needs, 
              from formation to expansion and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-[#D17D0F] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 group-hover:text-[#D17D0F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Our Approach
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              How We Work With You
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              A systematic, transparent approach to delivering exceptional corporate legal services 
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-[#D17D0F]/10 border-2 border-[#D17D0F]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-all duration-300">
                  <span className="text-2xl font-serif font-bold text-[#D17D0F]">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {process.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-[#D17D0F]/30 -translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Our corporate law expertise spans across diverse industry sectors, 
              enabling us to provide specialized, context-aware legal solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#D17D0F]/30 hover:bg-[#D17D0F]/5 transition-all duration-300 group"
              >
                <FaBuilding className="h-5 w-5 text-[#D17D0F] flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm group-hover:text-[#D17D0F] transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#D17D0F]/10 border border-[#D17D0F]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <FaBalanceScale className="h-8 w-8 text-[#D17D0F]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Strengthen Your Business Legally?
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Partner with our experienced corporate law team for comprehensive legal support 
              that protects your interests and accelerates your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                Get Free Consultation
                <FaArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="border border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide inline-flex items-center justify-center gap-2"
              >
                Call Us Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Corporate Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">$500M+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Transaction Value</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">25+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateLaw;