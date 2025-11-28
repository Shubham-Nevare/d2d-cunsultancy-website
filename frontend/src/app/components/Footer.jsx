import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaLinkedin, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaRocket,
  FaHeart
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold text-white text-lg">D2D</span>
              </div>
              <h3 className="text-xl font-bold">Day2Day Careers</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premier recruitment partner for the banking sector, connecting 
              qualified professionals with leading financial institutions 
              across India. Your trusted third-party staffing solution.
            </p>
            <div className="flex space-x-4">
              {[
                { 
                  name: "LinkedIn", 
                  icon: FaLinkedin, 
                  url: "#",
                  color: "hover:bg-blue-700"
                },
                { 
                  name: "Facebook", 
                  icon: FaFacebookF, 
                  url: "#",
                  color: "hover:bg-blue-600"
                },
                { 
                  name: "Twitter", 
                  icon: FaTwitter, 
                  url: "#",
                  color: "hover:bg-blue-400"
                },
                { 
                  name: "Instagram", 
                  icon: FaInstagram, 
                  url: "#",
                  color: "hover:bg-pink-600"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-gray-700 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-white text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Our Clients", href: "#clients" },
                { name: "Careers", href: "#careers" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-200">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Borivali, Mumbai</p>
                  <p className="text-gray-400 text-sm">Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:day2dayconsultancy@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 break-words"
                >
                  day2dayconsultancy@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <FaPhoneAlt className="text-blue-400 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+919999999999"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +91 99999 99999
                </a>
              </div>

              <div className="flex items-start">
                <FaClock className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Partners Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-6 text-center text-blue-200">
            Our Banking Partners
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center opacity-80">
            {[
              { name: "HDFC Bank", logo: "/hdfc-logo.webp" },
              { name: "ICICI Bank", logo: "/icici-logo.png" },
              { name: "State Bank of India", logo: "/sbi-logo.png" },
              { name: "Axis Bank", logo: "/axis-logo.png" },
              { name: "Kotak Mahindra Bank", logo: "/kotak-logo.png" },
              { name: "Yes Bank", logo: "/yesbank-logo.png" },
            ].map((bank, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-20 h-8">
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text if image doesn't load */}
                  <div className="hidden text-xs font-medium text-center text-gray-300">
                    {bank.name.split(' ')[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Day2Day Careers. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Disclaimer", href: "/disclaimer" },
                { name: "Sitemap", href: "/sitemap.xml" }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Made with love */}
            <div className="text-gray-400 text-sm flex items-center">
              Made with 
              <FaHeart className="text-red-500 mx-1 text-xs" /> 
              for banking professionals
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#careers"
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 font-semibold group"
        >
          <FaRocket className="group-hover:animate-bounce" />
          <span>Apply Now</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;