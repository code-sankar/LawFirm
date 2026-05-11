import { FaLaptopCode, FaShieldAlt, FaCopyright, FaTrademark, FaFileContract, FaGlobe, FaLock, FaRobot, FaPhoneAlt, FaCheckCircle, FaArrowRight, FaCloud, FaDatabase, FaMobileAlt, FaSearch, FaHandshake, FaBalanceScale } from "react-icons/fa";

const TechLaw = () => {
  const services = [
    {
      icon: <FaLaptopCode className="h-8 w-8" />,
      title: "Software & Technology Contracts",
      description: "Expert drafting and negotiation of software development agreements, SaaS contracts, EULAs, API agreements, source code escrow, and technology licensing deals.",
    },
    {
      icon: <FaCopyright className="h-8 w-8" />,
      title: "Intellectual Property Protection",
      description: "Comprehensive IP strategy including patent filing, copyright registration, trademark protection, and trade secret management for technology companies.",
    },
    {
      icon: <FaCloud className="h-8 w-8" />,
      title: "Cloud Computing & SaaS",
      description: "Legal frameworks for cloud service agreements, data hosting arrangements, service level agreements, and multi-tenant platform compliance.",
    },
    {
      icon: <FaDatabase className="h-8 w-8" />,
      title: "Data Privacy & Protection",
      description: "Complete compliance guidance under the Digital Personal Data Protection Act, GDPR, and global privacy regulations including data processing agreements and privacy policies.",
    },
    {
      icon: <FaRobot className="h-8 w-8" />,
      title: "AI & Emerging Technologies",
      description: "Forward-thinking legal counsel on artificial intelligence, machine learning, blockchain, IoT, and autonomous systems including liability and ethical frameworks.",
    },
    {
      icon: <FaLock className="h-8 w-8" />,
      title: "Cybersecurity Law",
      description: "Legal compliance with cybersecurity regulations, incident response planning, data breach notification requirements, and cybercrime defense.",
    },
    {
      icon: <FaGlobe className="h-8 w-8" />,
      title: "E-Commerce & Digital Business",
      description: "Legal setup for online businesses including terms of service, marketplace agreements, payment gateway compliance, and consumer protection under IT Act.",
    },
    {
      icon: <FaMobileAlt className="h-8 w-8" />,
      title: "FinTech & Digital Payments",
      description: "Regulatory compliance for fintech platforms, payment aggregator licensing, digital lending guidelines, cryptocurrency advisory, and RBI regulatory framework.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Technology Assessment",
      description: "We begin by understanding your technology stack, business model, data flows, and intellectual property assets to identify legal requirements and risks.",
    },
    {
      step: "02",
      title: "IP Audit & Strategy",
      description: "Comprehensive audit of your intellectual property portfolio and development of a protection strategy aligned with your business goals and market expansion plans.",
    },
    {
      step: "03",
      title: "Contract & Policy Framework",
      description: "Drafting and implementing essential legal documentation including technology contracts, privacy policies, terms of service, and compliance frameworks.",
    },
    {
      step: "04",
      title: "Regulatory Compliance",
      description: "Ensuring compliance with applicable technology laws including IT Act, data protection regulations, sector-specific guidelines, and international standards.",
    },
    {
      step: "05",
      title: "Ongoing Advisory & Protection",
      description: "Continuous legal support for new product launches, regulatory changes, IP enforcement, technology disputes, and evolving compliance requirements.",
    },
  ];

  const ipServices = [
    {
      title: "Patent Protection",
      description: "Patent search, drafting, filing, and prosecution for software, hardware, and process innovations.",
      icon: <FaShieldAlt className="h-8 w-8" />,
    },
    {
      title: "Trademark Registration",
      description: "Brand protection through trademark search, registration, opposition, and enforcement across jurisdictions.",
      icon: <FaTrademark className="h-8 w-8" />,
    },
    {
      title: "Copyright Protection",
      description: "Copyright registration for software code, creative works, databases, and digital content.",
      icon: <FaCopyright className="h-8 w-8" />,
    },
    {
      title: "Trade Secret Protection",
      description: "Legal frameworks for protecting confidential information, algorithms, and proprietary technology.",
      icon: <FaLock className="h-8 w-8" />,
    },
  ];

  const complianceAreas = [
    "Information Technology Act, 2000",
    "Digital Personal Data Protection Act, 2023",
    "IT (Intermediary Guidelines) Rules",
    "IT (Reasonable Security Practices) Rules",
    "Certifying Authorities Rules",
    "Cyber Crime Reporting Requirements",
    "Sector-Specific Tech Regulations",
    "Data Localization Requirements",
    "Cross-Border Data Transfer Rules",
    "Cloud Service Provider Guidelines",
    "Payment Aggregator Guidelines (RBI)",
    "Digital Lending Guidelines (RBI)",
    "IRDAI InsurTech Guidelines",
    "SEBI FinTech Regulations",
    " Telemedicine Practice Guidelines",
  ];

  const techStartupServices = [
    {
      stage: "Ideation & Formation",
      services: [
        "IP ownership agreements with founders",
        "Technology assignment from developers",
        "NDA for pitch discussions",
        "Regulatory feasibility assessment",
      ],
    },
    {
      stage: "Product Development",
      services: [
        "Software development agreements",
        "Open source license compliance",
        "API terms and documentation",
        "Beta testing agreements",
      ],
    },
    {
      stage: "Launch & Growth",
      services: [
        "Terms of service and privacy policy",
        "Payment gateway agreements",
        "Data processing agreements",
        "SaaS subscription agreements",
      ],
    },
    {
      stage: "Scale & Exit",
      services: [
        "Technology due diligence for funding",
        "IP portfolio valuation",
        "Technology transfer agreements",
        "M&A transaction support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #D17D0F 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Binary pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-10 left-10 text-[#D17D0F] text-xs font-mono">01001010 01000111</div>
          <div className="absolute bottom-20 right-20 text-[#D17D0F] text-xs font-mono">01010100 01000101 01000011 01001000</div>
          <div className="absolute top-1/2 right-10 text-[#D17D0F] text-xs font-mono">01101100 01100001 01110111</div>
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
              Technology & IP Law
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Strategic legal counsel for the digital age. We help technology companies, startups, 
              and enterprises protect their innovations, navigate complex regulations, and scale with confidence.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Software & SaaS Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>IP Protection Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Data Privacy Compliance</span>
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
                Legal Expertise for the Digital Economy
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  In today's hyper-connected world, technology companies face a unique set of legal challenges 
                  that traditional law firms often struggle to address. From protecting intellectual property 
                  and navigating data privacy regulations to structuring complex technology transactions, 
                  you need legal counsel that understands both the law and the technology.
                </p>
                <p>
                  Our Technology & IP Law practice bridges the gap between legal expertise and technical 
                  understanding. We work with software companies, SaaS platforms, fintech startups, AI 
                  ventures, e-commerce businesses, and established technology enterprises to provide 
                  practical, business-focused legal solutions.
                </p>
                <p>
                  Whether you're launching a new app, negotiating enterprise software deals, responding 
                  to a data breach, or preparing for acquisition, our team provides the specialized 
                  legal support you need to innovate with confidence and scale without legal friction.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  Protect Your Technology
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="border border-slate-300 hover:border-[#D17D0F] text-slate-700 hover:text-[#D17D0F] px-6 py-3 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide text-center"
                >
                  Our Tech Law Services
                </a>
              </div>
            </div>
            <div className="relative space-y-4">
              {/* IP Services Card */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">
                  Intellectual Property Services
                </h3>
                <div className="space-y-6">
                  {ipServices.map((ip, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center">
                          <span className="text-[#D17D0F]">{ip.icon}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{ip.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{ip.description}</p>
                      </div>
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
                Tech Law Expertise
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Comprehensive Technology Law Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              From startup incorporation to enterprise-scale technology transactions, 
              we provide complete legal coverage for the technology sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/10 group-hover:border-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-blue-600 group-hover:text-[#D17D0F] transition-colors duration-300 group-hover:scale-110 inline-block">
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

      {/* Startup Lifecycle Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                For Startups
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Legal Support Through Every Stage
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              We partner with technology startups from day one, providing the legal foundation 
              needed to build, launch, and scale successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStartupServices.map((stage, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-colors duration-300">
                  <span className="text-lg font-bold text-blue-600 group-hover:text-[#D17D0F] transition-colors">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 group-hover:text-[#D17D0F] transition-colors">
                  {stage.stage}
                </h3>
                <ul className="space-y-3">
                  {stage.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <FaCheckCircle className="h-4 w-4 text-[#D17D0F] flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Regulatory Compliance
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Technology Laws & Regulations We Navigate
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              The technology regulatory landscape is complex and evolving. We help you stay 
              compliant with Indian and international technology laws and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#D17D0F]/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <FaBalanceScale className="h-5 w-5 text-[#D17D0F] flex-shrink-0" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <FaDatabase className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Data Privacy Compliance is Now Mandatory
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              The Digital Personal Data Protection Act, 2023 requires all businesses handling personal 
              data to implement comprehensive privacy compliance programs. Non-compliance can result in 
              penalties up to ₹250 Crore. Let us help you achieve and maintain compliance.
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
                Our Approach
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              How We Protect Your Technology
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              A strategic approach to technology law that aligns legal protection 
              with your business objectives and innovation roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-blue-500/10 border-2 border-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-all duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <FaLaptopCode className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Build Your Technology on a Solid Legal Foundation
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Don't let legal gaps slow down your innovation. Partner with our technology law 
              experts to protect your IP, ensure compliance, and focus on what you do best—building great technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                Schedule Tech Law Consultation
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
                  <div className="text-3xl font-serif font-bold text-white mb-1">200+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Tech Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">IP Registrations</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Compliance Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechLaw;