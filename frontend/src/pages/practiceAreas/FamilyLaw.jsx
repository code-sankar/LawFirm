import {
  FaUsers,
  FaHeart,
  FaChild,
  FaHome,
  FaFileContract,
  FaHandsHelping,
  FaBalanceScale,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaUserFriends,
  FaRing,
  FaShieldAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";

const FamilyLaw = () => {
  const services = [
    {
      icon: <FaRing className="h-8 w-8" />,
      title: "Divorce & Separation",
      description:
        "Compassionate representation in contested and mutual consent divorces, legal separation, annulment, and all related proceedings. We handle complex cases involving property division and spousal support with sensitivity.",
    },
    {
      icon: <FaChild className="h-8 w-8" />,
      title: "Child Custody & Guardianship",
      description:
        "Dedicated advocacy for your children's best interests in custody disputes, visitation rights, guardianship matters, and international child custody cases under Hindu and secular laws.",
    },
    {
      icon: <FaHandHoldingHeart className="h-8 w-8" />,
      title: "Domestic Violence & Protection",
      description:
        "Immediate legal protection for victims of domestic abuse through protection orders, maintenance claims under the Protection of Women from Domestic Violence Act, and criminal proceedings.",
    },
    {
      icon: <FaHome className="h-8 w-8" />,
      title: "Matrimonial Property Disputes",
      description:
        "Expert resolution of property disputes arising from marriage, including stridhan recovery, dowry-related property claims, joint property division, and settlement negotiations.",
    },
    {
      icon: <FaFileContract className="h-8 w-8" />,
      title: "Prenuptial & Postnuptial Agreements",
      description:
        "Drafting and enforcement of prenuptial and postnuptial agreements that protect your assets and clearly define financial arrangements in marriage.",
    },
    {
      icon: <FaBalanceScale className="h-8 w-8" />,
      title: "Maintenance & Alimony",
      description:
        "Strategic representation in maintenance and alimony proceedings under Section 125 CrPC, Hindu Marriage Act, and other personal laws to secure fair financial support.",
    },
    {
      icon: <FaHandsHelping className="h-8 w-8" />,
      title: "Mediation & Alternative Dispute Resolution",
      description:
        "Skilled mediation services to resolve family disputes amicably outside of court, preserving relationships and reducing emotional and financial stress on families.",
    },
    {
      icon: <FaUserFriends className="h-8 w-8" />,
      title: "Adoption & Surrogacy",
      description:
        "Complete legal guidance through the adoption process under CARA guidelines and surrogacy arrangements under the Surrogacy (Regulation) Act, ensuring compliance with all legal requirements.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Confidential Consultation",
      description:
        "We begin with a private, empathetic consultation to understand your situation, concerns, and goals. Complete confidentiality is maintained throughout.",
    },
    {
      step: "02",
      title: "Legal Assessment & Strategy",
      description:
        "Our team analyzes your case, explains your legal rights and options, and develops a personalized strategy aligned with your family's best interests.",
    },
    {
      step: "03",
      title: "Negotiation & Mediation",
      description:
        "We prioritize amicable resolutions through negotiation and mediation whenever possible, saving you time, money, and emotional distress.",
    },
    {
      step: "04",
      title: "Court Representation",
      description:
        "When litigation is necessary, we provide strong courtroom advocacy while maintaining the sensitivity that family matters require.",
    },
    {
      step: "05",
      title: "Post-Resolution Support",
      description:
        "Our commitment continues after resolution with support for order enforcement, modifications, and any future family law needs.",
    },
  ];

  const familyRights = [
    {
      title: "Right to Maintenance",
      description:
        "Spouses, children, and dependent parents have legal rights to financial support. We ensure these rights are protected and enforced.",
    },
    {
      title: "Right to Matrimonial Home",
      description:
        "Understanding your right to reside in the shared household and protecting against unlawful dispossession or eviction.",
    },
    {
      title: "Right to Custody & Access",
      description:
        "Both parents have rights regarding their children. We advocate for arrangements that serve the child's welfare.",
    },
    {
      title: "Right Against Domestic Violence",
      description:
        "Legal protections exist for victims of physical, emotional, and economic abuse. We help you access these protections immediately.",
    },
    {
      title: "Right to Fair Settlement",
      description:
        "Ensuring equitable division of marital assets and fair financial settlements through negotiation or court proceedings.",
    },
    {
      title: "Right to Dignity & Privacy",
      description:
        "Family law matters are sensitive. We ensure your dignity is maintained and privacy protected throughout legal proceedings.",
    },
  ];

  const caseTypes = [
    "Contested Divorce",
    "Mutual Consent Divorce",
    "Judicial Separation",
    "Restitution of Conjugal Rights",
    "Child Custody & Visitation",
    "Guardianship Petitions",
    "Domestic Violence Complaints",
    "Maintenance Applications (CrPC 125)",
    "Dowry Harassment Cases",
    "Stridhan Recovery",
    "Adoption & Foster Care",
    "Succession Disputes",
    "Inheritance Claims",
    "HUF Property Disputes",
    "Prenuptial Agreements",
    "Marriage Registration",
  ];

  const whyChooseUs = [
    {
      title: "Compassionate Approach",
      description:
        "We understand that family matters are deeply personal and emotionally challenging. Our team provides supportive, empathetic legal counsel throughout your case.",
    },
    {
      title: "Focus on Amicable Resolution",
      description:
        "We prioritize mediation and negotiated settlements to minimize conflict and preserve family relationships, especially when children are involved.",
    },
    {
      title: "Experienced Family Law Specialists",
      description:
        "Our attorneys have extensive experience handling complex family law matters across different personal laws and jurisdictions.",
    },
    {
      title: "Complete Confidentiality",
      description:
        "We maintain the highest standards of confidentiality, protecting your personal and family information with utmost care.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17D0F]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D17D0F 1px, transparent 1px), radial-gradient(circle at 75% 75%, #D17D0F 1px, transparent 1px)`,
            backgroundSize: "40px 40px, 60px 60px",
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
              Family Law
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Compassionate legal guidance for life's most personal matters. We
              help families navigate challenging transitions with dignity,
              protecting what matters most—your loved ones and your future.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Confidential Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Child-Centered Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#D17D0F]" />
                <span>Amicable Resolutions First</span>
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
                Guiding You Through Family Transitions with Care
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Family law matters are among the most emotionally challenging
                  legal issues anyone can face. Whether you're going through a
                  divorce, fighting for custody of your children, or seeking
                  protection from domestic violence, the decisions made during
                  these times will affect your life and your loved ones for
                  years to come.
                </p>
                <p>
                  Our Family Law practice is built on a foundation of
                  compassion, discretion, and legal excellence. We understand
                  that behind every case file is a real family with real
                  emotions, concerns, and hopes for the future. Our approach
                  combines skilled legal advocacy with genuine empathy, ensuring
                  you receive both strong representation and the emotional
                  support you need.
                </p>
                <p>
                  We represent clients across all family law matters under
                  various personal laws including Hindu Law, Muslim Law,
                  Christian Law, Parsi Law, and the Special Marriage Act. Our
                  goal is always to achieve the best possible outcome while
                  minimizing conflict and protecting your family's well-being.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  Schedule Confidential Consultation
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919876543210"
                  className="border border-slate-300 hover:border-[#D17D0F] text-slate-700 hover:text-[#D17D0F] px-6 py-3 rounded-lg font-semibold transition-all text-sm uppercase tracking-wide text-center inline-flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt className="h-4 w-4" />
                  Speak With Us
                </a>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="bg-gradient-to-br from-slate-50 to-rose-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">
                  Our Approach to Family Law
                </h3>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center">
                          {index === 0 && (
                            <FaHeart className="h-5 w-5 text-[#D17D0F]" />
                          )}
                          {index === 1 && (
                            <FaHandsHelping className="h-5 w-5 text-[#D17D0F]" />
                          )}
                          {index === 2 && (
                            <FaUsers className="h-5 w-5 text-[#D17D0F]" />
                          )}
                          {index === 3 && (
                            <FaShieldAlt className="h-5 w-5 text-[#D17D0F]" />
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
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
                Our Services
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Comprehensive Family Law Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Complete legal support for every aspect of family life, from
              marriage and children to separation and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center mb-6 group-hover:bg-[#D17D0F]/10 group-hover:border-[#D17D0F]/20 transition-colors duration-300">
                  <span className="text-rose-500 group-hover:text-[#D17D0F] transition-colors duration-300 group-hover:scale-110 inline-block">
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
              Understanding Your Family Law Rights
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Knowledge is power. Understanding your legal rights is the first
              step toward protecting yourself and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyRights.map((right, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#D17D0F]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mb-4">
                  <FaBalanceScale className="h-5 w-5 text-[#D17D0F]" />
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

          {/* Important Note */}
          <div className="mt-12 bg-rose-50 border border-rose-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <FaHeart className="h-5 w-5 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  We're Here to Help, Not to Judge
                </h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Family matters are deeply personal. Our team provides a safe,
                  non-judgmental space where you can openly discuss your
                  concerns. Whether you're considering divorce, fighting for
                  custody, or seeking protection, we're here to listen and guide
                  you toward the best path forward for you and your family.
                </p>
              </div>
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
                Our Process
              </span>
              <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              How We Handle Your Family Law Matter
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              A thoughtful, step-by-step approach designed to protect your
              interests and minimize stress for you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-rose-500/10 border-2 border-rose-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D17D0F]/20 group-hover:border-[#D17D0F] transition-all duration-300">
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
              Family Law Matters We Handle
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Comprehensive representation across all aspects of family law
              under various personal laws and statutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseTypes.map((caseType, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#D17D0F]/30 hover:bg-[#D17D0F]/5 transition-all duration-300 group"
              >
                <FaUsers className="h-5 w-5 text-[#D17D0F] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 font-medium text-sm group-hover:text-[#D17D0F] transition-colors">
                  {caseType}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-rose-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <FaHandHoldingHeart className="h-8 w-8 text-rose-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Let Us Help You Move Forward
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Take the first step toward resolving your family law matter.
              Schedule a completely confidential consultation to discuss your
              situation and explore your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                Request Consultation
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
                  <div className="text-3xl font-serif font-bold text-white mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    Families Helped
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">
                    25+
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyLaw;
