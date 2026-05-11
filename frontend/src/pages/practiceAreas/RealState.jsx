import { FaHome, FaBuilding, FaCity, FaFileContract, FaSearch, FaHandshake, FaBalanceScale, FaPhoneAlt, FaCheckCircle, FaArrowRight, FaKey, FaHardHat, FaTree, FaMoneyBillWave, FaClipboardList, FaShieldAlt } from "react-icons/fa";

const RealEstate = () => {
  const services = [
    {
      icon: <FaHome className="h-8 w-8" />,
      title: "Property Due Diligence",
      description: "Comprehensive title verification, encumbrance checks, and legal scrutiny of property documents to ensure clear and marketable title before any transaction.",
    },
    {
      icon: <FaHandshake className="h-8 w-8" />,
      title: "Sale & Purchase Transactions",
      description: "End-to-end legal assistance for property sale and purchase, including drafting agreements, sale deeds, and managing the complete registration process.",
    },
    {
      icon: <FaBuilding className="h-8 w-8" />,
      title: "Commercial Real Estate",
      description: "Legal support for commercial property transactions including office spaces, retail complexes, IT parks, warehouses, and industrial properties with regulatory compliance.",
    },
    {
      icon: <FaFileContract className="h-8 w-8" />,
      title: "Lease & Tenancy Agreements",
      description: "Drafting and negotiation of commercial and residential lease agreements, leave and license agreements, and representation in tenancy disputes.",
    },
    {
      icon: <FaHardHat className="h-8 w-8" />,
      title: "Real Estate Development & RERA",
      description: "Complete legal guidance for real estate developers including RERA registration, compliance, project documentation, and dispute resolution under RERA.",
    },
    {
      icon: <FaCity className="h-8 w-8" />,
      title: "Land Acquisition & Development",
      description: "Expertise in land acquisition, land pooling, development agreements, joint ventures, and conversion of agricultural land for development purposes.",
    },
    {
      icon: <FaBalanceScale className="h-8 w-8" />,
      title: "Property Disputes & Litigation",
      description: "Vigorous representation in property disputes including title suits, partition suits, specific performance, eviction proceedings, and succession matters.",
    },
    {
      icon: <FaMoneyBillWave className="h-8 w-8" />,
      title: "Real Estate Finance & Investment",
      description: "Legal support for property financing, mortgage documentation, REIT investments, and structuring real estate investment transactions.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Property Assessment",
      description: "We begin with a detailed review of property documents, understanding your objectives, and identifying potential legal issues that need attention.",
    },
    {
      step: "02",
      title: "Title Search & Due Diligence",
      description: "Our team conducts exhaustive title searches at the Sub-Registrar office, examines the chain of title, and verifies encumbrance status for 30+ years.",
    },
    {
      step: "03",
      title: "Documentation & Compliance",
      description: "We draft all necessary legal documents including agreements, sale deeds, and ensure complete compliance with stamp duty and registration requirements.",
    },
    {
      step: "04",
      title: "Negotiation & Closing",
      description: "Our attorneys represent your interests in negotiations, finalize terms, and ensure smooth execution and registration of the transaction.",
    },
    {
      step: "05",
      title: "Post-Transaction Support",
      description: "We assist with mutation, property tax updates, possession, and any post-closing issues that may arise to ensure complete peace of mind.",
    },
  ];

  const propertyTypes = [
    {
      type: "Residential",
      properties: ["Apartments & Flats", "Independent Houses & Villas", "Plotted Developments", "Builder Floors", "Group Housing Societies", "Affordable Housing"],
      icon: <FaHome className="h-10 w-10" />,
    },
    {
      type: "Commercial",
      properties: ["Office Spaces", "Retail Shops & Showrooms", "Shopping Malls", "IT Parks & SEZs", "Warehouses & Godowns", "Hotel & Hospitality"],
      icon: <FaBuilding className="h-10 w-10" />,
    },
    {
      type: "Industrial & Agricultural",
      properties: ["Industrial Plots & Sheds", "Manufacturing Facilities", "Agricultural Land", "Farm Houses", "Plantations & Estates", "Land Parcels"],
      icon: <FaCity className="h-10 w-10" />,
    },
  ];

  const dueDiligenceChecks = [
    "Chain of Title Verification (30+ Years)",
    "Encumbrance Certificate Check",
    "Revenue Records & Khata Verification",
    "Land Use & Zoning Compliance",
    "Building Plan Approval Status",
    "RERA Registration Verification",
    "NOC from Statutory Authorities",
    "Property Tax Payment Status",
    "Litigation Search & Court Orders",
    "Mutation & Ownership Records",
    "Development Agreement Verification",
    "Joint Development & POA Scrutiny",
    "Land Ceiling Act Compliance",
    "Environmental Clearances",
    "Subdivision & Layout Approvals",
    "Society Share Certificate Transfer",
  ];

  const reraServices = [
    {
      title: "Builder/Developer Registration",
      description: "Complete assistance with RERA registration for new and ongoing projects, ensuring full compliance with all documentation and disclosure requirements.",
    },
    {
      title: "Project Documentation",
      description: "Drafting and reviewing all RERA-mandated documents including agreements for sale, allotment letters, and project declarations.",
    },
    {
      title: "Buyer Representation",
      description: "Protecting homebuyer rights including delayed possession claims, defect liability, and refund claims before RERA authorities.",
    },
    {
      title: "Complaint Handling",
      description: "Filing and defending complaints before RERA authorities and the Appellate Tribunal for project-related disputes.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#D17D0F 1px, transparent 1px), linear-gradient(to right, #D17D0F 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Practice Area
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Real Estate Law
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Secure your most valuable investments with expert legal guidance. From property 
              purchases to complex development projects, we ensure every transaction is legally sound and protected.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Title Due Diligence Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>RERA Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>1000+ Transactions Closed</span>
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
                Protecting Your Property Investments
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Real estate is often the largest investment individuals and businesses make in their lifetime. 
                  Yet, property transactions in India involve complex legal frameworks, multiple regulatory 
                  authorities, and significant risks if not handled properly. A single oversight in title 
                  verification or documentation can lead to years of litigation and financial loss.
                </p>
                <p>
                  Our Real Estate Law practice is dedicated to protecting your property interests at every stage—from 
                  initial due diligence and transaction structuring to documentation, registration, and dispute resolution. 
                  We combine deep knowledge of property laws with practical experience across residential, commercial, 
                  industrial, and agricultural real estate.
                </p>
                <p>
                  Whether you're a first-time homebuyer, a seasoned investor, a real estate developer, or a corporate 
                  entity managing a property portfolio, our team provides the comprehensive legal support you need 
                  to make informed decisions and secure transactions.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  Get Property Legal Advice
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="border border-slate-300 hover:border-[#D17D0F] text-slate-700 hover:text-[#D17D0F] px-6 py-3 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide text-center"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative space-y-4">
              {/* Important Warning Card */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FaShieldAlt className="h-5 w-5 text-red-500" />
                  Never Buy Property Without Legal Due Diligence
                </h3>
                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Incomplete or forged title documents can void your ownership</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Undisclosed encumbrances can lead to financial liability</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Zoning violations can result in demolition orders</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Pending litigation can trap your investment for years</span>
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <p className="text-slate-900 font-semibold text-sm">
                    Our due diligence process identifies these risks before you invest.
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
                Our Services
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Complete Real Estate Legal Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              From property search to successful registration and beyond, we provide 
              comprehensive legal support for all real estate matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/10 group-hover:border-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-green-600 group-hover:text-[#D17D0F] transition-colors duration-300 group-hover:scale-110 inline-block">
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

      {/* Property Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Property Types
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Properties We Handle
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Our expertise spans across all categories of real estate, ensuring specialized 
              legal support for every type of property transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((category, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-[#D17D0F]">{category.icon}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">
                  {category.type}
                </h3>
                <ul className="space-y-2">
                  {category.properties.map((prop, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <FaCheckCircle className="h-4 w-4 text-[#D17D0F] flex-shrink-0" />
                      <span className="text-sm">{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Due Diligence
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our Comprehensive Title Verification Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              We conduct exhaustive property due diligence covering all critical aspects 
              to ensure your investment is completely secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dueDiligenceChecks.map((check, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#D17D0F]/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <FaSearch className="h-5 w-5 text-[#D17D0F] flex-shrink-0" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {check}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RERA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              RERA Compliance & Dispute Resolution
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Expert legal support under the Real Estate (Regulation and Development) Act 
              for both developers and homebuyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reraServices.map((rera, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#D17D0F]/30 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D17D0F]/10 group-hover:border-[#D17D0F]/20 transition-colors duration-300">
                  <FaBuilding className="h-6 w-6 text-green-600 group-hover:text-[#D17D0F] transition-colors" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 group-hover:text-[#D17D0F] transition-colors">
                  {rera.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {rera.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
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
              How We Handle Your Property Transaction
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              A systematic approach to ensure every property transaction is legally sound 
              and seamlessly executed from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-all duration-300">
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-green-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-green-500/10 border border-green-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <FaKey className="h-8 w-8 text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Secure Your Property Investment Today
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Don't risk your investment with incomplete legal verification. Let our experienced 
              real estate attorneys guide you through every step of your property transaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                Get Property Legal Check
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
                  <div className="text-3xl font-serif font-bold text-white mb-1">1000+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Transactions Closed</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">₹5000Cr+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Property Value Handled</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">Zero</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Title Defect Cases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;