import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding, FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="h-5 w-5" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Available Mon-Fri 9AM-6PM",
    },
    {
      icon: <FaEnvelope className="h-5 w-5" />,
      title: "Email",
      details: ["info@justiceguard.com", "support@justiceguard.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5" />,
      title: "Office Address",
      details: ["Supreme Court Complex", "New Delhi - 110001"],
      description: "View on Google Maps",
    },
    {
      icon: <FaClock className="h-5 w-5" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
      description: "Sunday: Closed",
    },
  ];

  const practiceAreas = [
    "Corporate Law",
    "Family Law",
    "Criminal Defense",
    "Intellectual Property",
    "Real Estate Law",
    "Employment Law",
    "Tax Law",
    "Civil Litigation",
  ];

  return (
    <section id="contact" className="relative bg-slate-50">
      {/* Header Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Contact Our Legal Team
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a free consultation with our experienced attorneys. We're here to help you navigate your legal challenges with confidence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 sticky top-24">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center group-hover:bg-[#D17D0F] group-hover:border-[#D17D0F] transition-colors duration-300">
                          <span className="text-[#D17D0F] group-hover:text-white transition-colors duration-300">
                            {info.icon}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-slate-600 text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                        <p className="text-xs text-slate-400 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && (
                      <div className="w-full h-px bg-slate-100 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-slate-900 rounded-xl border border-[#D17D0F]/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs text-red-400 uppercase tracking-wider font-semibold">
                    24/7 Emergency
                  </span>
                </div>
                <p className="text-white font-semibold text-lg mb-1">
                  +91 98765 43999
                </p>
                <p className="text-gray-400 text-sm">
                  Available for urgent legal matters
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-10">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-600 mb-8 font-light">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#D17D0F] focus:ring-2 focus:ring-[#D17D0F]/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400"
                      placeholder="Enter first name"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#D17D0F] focus:ring-2 focus:ring-[#D17D0F]/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400"
                      placeholder="Enter last name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#D17D0F] focus:ring-2 focus:ring-[#D17D0F]/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400"
                      placeholder="Enter email address"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#D17D0F] focus:ring-2 focus:ring-[#D17D0F]/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                {/* Practice Area */}
                <div>
                  <label htmlFor="practiceArea" className="block text-sm font-semibold text-slate-700 mb-2">
                    Practice Area *
                  </label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#D17D0F] focus:ring-2 focus:ring-[#D17D0F]/20 outline-none transition-all duration-300 text-slate-900 bg-white"
                  >
                    <option value="">Select practice area</option>
                    {practiceAreas.map((area, index) => (
                      <option key={index} value={area}>
                        {area}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#D17D0F] focus:ring-2 focus:ring-[#D17D0F]/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#D17D0F] focus:ring-2 focus:ring-[#D17D0F]/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400 resize-none"
                    placeholder="Describe your legal issue in detail..."
                  ></textarea>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Preferred Contact Method *
                  </label>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        className="w-4 h-4 text-[#D17D0F] focus:ring-[#D17D0F]"
                        defaultChecked
                      />
                      <span className="text-slate-600">Phone</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        className="w-4 h-4 text-[#D17D0F] focus:ring-[#D17D0F]"
                      />
                      <span className="text-slate-600">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="either"
                        className="w-4 h-4 text-[#D17D0F] focus:ring-[#D17D0F]"
                      />
                      <span className="text-slate-600">Either</span>
                    </label>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 mt-1 text-[#D17D0F] focus:ring-[#D17D0F] rounded"
                    />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      I agree to the terms and conditions and consent to being contacted regarding my legal inquiry. I understand my information will be kept confidential.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#D17D0F] hover:bg-[#b0680c] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg flex items-center justify-center gap-3 group tracking-wide text-sm uppercase"
                >
                  <FaBuilding className="h-4 w-4" />
                  Submit Your Inquiry
                  <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-slate-400 text-center mt-4">
                  Your information is 100% confidential and protected by attorney-client privilege.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">
            Our Offices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center group hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                <FaMapMarkerAlt className="h-6 w-6 text-[#D17D0F]" />
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">
                New Delhi (HQ)
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Supreme Court Complex<br />
                Tilak Marg, New Delhi - 110001<br />
                Phone: +91 11 2345 6789
              </p>
            </div>

            {/* Location 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center group hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                <FaMapMarkerAlt className="h-6 w-6 text-[#D17D0F]" />
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">
                Mumbai
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Bombay High Court Complex<br />
                Fort, Mumbai - 400032<br />
                Phone: +91 22 3456 7890
              </p>
            </div>

            {/* Location 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center group hover:border-[#D17D0F]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#D17D0F]/10 border border-[#D17D0F]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D17D0F]/20 transition-colors duration-300">
                <FaMapMarkerAlt className="h-6 w-6 text-[#D17D0F]" />
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">
                Bangalore
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Karnataka High Court Complex<br />
                Ambedkar Veedhi, Bangalore - 560001<br />
                Phone: +91 80 3456 7891
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-slate-200">
            <div className="w-full h-[400px] bg-slate-300 flex items-center justify-center">
              <div className="text-center p-8">
                <FaMapMarkerAlt className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 text-lg font-semibold mb-2">
                  Google Maps Integration
                </p>
                <p className="text-slate-400 text-sm">
                  Replace this placeholder with an actual Google Maps iframe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;