import { FaBalanceScale, FaShieldAlt, FaGavel, FaUserShield, FaLock, FaFileAlt, FaClock, FaPhoneAlt, FaCheckCircle, FaArrowRight, FaSearch, FaHandshake, FaExclamationTriangle } from "react-icons/fa";
const CriminalDefense = () => {
  const services = [
    {
      icon: <FaUserShield className="h-8 w-8" />,
      title: "White Collar Crimes",
      description: "Expert defense against fraud, embezzlement, money laundering, insider trading, and corporate criminal charges.",
    },
    {
      icon: <FaSearch className="h-8 w-8" />,
      title: "Financial & Economic Offenses",
      description: "Comprehensive representation in cases involving tax evasion, customs violations, FEMA violations, bank fraud, and securities fraud.",
    },
    {
      icon: <FaExclamationTriangle className="h-8 w-8" />,
      title: "Violent Crime Defense",
      description: "Vigorous defense for charges of assault, battery, domestic violence, homicide, and other serious offenses.",
    },
    {
      icon: <FaLock className="h-8 w-8" />,
      title: "Cybercrime & Digital Offenses",
      description: "Specialized defense for cybercrime allegations including hacking, data theft, online fraud, identity theft, and IT Act violations.",
    },
    {
      icon: <FaBalanceScale className="h-8 w-8" />,
      title: "Narcotics & Drug Offenses",
      description: "Strategic defense for NDPS Act violations, drug possession, trafficking allegations, and related conspiracy charges.",
    },
    {
      icon: <FaGavel className="h-8 w-8" />,
      title: "Bail & Pre-Trial Representation",
      description: "Immediate and aggressive representation for bail applications, anticipatory bail, and pre-trial negotiations.",
    },
    {
      icon: <FaFileAlt className="h-8 w-8" />,
      title: "Criminal Investigation Support",
      description: "Proactive legal guidance during police investigations, search and seizure operations, and summons.",
    },
    {
      icon: <FaHandshake className="h-8 w-8" />,
      title: "Plea Bargaining & Negotiations",
      description: "Skilled negotiation with prosecution for charge reduction, plea bargaining, and alternative dispute resolution.",
    },
];

  const processSteps = [
    {
      step: "01",
      title: "Immediate Response",
      description: "Our criminal defense team is available 24/7 for emergencies. We respond immediately to arrests, raids, and urgent legal situations to protect your rights from the start.",
    },
    {
      step: "02",
      title: "Case Assessment & Strategy",
      description: "We conduct a thorough analysis of charges, evidence, and circumstances. Our team develops a comprehensive defense strategy tailored to your specific situation.",
    },
    {
      step: "03",
      title: "Investigation & Evidence",
      description: "Our legal team conducts independent investigation, gathers exculpatory evidence, identifies witnesses, and challenges prosecution evidence through legal procedures.",
    },
    {
      step: "04",
      title: "Aggressive Courtroom Defense",
      description: "Powerful representation at every court appearance, from bail hearings to trial. We challenge evidence, cross-examine witnesses, and present compelling defense arguments.",
    },
    {
      step: "05",
      title: "Appeals & Post-Conviction",
      description: "If necessary, we pursue appeals, revisions, and post-conviction remedies in higher courts to overturn wrongful convictions or reduce sentences.",
    },
  ];

  const rightsProtected = [
    {
      title: "Right to Legal Representation",
      description: "You have the right to consult and be defended by a legal practitioner of your choice from the moment of arrest.",
    },
    {
      title: "Right Against Self-Incrimination",
      description: "Article 20(3) of the Constitution protects you from being compelled to be a witness against yourself.",
    },
    {
      title: "Right to Know Grounds of Arrest",
      description: "You must be informed of the grounds of arrest and have the right to know the charges against you.",
    },
    {
      title: "Right to Bail",
      description: "We aggressively pursue bail applications, ensuring your liberty is secured at the earliest possible opportunity.",
    },
    {
      title: "Right to Speedy Trial",
      description: "Justice delayed is justice denied. We ensure your case proceeds without unnecessary adjournments.",
    },
    {
      title: "Right to Fair Investigation",
      description: "We challenge illegal search and seizure, forced confessions, and procedural violations by investigating agencies.",
    },
  ];

  const caseTypes = [
    "Murder & Culpable Homicide",
    "Attempt to Murder",
    "Dowry Death & Domestic Violence",
    "Sexual Offenses & POCSO Cases",
    "Kidnapping & Abduction",
    "Robbery & Dacoity",
    "Criminal Breach of Trust",
    "Cheating & Forgery",
    "Criminal Conspiracy",
    "Defamation",
    "Criminal Intimidation",
    "Rioting & Unlawful Assembly",
    "Arms Act Violations",
    "Prevention of Corruption Act",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #D17D0F 0px, #D17D0F 1px, transparent 1px, transparent 30px)`,
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
              Criminal Defense
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              When your freedom and future are at stake, you need an aggressive and experienced 
              defense team that will fight tirelessly to protect your rights and secure the best possible outcome.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <FaExclamationTriangle className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">24/7 Emergency Hotline</span>
                </div>
              </div>
              <a
                href="tel:+919876543999"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-2 rounded-lg font-semibold transition-all inline-flex items-center gap-2 text-sm"
              >
                <FaPhoneAlt className="h-4 w-4" />
                +91 98765 43999
              </a>
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
                Fierce Advocacy When It Matters Most
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Facing criminal charges is one of the most challenging experiences anyone can endure. The stakes are incredibly 
                  high—your freedom, reputation, career, and family's future hang in the balance. In these critical moments, 
                  you need more than just a lawyer; you need a dedicated defense team that will stand by you every step of the way.
                </p>
                <p>
                  Our Criminal Defense practice is built on a foundation of constitutional principles, procedural expertise, 
                  and unwavering commitment to our clients. We believe that every person deserves a vigorous defense regardless 
                  of the charges they face. Our team has successfully defended clients in some of the most complex and 
                  high-profile criminal cases across India.
                </p>
                <p>
                  From the moment you engage us, we launch an immediate and comprehensive defense strategy. We challenge 
                  illegal procedures, question evidence validity, protect your constitutional rights, and present compelling 
                  arguments before courts at every level—from Magistrate Courts to the Supreme Court of India.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  Get Immediate Help
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="border border-slate-300 hover:border-[#D17D0F] text-slate-700 hover:text-[#D17D0F] px-6 py-3 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide text-center"
                >
                  Our Defense Services
                </a>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold mb-6">
                  Why Choose Our Criminal Defense Team?
                </h3>
                <div className="space-y-4">
                  {[
                    "Immediate 24/7 emergency response",
                    "Experienced trial attorneys with proven track record",
                    "Deep understanding of criminal procedure and evidence law",
                    "Strategic approach tailored to each case",
                    "Strong relationships with forensic experts and investigators",
                    "Complete confidentiality and client protection",
                    "Representation across all courts in India",
                    "Track record of acquittals and favorable outcomes",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                      </div>
                      <p className="text-gray-300 text-sm">{item}</p>
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
                Defense Services
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Comprehensive Criminal Defense
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              From investigation to trial and appeal, we provide complete legal protection 
              across all categories of criminal offenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/10 group-hover:border-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-red-600 group-hover:text-[#D17D0F] transition-colors duration-300 group-hover:scale-110 inline-block">
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

      {/* Your Rights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Know Your Constitutional Rights
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Understanding your rights is the first step in protecting yourself. Our team ensures 
              these fundamental protections are upheld throughout your case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rightsProtected.map((right, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#D17D0F]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mb-4">
                  <FaShieldAlt className="h-5 w-5 text-[#D17D0F]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 group-hover:text-[#D17D0F] transition-colors">
                  {right.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {right.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center">
            <FaExclamationTriangle className="h-8 w-8 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Important: If You Are Arrested
            </h3>
            <div className="text-gray-300 max-w-2xl mx-auto space-y-2">
              <p>• Remain silent and do not make any statements without your lawyer present</p>
              <p>• Immediately demand to speak with your attorney</p>
              <p>• Do not sign any documents without legal counsel</p>
              <p>• Contact JusticeGuard's 24/7 Emergency Line: <span className="text-[#D17D0F] font-semibold">+91 98765 43999</span></p>
            </div>
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
                Our Defense Process
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              How We Defend You
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              A systematic, aggressive approach to building the strongest possible defense 
              for your case from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-red-500/10 border-2 border-red-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-all duration-300">
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

      {/* Case Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Types of Cases We Handle
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Our criminal defense expertise covers the full spectrum of offenses under the 
              Indian Penal Code and special statutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseTypes.map((caseType, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#D17D0F]/30 hover:bg-[#D17D0F]/5 transition-all duration-300 group"
              >
                <FaGavel className="h-5 w-5 text-[#D17D0F] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 font-medium text-sm group-hover:text-[#D17D0F] transition-colors">
                  {caseType}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-red-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-red-500/10 border border-red-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <FaPhoneAlt className="h-8 w-8 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Don't Face Criminal Charges Alone
            </h2>
            <p className="text-gray-400 text-lg mb-4 font-light leading-relaxed">
              Every moment counts in a criminal case. The sooner you engage legal counsel, 
              the better we can protect your rights and build your defense.
            </p>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-8">
              <p className="text-white font-semibold text-lg mb-2">24/7 Emergency Criminal Defense Hotline</p>
              <a
                href="tel:+919876543999"
                className="text-[#D17D0F] text-2xl font-bold hover:text-yellow-500 transition-colors"
              >
                +91 98765 43999
              </a>
              <p className="text-gray-400 text-sm mt-2">Available nights, weekends, and holidays for urgent matters</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                Request Free Consultation
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
                  <div className="text-3xl font-serif font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">5,000+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Cases Defended</div>
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

export default CriminalDefense;