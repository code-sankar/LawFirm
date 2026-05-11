import { FaGavel, FaBalanceScale, FaBuilding, FaFileContract, FaLandmark, FaUserTie, FaChartBar, FaPhoneAlt, FaCheckCircle, FaArrowRight, FaScroll, FaClipboardList, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

const Litigation = () => {
  const services = [
    {
      icon: <FaLandmark className="h-8 w-8" />,
      title: "Civil Litigation",
      description: "Comprehensive representation in civil disputes including breach of contract, property disputes, tort claims, recovery suits, injunctions, and specific performance matters across all civil courts.",
    },
    {
      icon: <FaBuilding className="h-8 w-8" />,
      title: "Commercial & Business Litigation",
      description: "Strategic handling of complex business disputes including shareholder conflicts, partnership dissolution, breach of fiduciary duty, and commercial contract enforcement.",
    },
    {
      icon: <FaFileContract className="h-8 w-8" />,
      title: "Contract Disputes & Arbitration",
      description: "Expert representation in contractual disputes, arbitration proceedings, and enforcement of arbitral awards under the Arbitration and Conciliation Act.",
    },
    {
      icon: <FaUserTie className="h-8 w-8" />,
      title: "Employment & Labor Litigation",
      description: "Robust representation in employment disputes, wrongful termination, discrimination claims, industrial disputes, and labor court proceedings.",
    },
    {
      icon: <FaChartBar className="h-8 w-8" />,
      title: "Insolvency & Bankruptcy (IBC)",
      description: "Specialized litigation before NCLT and NCLAT in corporate insolvency resolution, liquidation proceedings, and creditor rights enforcement under the IBC.",
    },
    {
      icon: <FaScroll className="h-8 w-8" />,
      title: "Constitutional & Writ Litigation",
      description: "Powerful representation in constitutional matters, writ petitions before High Courts and Supreme Court involving fundamental rights and administrative law.",
    },
    {
      icon: <FaClipboardList className="h-8 w-8" />,
      title: "Regulatory & Administrative Litigation",
      description: "Experienced advocacy in regulatory proceedings before SEBI, RBI, CCI, TRAI, and other regulatory bodies, including appeals to appellate tribunals.",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8" />,
      title: "Execution & Recovery Proceedings",
      description: "Aggressive pursuit of decree execution, attachment proceedings, and asset recovery strategies to ensure successful enforcement of favorable judgments.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Case Evaluation & Strategy",
      description: "Thorough assessment of the legal merits, evidence, and risks. We develop a comprehensive litigation strategy aligned with your objectives before initiating or responding to proceedings.",
    },
    {
      step: "02",
      title: "Pre-Litigation & Notice",
      description: "Strategic pre-litigation steps including legal notices, demand letters, and settlement negotiations to resolve disputes efficiently before formal proceedings commence.",
    },
    {
      step: "03",
      title: "Pleadings & Documentation",
      description: "Meticulous drafting of plaints, written statements, applications, affidavits, and all legal documents with precise legal drafting that frames your case strongly.",
    },
    {
      step: "04",
      title: "Interim Relief & Hearings",
      description: "Aggressive pursuit of interim relief including injunctions, attachment orders, and stay orders. Regular court appearances with thorough preparation for every hearing.",
    },
    {
      step: "05",
      title: "Trial & Evidence",
      description: "Skilled trial advocacy including examination and cross-examination of witnesses, evidentiary arguments, and presentation of expert testimony to build a compelling case.",
    },
    {
      step: "06",
      title: "Appeals & Review",
      description: "Comprehensive appellate representation before higher courts including review petitions, curative petitions, and SLPs before the Supreme Court when necessary.",
    },
  ];

  const courtCoverage = [
    {
      court: "Supreme Court of India",
      location: "New Delhi",
    },
    {
      court: "High Courts",
      location: "Multiple Jurisdictions",
    },
    {
      court: "National Company Law Tribunal (NCLT)",
      location: "All Benches",
    },
    {
      court: "National Company Law Appellate Tribunal (NCLAT)",
      location: "New Delhi",
    },
    {
      court: "Debt Recovery Tribunal (DRT)",
      location: "All Locations",
    },
    {
      court: "Arbitration Tribunals",
      location: "Domestic & International",
    },
    {
      court: "District & Sessions Courts",
      location: "Delhi NCR & Major Cities",
    },
    {
      court: "Consumer Forums",
      location: "District, State & National",
    },
  ];

  const litigationAreas = [
    "Breach of Contract",
    "Specific Performance Suits",
    "Property & Title Disputes",
    "Landlord-Tenant Disputes",
    "Money Recovery Suits",
    "Injunction Applications",
    "Partnership Disputes",
    "Shareholder Litigation",
    "Insurance Claims Disputes",
    "Construction Arbitration",
    "Infrastructure Disputes",
    "Defamation Claims",
    "Malpractice & Negligence",
    "Trademark & Patent Infringement",
    "Environmental Litigation",
    "Banking & Finance Disputes",
    "Real Estate Litigation (RERA)",
    "Tax Appeals & Tribunal Work",
  ];

  const whyChooseUs = [
    {
      icon: <FaGavel className="h-6 w-6" />,
      title: "Courtroom Excellence",
      description: "Our litigators have extensive courtroom experience with a proven record of success in complex trials and appeals across all levels of the judiciary.",
    },
    {
      icon: <FaBalanceScale className="h-6 w-6" />,
      title: "Strategic Thinking",
      description: "We don't just litigate—we strategize. Every case is approached with a clear plan, anticipating opposing arguments and preparing counter-strategies.",
    },
    {
      icon: <FaClipboardList className="h-6 w-6" />,
      title: "Thorough Preparation",
      description: "Our team leaves no stone unturned. We conduct exhaustive legal research, evidence gathering, and witness preparation to build the strongest possible case.",
    },
    {
      icon: <FaUserTie className="h-6 w-6" />,
      title: "Senior & Junior Counsel Network",
      description: "We collaborate with the finest senior advocates and subject matter experts when required to ensure you have the best possible representation.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(45deg, #D17D0F 1px, transparent 1px), linear-gradient(-45deg, #D17D0F 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
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
              Litigation & Dispute Resolution
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Powerful courtroom advocacy backed by meticulous preparation and strategic insight. 
              When disputes arise, our litigators stand ready to protect your interests at every level of the judicial system.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Supreme Court to District Courts</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>5000+ Cases Handled</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>NCLT, DRT, Consumer Forums</span>
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
                Your Voice in the Courtroom
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Litigation is more than just arguing in court—it's about crafting a compelling narrative, 
                  mastering the facts, understanding the law, and strategically positioning your case for success. 
                  Whether you're pursuing a claim or defending against one, the quality of your legal representation 
                  can make all the difference in the outcome.
                </p>
                <p>
                  Our Litigation practice brings together a formidable team of trial attorneys with deep experience 
                  across civil, commercial, constitutional, and regulatory litigation. We have successfully represented 
                  clients in some of the most complex and high-stakes disputes before every major court and tribunal in India.
                </p>
                <p>
                  From the Supreme Court of India to district courts, from NCLT to arbitration tribunals, our team 
                  has the experience, resources, and strategic acumen to navigate any legal forum. We pride ourselves 
                  on thorough preparation, persuasive advocacy, and a relentless commitment to achieving favorable outcomes.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  Discuss Your Case
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="border border-slate-300 hover:border-[#D17D0F] text-slate-700 hover:text-[#D17D0F] px-6 py-3 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide text-center"
                >
                  Our Litigation Services
                </a>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">
                  Why Our Litigation Team?
                </h3>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center">
                          <span className="text-[#D17D0F]">{item.icon}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
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
                Litigation Expertise
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Comprehensive Litigation Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              From civil suits to constitutional matters, our litigation practice covers 
              the full spectrum of dispute resolution before all courts and tribunals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/10 group-hover:border-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-amber-600 group-hover:text-[#D17D0F] transition-colors duration-300 group-hover:scale-110 inline-block">
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

      {/* Court Coverage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
              <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
                Our Reach
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Courts & Tribunals We Practice Before
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Our litigators have right of audience before every major court, tribunal, 
              and dispute resolution forum across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courtCoverage.map((court, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                  <FaLandmark className="h-6 w-6 text-[#D17D0F]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 group-hover:text-[#D17D0F] transition-colors">
                  {court.court}
                </h3>
                <p className="text-sm text-slate-500">{court.location}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center">
            <FaExclamationTriangle className="h-8 w-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Facing a Legal Dispute? Time is Critical.
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Legal deadlines and limitation periods can bar your claims forever if missed. 
              Consult our litigation team immediately to protect your rights and preserve your legal remedies.
            </p>
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
                Our Litigation Process
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              How We Handle Your Case
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              A structured, strategic approach to litigation that ensures no detail is overlooked 
              and every opportunity is seized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-all duration-300">
                  <span className="text-2xl font-serif font-bold text-[#D17D0F] group-hover:text-white transition-colors">
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

      {/* Litigation Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Areas of Litigation Practice
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Our litigation expertise spans diverse areas of law, enabling us to handle 
              virtually any type of dispute you may face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {litigationAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#D17D0F]/30 hover:bg-[#D17D0F]/5 transition-all duration-300 group"
              >
                <FaGavel className="h-5 w-5 text-[#D17D0F] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 font-medium text-sm group-hover:text-[#D17D0F] transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <FaGavel className="h-8 w-8 text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Fight for Your Rights
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Whether you need to initiate legal action or are defending against a claim, 
              our litigation team is prepared to advocate vigorously on your behalf. 
              Schedule a consultation to discuss your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                Schedule Case Evaluation
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
                  <div className="text-3xl font-serif font-bold text-white mb-1">5000+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Cases Handled</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">$500M+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Value of Disputes</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Favorable Outcomes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Litigation;