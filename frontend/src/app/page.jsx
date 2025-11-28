"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [career, setCareer] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [careerErrors, setCareerErrors] = useState({});
  const [contactErrors, setContactErrors] = useState({});
  const [careerSent, setCareerSent] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone.replace(/\D/g, ''));
  }

  function validateCareer() {
    const e = {};
    if (!career.name.trim()) e.name = "Name is required";
    if (!career.email || !validateEmail(career.email))
      e.email = "Valid email required";
    if (!career.phone || !validatePhone(career.phone))
      e.phone = "Valid 10-digit phone number required";
    if (!career.resume) e.resume = "Please upload your resume";
    setCareerErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateContact() {
    const e = {};
    if (!contact.name.trim()) e.name = "Name is required";
    if (!contact.email || !validateEmail(contact.email))
      e.email = "Valid email required";
    if (!contact.phone || !validatePhone(contact.phone))
      e.phone = "Valid 10-digit phone number required";
    if (!contact.message.trim()) e.message = "Message is required";
    setContactErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCareerSubmit(evt) {
    evt.preventDefault();
    if (!validateCareer()) return;
    // Here you would typically send data to your backend
    console.log("Career application:", career);
    setCareerSent(true);
    // Reset form
    setCareer({
      name: "",
      email: "",
      phone: "",
      resume: null,
      message: "",
    });
  }

  function handleContactSubmit(evt) {
    evt.preventDefault();
    if (!validateContact()) return;
    // Here you would typically send data to your backend
    console.log("Contact form:", contact);
    setContactSent(true);
    // Reset form
    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  return (
    <>
      <Head>
        <title>Day2Day Careers - Banking Sector Recruitment Services</title>
        <meta
          name="description"
          content="Day2Day Careers - Premier recruitment services for banking sector. Connecting qualified candidates with top banking companies as third-party staffing partner."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="banking recruitment, banking jobs, career consultancy, staffing solutions, banking sector jobs" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 antialiased">
        {/* HEADER */}
        <Navbar />

        {/* HERO SECTION */}
        <section
          id="home"
          className="pt-28 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Banking Sector Recruitment Services –
              <span className="text-blue-600 block mt-2">
                Connecting Talent with Opportunity
              </span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Day2Day Careers specializes in connecting qualified candidates with 
              leading banking institutions. As a trusted third-party recruitment partner, 
              we bridge the gap between talent and opportunity in the banking sector.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#careers"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Apply for Banking Jobs
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-gray-300 bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-blue-300 transition-all duration-300"
              >
                Partner with Us
              </a>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-in-delayed">
            <div className="absolute inset-0 bg-blue-200/20 blur-3xl rounded-full"></div>
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
              <Image
                src="/hero-img.webp"
                alt="Banking professionals team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Successful Placements" },
              { number: "25+", label: "Banking Partners" },
              { number: "8+ yrs", label: "Industry Experience" },
            ].map((stat, i) => (
              <div key={i} className="animate-bounce-in" style={{ animationDelay: `${i * 200}ms` }}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">About Day2Day Careers</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
                We are a specialized recruitment agency focused exclusively on the banking sector, 
                serving as a reliable third-party staffing partner for leading financial institutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Mission",
                  description: "To connect skilled professionals with rewarding careers in banking while helping financial institutions find the right talent efficiently.",
                  icon: "🎯"
                },
                {
                  title: "Our Vision",
                  description: "To become the most trusted recruitment partner in the banking sector, known for quality placements and exceptional service.",
                  icon: "🔭"
                },
                {
                  title: "Our Values",
                  description: "Integrity · Professionalism · Confidentiality · Excellence · Partnership",
                  icon: "💎"
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Comprehensive recruitment solutions tailored for the banking industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Talent Acquisition",
                  description: "End-to-end recruitment solutions for banking positions",
                  features: ["Permanent Staffing", "Contract Hiring", "Executive Search"]
                },
                {
                  title: "HR Consulting",
                  description: "Professional guidance for candidates and banking partners",
                  features: ["Interview Preparation", "Career Counseling", "Market Insights"]
                },
                {
                  title: "Staffing Solutions",
                  description: "Flexible staffing models for varying banking needs",
                  features: ["Temporary Staffing", "Project-based Hiring", "Bulk Recruitment"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section id="clients" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Banking Partners</h2>
              <p className="mt-4 text-gray-600">
                Trusted by leading financial institutions across India
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
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
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-32 h-12">
                    <Image
                      src={bank.logo}
                      alt={bank.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-blue-100 text-lg">
                Hear from candidates who built successful banking careers through us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Day2Day Careers helped me secure a Relationship Manager position at HDFC Bank within 3 weeks!",
                  name: "Amit Sharma",
                  position: "Relationship Manager",
                  bank: "HDFC Bank"
                },
                {
                  quote: "Professional guidance and quick placement. The team understands banking sector requirements perfectly.",
                  name: "Priya Nair",
                  position: "Credit Analyst",
                  bank: "ICICI Bank"
                },
                {
                  quote: "Excellent support throughout the recruitment process. They matched my skills with the right opportunity.",
                  name: "Rahul Mehta",
                  position: "Branch Operations Manager",
                  bank: "Axis Bank"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-blue-100 text-sm">{testimonial.position}</p>
                    <p className="text-blue-200 text-sm">{testimonial.bank}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREERS SECTION */}
        <section id="careers" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Start Your Banking Career</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Submit your details and our recruitment team will connect you with the best opportunities in the banking sector
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Application Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 height-fit">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for Banking Positions</h3>
                <form onSubmit={handleCareerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={career.name}
                        onChange={(e) => setCareer({ ...career, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Enter your full name"
                      />
                      {careerErrors.name && (
                        <p className="text-red-600 text-sm mt-1">{careerErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={career.email}
                        onChange={(e) => setCareer({ ...career, email: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                      {careerErrors.email && (
                        <p className="text-red-600 text-sm mt-1">{careerErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={career.phone}
                        onChange={(e) => setCareer({ ...career, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="10-digit mobile number"
                      />
                      {careerErrors.phone && (
                        <p className="text-red-600 text-sm mt-1">{careerErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Resume *
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setCareer({ ...career, resume: e.target.files[0] })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      {careerErrors.resume && (
                        <p className="text-red-600 text-sm mt-1">{careerErrors.resume}</p>
                      )}
                      <p className="text-gray-500 text-xs mt-1">PDF, DOC, DOCX up to 5MB</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      value={career.message}
                      onChange={(e) => setCareer({ ...career, message: e.target.value })}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Tell us about your career aspirations, preferred banking roles, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Submit Application
                  </button>

                  {careerSent && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                      <p className="text-green-700 font-medium">
                        ✅ Application submitted successfully! Our team will contact you shortly.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Side Information */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold mb-4">Why Choose Day2Day Careers?</h4>
                  <ul className="space-y-3">
                    {[
                      "Exclusive focus on banking sector jobs",
                      "Direct partnerships with leading banks",
                      "Quick interview scheduling",
                      "Professional resume guidance",
                      "Interview preparation support",
                      "Confidential application process"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h5 className="font-semibold text-lg text-gray-900 mb-4">Current Openings</h5>
                  <div className="space-y-3">
                    {[
                      "Relationship Manager",
                      "Personal Banker",
                      "Credit Analyst",
                      "Branch Operations",
                      "Sales Executive",
                      "Customer Service Representative"
                    ].map((role, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700">{role}</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Urgent
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Contact us for recruitment partnerships or career inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-blue-600">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Office</h4>
                      <p className="text-gray-600">Borivali, Mumbai, Maharashtra</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-blue-600">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-gray-600">day2dayconsultancy@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-blue-600">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us</h4>
                      <p className="text-gray-600">+91 99999 99999</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.986507470387!2d72.85025427498256!3d19.229550882011712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f85a1a1b35%3A0x69e8b9a35cf6b12!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699953275531!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Day2Day Careers Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Enter your name"
                      />
                      {contactErrors.name && (
                        <p className="text-red-600 text-sm mt-1">{contactErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                      {contactErrors.email && (
                        <p className="text-red-600 text-sm mt-1">{contactErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="10-digit mobile number"
                    />
                    {contactErrors.phone && (
                      <p className="text-red-600 text-sm mt-1">{contactErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={contact.message}
                      onChange={(e) => setContact({ ...contact, message: e.target.value })}
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                    {contactErrors.message && (
                      <p className="text-red-600 text-sm mt-1">{contactErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>

                  {contactSent && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                      <p className="text-green-700 font-medium">
                        ✅ Message sent successfully! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.3s both;
        }
        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}