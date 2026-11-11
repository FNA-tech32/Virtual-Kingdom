import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const HelpLinks = [
  {
    title: "Client Portal",
    link: "/#contact",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "24/7 Support",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-dark text-white border-t border-gray-800">
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-5">
          {/* Company Details */}
          <div className="lg:col-span-4 space-y-4">
            <h1 className="sm:text-3xl text-2xl font-bold flex items-center gap-3 tracking-wide">
              Virtual Kingdom
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Virtual Kingdom is a premier digital agency engineering high-impact
              web solutions, mobile applications, brand architectures, and growth
              marketing campaigns for progressive brands globally.
            </p>
            {/* Social Handles */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h2 className="sm:text-lg text-base font-bold mb-4 text-white">
                Company
              </h2>
              <ul className="flex flex-col gap-2.5 text-sm">
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-400 inline-block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="sm:text-lg text-base font-bold mb-4 text-white">
                Support & Legal
              </h2>
              <ul className="flex flex-col gap-2.5 text-sm">
                {HelpLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-400 inline-block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="sm:text-lg text-base font-bold mb-4 text-white">
              Contact & Alternative Lines
            </h2>

            <div className="space-y-3 text-sm text-gray-300">
              {/* Telephone numbers */}
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">Primary Hotline:</p>
                  <a href="tel:+15553498201" className="hover:text-primary font-medium">
                    +1 (555) 349-8201
                  </a>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <FaWhatsapp className="text-emerald-400 text-xs" /> Alternative / Direct:
                  </p>
                  <a href="tel:+15557829104" className="hover:text-primary font-medium text-emerald-400">
                    +1 (555) 782-9104
                  </a>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-3 pt-1">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">Primary Email:</p>
                  <a href="mailto:hello@virtualkingdom.com" className="hover:text-primary font-medium">
                    hello@virtualkingdom.com
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Alternative Support:</p>
                  <a href="mailto:support@virtualkingdom.com" className="hover:text-primary font-medium text-amber-300">
                    support@virtualkingdom.com
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-3 pt-1">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">HQ:</p>
                  <p className="text-xs text-gray-300">742 Evergreen Terrace, Austin, TX 78701</p>
                  <p className="text-xs text-gray-400 mt-1">Alt Hub:</p>
                  <p className="text-xs text-gray-300">1204 Virtual Way, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Virtual Kingdom. All rights reserved.</p>
          <p>
            Designed & Engineered with ❤️ for Virtual Kingdom
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
