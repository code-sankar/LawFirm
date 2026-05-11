import { FaLightbulb, FaShieldAlt, FaCopyright, FaTrademark, FaFileContract, FaGlobe, FaSearch, FaBalanceScale, FaPhoneAlt, FaCheckCircle, FaArrowRight, FaLock, FaRocket, FaChartLine, FaHandshake, FaClipboardList, FaExclamationTriangle } from "react-icons/fa";

const IntellectualProperty = () => {
  const services = [
    {
      icon: <FaShieldAlt className="h-8 w-8" />,
      title: "Patent Protection & Prosecution",
      description: "Complete patent services from prior art searches and patentability assessments to drafting, filing, and prosecution before the Indian Patent Office and international patent offices.",
    },
    {
      icon: <FaTrademark className="h-8 w-8" />,
      title: "Trademark Registration & Enforcement",
      description: "Comprehensive brand protection including trademark search, registration, opposition proceedings, renewal, and aggressive enforcement against infringement and passing off.",
    },
    {
      icon: <FaCopyright className="h-8 w-8" />,
      title: "Copyright Registration & Protection",
      description: "Copyright registration for literary works, artistic creations, musical compositions, cinematographic films, sound recordings, and software code with enforcement against piracy.",
    },
    {
      icon: <FaLightbulb className="h-8 w-8" />,
      title: "Industrial Design Protection",
      description: "Registration and protection of industrial designs, aesthetic creations, and product外观设计s under the Designs Act, including enforcement against unauthorized copying.",
    },
    {
      icon: <FaLock className="h-8 w-8" />,
      title: "Trade Secret & Confidential Information",
      description: "Legal frameworks for protecting proprietary information, trade secrets, algorithms, customer data, and confidential business information through agreements and litigation.",
    },
    {
      icon: <FaGlobe className="h-8 w-8" />,
      title: "International IP Protection",
      description: "Global IP strategy and protection through PCT applications, Madrid Protocol trademarks, international copyright conventions, and coordinated multi-jurisdictional enforcement.",
    },
    {
      icon: <FaFileContract className="h-8 w-8" />,
      title: "IP Licensing & Commercialization",
      description: "Strategic IP monetization through licensing agreements, technology transfer, franchise agreements, assignment deeds, and IP valuation for commercial transactions.",
    },
    {
      icon: <FaBalanceScale className="h-8 w-8" />,
      title: "IP Litigation & Dispute Resolution",
      description: "Aggressive representation in IP infringement suits, passing off actions, domain name disputes, trade secret misappropriation, and IP-related arbitration proceedings.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "IP Audit & Assessment",
      description: "Comprehensive audit of your intellectual property assets including patents, trademarks, copyrights, designs, and trade secrets to identify protection gaps and opportunities.",
    },
    {
      step: "02",
      title: "Protection Strategy",
      description: "Development of a tailored IP protection strategy aligned with your business objectives, market expansion plans, and budget considerations.",
    },
    {
      step: "03",
      title: "Registration & Filing",
      description: "Expert preparation and filing of IP applications with meticulous attention to detail, ensuring the broadest possible protection for your innovations and brands.",
    },
    {
      step: "04",
      title: "Enforcement & Monitoring",
      description: "Proactive monitoring for potential infringement, sending cease and desist notices, initiating opposition proceedings, and taking legal action against violators.",
    },
    {
      step: "05",
      title: "Commercialization & Growth",
      description: "Leveraging your IP assets for business growth through licensing, franchising, technology transfer, and strategic partnerships that generate revenue streams.",
    },
  ];

  const ipTypes = [
    {
      type: "Patents",
      description: "Protection for new inventions, products, and processes that offer technical solutions to problems.",
      duration: "20 years from filing date",
      icon: <FaShieldAlt className="h-10 w-10" />,
      examples: ["Pharmaceutical compositions", "Mechanical devices", "Chemical processes", "Software algorithms", "Biotechnology inventions"],
    },
    {
      type: "Trademarks",
      description: "Protection for brand names, logos, slogans, and distinctive signs that distinguish your goods and services.",
      duration: "10 years (renewable indefinitely)",
      icon: <FaTrademark className="h-10 w-10" />,
      examples: ["Brand names & logos", "Product packaging", "Sound marks", "Color combinations", "Shape of goods"],
    },
    {
      type: "Copyrights",
      description: "Automatic protection for original literary, dramatic, musical, and artistic works.",
      duration: "Lifetime + 60 years",
      icon: <FaCopyright className="h-10 w-10" />,
      examples: ["Software code", "Literary works", "Musical compositions", "Architectural designs", "Cinematographic films"],
    },
    {
      type: "Industrial Designs",
      description: "Protection for the aesthetic and ornamental aspects of a product.",
      duration: "10 years (extendable by 5 years)",
      icon: <FaLightbulb className="h-10 w-10" />,
      examples: ["Product shapes", "Surface patterns", "GUI interfaces", "Packaging design", "Textile designs"],
    },
  ];

  const industriesServed = [
    "Pharmaceuticals & Biotechnology",
    "Software & Information Technology",
    "Electronics & Semiconductors",
    "Automotive & Engineering",
    "FMCG & Consumer Products",
    "Media & Entertainment",
    "Fashion & Luxury Goods",
    "Food & Beverage Processing",
    "Telecommunications",
    "Medical Devices & Healthcare",
    "Chemical & Petrochemical",
    "Aerospace & Defense",
    "Artificial Intelligence & ML",
    "Renewable Energy",
    "E-commerce & Digital Platforms",
    "Educational Technology",
  ];

  const ipRights = [
    {
      title: "Right to Exclude Others",
      description: "IP rights grant you the exclusive right to prevent others from using, making, selling, or importing your protected innovation without permission.",
    },
    {
      title: "Right to License & Monetize",
      description: "You can generate revenue by licensing your IP to others, creating franchise networks, or selling your IP assets outright.",
    },
    {
      title: "Right to Enforce & Sue",
      description: "IP owners have the legal right to file infringement suits, seek injunctions, claim damages, and pursue criminal remedies against violators.",
    },
    {
      title: "Right to Assign & Transfer",
      description: "IP assets can be bought, sold, transferred, or inherited like any other property, creating significant business value.",
    },
    {
      title: "Right to Use & Commercialize",
      description: "Exclusive right to commercially exploit your IP in the market, giving you competitive advantage and market differentiation.",
    },
    {
      title: "Right to Prevent Importation",
      description: "You can register with customs authorities to prevent the importation of counterfeit or infringing goods that violate your IP rights.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #D17D0F 1px, transparent 1px), radial-gradient(circle at 70% 70%, #D17D0F 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 80px 80px',
          }}
        />
        {/* IP symbols pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 text-[#D17D0F] text-6xl font-serif">®</div>
          <div className="absolute bottom-20 right-20 text-[#D17D0F] text-6xl font-serif">™</div>
          <div className="absolute top-1/3 right-1/4 text-[#D17D0F] text-5xl font-serif">©</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Practice Area
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Intellectual Property Law
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Protecting your innovations, brands, and creative works. Our IP attorneys help you secure, 
              enforce, and commercialize your intellectual property assets to drive business growth and competitive advantage.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Patent & Trademark Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Global IP Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>IP Enforcement Experts</span>
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
                Your Ideas Deserve Ironclad Protection
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  In today's knowledge economy, intellectual property is often your most valuable business asset. 
                  Whether it's a breakthrough invention, a distinctive brand, proprietary software, or creative 
                  content, your IP rights need comprehensive protection to maintain competitive advantage and 
                  prevent unauthorized use.
                </p>
                <p>
                  Our Intellectual Property practice provides end-to-end IP legal services—from initial protection 
                  strategy and registration to enforcement, litigation, and commercialization. We work with 
                  inventors, entrepreneurs, startups, SMEs, and multinational corporations across diverse 
                  industries to build and protect their IP portfolios.
                </p>
                <p>
                  With deep expertise in Indian IP laws and extensive experience with international IP systems, 
                  we help clients navigate the complex landscape of patents, trademarks, copyrights, industrial 
                  designs, trade secrets, and domain names to maximize the value of their intellectual assets.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  Protect Your IP Today
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#types"
                  className="border border-slate-300 hover:border-[#D17D0F] text-slate-700 hover:text-[#D17D0F] px-6 py-3 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide text-center"
                >
                  Types of IP Protection
                </a>
              </div>
            </div>
            <div className="relative space-y-4">
              {/* Warning Card */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaExclamationTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    Don't Lose Your IP Rights
                  </h3>
                </div>
                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 font-bold">✗</span>
                    <span>Public disclosure before patent filing can destroy patent rights globally</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 font-bold">✗</span>
                    <span>Failure to register trademarks can result in losing your brand identity</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 font-bold">✗</span>
                    <span>Inadequate trade secret protection can lead to loss of competitive advantage</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1 font-bold">✗</span>
                    <span>Delayed enforcement can weaken your IP rights and allow infringement to spread</span>
                  </p>
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
                IP Services
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Comprehensive IP Legal Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              From ideation to commercialization, we provide complete intellectual property 
              legal services to protect every aspect of your creative and innovative output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/10 group-hover:border-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-purple-600 group-hover:text-[#D17D0F] transition-colors duration-300 group-hover:scale-110 inline-block">
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

      {/* IP Types Section */}
      <section id="types" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                IP Categories
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Types of Intellectual Property We Protect
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Understanding the different forms of IP protection is crucial for building 
              a comprehensive strategy for your intellectual assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ipTypes.map((ip, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-colors duration-300">
                  <span className="text-purple-600 group-hover:text-[#D17D0F] transition-colors">
                    {ip.icon}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-[#D17D0F] transition-colors">
                  {ip.type}
                </h3>
                <p className="text-slate-600 text-sm mb-4 font-light">
                  {ip.description}
                </p>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#D17D0F] uppercase tracking-wider">
                    Duration: {ip.duration}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">Examples:</p>
                  <ul className="space-y-1">
                    {ip.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <FaCheckCircle className="h-3 w-3 text-[#D17D0F] flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Rights Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Your Rights
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Understanding Your IP Rights
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Intellectual property rights grant you powerful legal tools to protect 
              and commercialize your innovations and creative works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipRights.map((right, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#D17D0F]/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mb-4">
                  <FaShieldAlt className="h-5 w-5 text-[#D17D0F]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-[#D17D0F] transition-colors">
                  {right.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {right.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
            <FaRocket className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              IP is a Business Asset, Not Just a Legal Right
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Intellectual property can represent over 80% of a company's value. Properly protected and 
              managed IP portfolios attract investors, create revenue through licensing, and provide 
              significant competitive advantages in the marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Our Process
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              How We Protect Your IP
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              A strategic, step-by-step approach to building and protecting your intellectual 
              property portfolio for maximum business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-purple-500/10 border-2 border-purple-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-all duration-300">
                  <span className="text-2xl font-serif font-bold text-[#D17D0F] group-hover:text-white transition-colors">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Our IP expertise spans across diverse industry sectors, enabling us to provide 
              specialized protection strategies for your specific business domain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industriesServed.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-[#D17D0F]/30 hover:bg-[#D17D0F]/5 transition-all duration-300 group"
              >
                <FaChartLine className="h-5 w-5 text-[#D17D0F] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 font-medium text-sm group-hover:text-[#D17D0F] transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <FaLightbulb className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Secure Your Intellectual Property Today
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Your ideas, brands, and creative works deserve the strongest legal protection. 
              Schedule a consultation with our IP attorneys to discuss your intellectual property strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                Schedule IP Consultation
                <FaArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="border border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide inline-flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Call Our Office
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Patents Filed</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">2000+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Trademarks Registered</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">₹1000Cr+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">IP Value Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntellectualProperty;