import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaBuilding,
  FaHeadset,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Web Designing",
    channel: "Primary Email",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "Web Designing",
        channel: "Primary Email",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p
            data-aos="fade-up"
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Connect With Virtual Kingdom
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl font-bold"
          >
            Get In Touch & Alternative Details
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 dark:text-gray-400 text-sm sm:text-base"
          >
            Have a project in mind, need technical assistance, or exploring a partnership?
            Reach our specialists directly through our primary hotline, alternative WhatsApp line,
            or dedicated email inboxes.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* 1. Phone Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">
                <FaPhoneAlt />
              </div>
              <h3 className="text-lg font-bold mb-2">Phone Inquiries</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-primary/10 text-primary mb-1">
                    Primary Line
                  </span>
                  <p>
                    <a
                      href="tel:+15553498201"
                      className="font-medium hover:text-primary transition-colors text-gray-800 dark:text-gray-200"
                    >
                      +1 (555) 349-8201
                    </a>
                  </p>
                  <p className="text-xs text-gray-500">Main Office & Inquiries</p>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1 w-fit">
                    <FaWhatsapp className="text-xs" /> Alternative / Direct
                  </span>
                  <p>
                    <a
                      href="tel:+15557829104"
                      className="font-medium hover:text-primary transition-colors text-gray-800 dark:text-gray-200"
                    >
                      +1 (555) 782-9104
                    </a>
                  </p>
                  <p className="text-xs text-gray-500">Instant Messaging / Urgent</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Email Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Channels</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-primary/10 text-primary mb-1">
                    Primary Inbox
                  </span>
                  <p>
                    <a
                      href="mailto:hello@virtualkingdom.com"
                      className="font-medium hover:text-primary transition-colors break-all text-gray-800 dark:text-gray-200"
                    >
                      hello@virtualkingdom.com
                    </a>
                  </p>
                  <p className="text-xs text-gray-500">General & Partnerships</p>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1 w-fit">
                    <FaHeadset className="text-xs" /> Alternative Support
                  </span>
                  <p>
                    <a
                      href="mailto:support@virtualkingdom.com"
                      className="font-medium hover:text-primary transition-colors break-all text-gray-800 dark:text-gray-200"
                    >
                      support@virtualkingdom.com
                    </a>
                  </p>
                  <p className="text-xs text-gray-500">Technical & Client Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Location Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-lg font-bold mb-2">Office Locations</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-primary/10 text-primary mb-1 flex items-center gap-1 w-fit">
                    <FaBuilding className="text-xs" /> Primary HQ
                  </span>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    742 Evergreen Terrace, Ste 400
                  </p>
                  <p className="text-xs text-gray-500">Austin, TX 78701, USA</p>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-1">
                    Alternative Hub
                  </span>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    1204 Virtual Way, Floor 5
                  </p>
                  <p className="text-xs text-gray-500">San Francisco, CA 94105, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Business Hours */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">
                <FaClock />
              </div>
              <h3 className="text-lg font-bold mb-2">Hours of Operation</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-primary/10 text-primary mb-1">
                    Primary Weekdays
                  </span>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Mon – Fri: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-gray-500">Eastern Standard Time (EST)</p>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-1">
                    Alternative / Weekend
                  </span>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Sat: 10:00 AM – 2:00 PM
                  </p>
                  <p className="text-xs text-gray-500">Emergency & On-call Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Virtual Kingdom Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Form */}
          <div
            data-aos="fade-right"
            className="lg:col-span-7 bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-2">Send Us a Direct Message</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Fill out the details below and a Virtual Kingdom consultant will reply within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                <FaCheckCircle className="text-emerald-500 text-4xl mx-auto" />
                <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Thank you for contacting Virtual Kingdom. We will reach back out to you via your preferred channel.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary dark:focus:border-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary dark:focus:border-primary text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
                      Service Interested In
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary dark:focus:border-primary text-sm"
                    >
                      <option value="Web Designing">Web Designing & UI/UX</option>
                      <option value="App Development">App Development</option>
                      <option value="Graphic Designing">Graphic & Brand Identity</option>
                      <option value="Digital Marketing">Digital Marketing & Growth</option>
                      <option value="Custom Project">Custom Enterprise Project</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
                      Preferred Channel
                    </label>
                    <select
                      value={formData.channel}
                      onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary dark:focus:border-primary text-sm"
                    >
                      <option value="Primary Email">Primary Email (hello@virtualkingdom.com)</option>
                      <option value="Alt Support Email">Alt Support (support@virtualkingdom.com)</option>
                      <option value="Primary Phone">Primary Phone (+1 555-349-8201)</option>
                      <option value="WhatsApp Alternative">WhatsApp Alt (+1 555-782-9104)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary dark:focus:border-primary text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="primary-btn w-full flex items-center justify-center gap-2 py-3"
                >
                  <FaPaperPlane className="text-sm" /> Send Inquiry to Virtual Kingdom
                </button>
              </form>
            )}
          </div>

          {/* Side Info Panel */}
          <div
            data-aos="fade-left"
            className="lg:col-span-5 bg-gradient-to-br from-violet-950 via-primary to-violet-900 text-white p-8 rounded-3xl shadow-xl space-y-6"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wider uppercase mb-3">
                Why Virtual Kingdom?
              </span>
              <h3 className="text-2xl font-bold">Fast Turnaround, Premium Results</h3>
              <p className="text-violet-200 text-sm mt-2 leading-relaxed">
                At Virtual Kingdom, we bridge visionary ideas with cutting-edge digital implementation.
                Whether you prefer scheduled discovery meetings or quick WhatsApp consultations,
                our distributed teams are ready to accelerate your venture.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/20 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold">Dual Support Lines</h4>
                  <p className="text-violet-200 text-xs">
                    Primary switchboard and alternative emergency on-call team ready 6 days a week.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold">Direct Communication</h4>
                  <p className="text-violet-200 text-xs">
                    Speak directly with lead developers and creative directors on your project.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold">Global Virtual Delivery</h4>
                  <p className="text-violet-200 text-xs">
                    Collaborate seamlessly anywhere across the globe with transparent workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <p className="text-xs uppercase tracking-wider text-violet-200 font-semibold mb-1">
                  Need Immediate Answers?
                </p>
                <p className="text-sm font-semibold">
                  Dial our Alternative Hotline:{" "}
                  <a href="tel:+15557829104" className="underline hover:text-white">
                    +1 (555) 782-9104
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
