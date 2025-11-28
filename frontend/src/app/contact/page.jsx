"use client";

import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaLinkedin, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "recruitment", label: "Recruitment Services" },
    { value: "partnership", label: "Business Partnership" },
    { value: "career", label: "Career Opportunity" },
    { value: "complaint", label: "Complaint" },
    { value: "feedback", label: "Feedback" }
  ];

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone.replace(/\D/g, ''));
  }

  function validateForm() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email || !validateEmail(form.email)) e.email = "Valid email required";
    if (!form.phone || !validatePhone(form.phone)) e.phone = "Valid 10-digit phone number required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general"
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Office",
      details: ["Borivali, Mumbai", "Maharashtra, India - 400103"],
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: FaPhoneAlt,
      title: "Phone Number",
      details: ["+91 99999 99999", "+91 88888 88888"],
      color: "text-green-500",
      bgColor: "bg-green-50",
      link: "tel:+919999999999"
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: ["day2dayconsultancy@gmail.com", "careers@day2dayconsultancy.com"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      link: "mailto:day2dayconsultancy@gmail.com"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:bg-blue-700",
      bgColor: "bg-blue-600"
    },
    {
      icon: FaFacebookF,
      name: "Facebook",
      url: "#",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "#",
      color: "hover:bg-blue-400",
      bgColor: "bg-blue-400"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "#",
      color: "hover:bg-pink-600",
      bgColor: "bg-pink-500"
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/919999999999",
      color: "hover:bg-green-600",
      bgColor: "bg-green-500"
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Day2Day Careers - Banking Recruitment Experts</title>
        <meta
          name="description"
          content="Get in touch with Day2Day Careers for banking recruitment services, career opportunities, or business partnerships. We're here to help you grow."
        />
        <meta name="keywords" content="contact banking recruitment, get in touch, career consultation, Mumbai recruitment agency" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 antialiased">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to take the next step in your banking career or looking for recruitment solutions? 
              We're here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["📞 24/7 Support", "💬 Quick Response", "🎯 Expert Guidance", "🤝 Personalized Service"].map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`${item.bgColor} p-3 rounded-lg mr-4 flex-shrink-0`}>
                          <item.icon className={`${item.color} text-lg`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                          {item.link && (
                            <a 
                              href={item.link} 
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 inline-block"
                            >
                              Click to contact
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`${social.bgColor} ${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110`}
                          aria-label={social.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="text-sm" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Response Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3">Quick Response Guaranteed</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-green-300" />
                      Response within 2 hours
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-green-300" />
                      24/7 career support
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-green-300" />
                      Expert consultation
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-green-300" />
                      Confidential service
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheckCircle className="text-green-600 text-3xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for contacting Day2Day Careers. We have received your message and 
                        will get back to you within 2 hours during business hours.
                      </p>
                      <div className="space-y-3 max-w-md mx-auto">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-700">
                            <strong>Next Steps:</strong> Our team will review your inquiry and contact you via your preferred method.
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                      <p className="text-gray-600 mb-6">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              placeholder="Enter your full name"
                            />
                            {errors.name && (
                              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              placeholder="your.email@example.com"
                            />
                            {errors.email && (
                              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              placeholder="10-digit mobile number"
                            />
                            {errors.phone && (
                              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Inquiry Type *
                            </label>
                            <select
                              value={form.inquiryType}
                              onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            >
                              {inquiryTypes.map(type => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Brief subject of your message"
                          />
                          {errors.subject && (
                            <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Message *
                          </label>
                          <textarea
                            rows={6}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Please provide detailed information about your inquiry..."
                          />
                          {errors.message && (
                            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>

                        <p className="text-center text-gray-500 text-sm">
                          We typically respond within 2 hours during business hours
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Borivali, Mumbai. Feel free to visit us for a personal consultation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Office Details */}
                <div className="lg:col-span-1 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Day2Day Careers</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">Borivali, Mumbai</p>
                        <p className="text-gray-600">Maharashtra, India - 400103</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaPhoneAlt className="text-green-500 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a href="tel:+919999999999" className="text-gray-600 hover:text-blue-600">
                          +91 99999 99999
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaEnvelope className="text-blue-500 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:day2dayconsultancy@gmail.com" className="text-gray-600 hover:text-blue-600">
                          day2dayconsultancy@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FaClock className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Business Hours</p>
                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Pro Tip:</strong> For immediate career consultation, call us during business hours or send a WhatsApp message anytime.
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="lg:col-span-2">
                  <div className="h-96 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.986507470387!2d72.85025427498256!3d19.229550882011712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f85a1a1b35%3A0x69e8b9a35cf6b12!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699953275531!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="filter grayscale hover:grayscale-0 transition-all duration-500"
                      title="Day2Day Careers Location in Borivali, Mumbai"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How quickly will I get a response after submitting the contact form?",
                  answer: "We typically respond within 2 hours during business hours (Monday to Friday, 9 AM - 6 PM). For messages sent outside business hours, we'll respond the next business day."
                },
                {
                  question: "Do you charge any fees for job placement services?",
                  answer: "No, our recruitment services are completely free for job seekers. We are paid by our banking partners when we successfully place candidates."
                },
                {
                  question: "Can I walk in for a consultation without an appointment?",
                  answer: "While walk-ins are welcome, we highly recommend scheduling an appointment to ensure we can give you our undivided attention and have the right team members available."
                },
                {
                  question: "What documents should I bring for a career consultation?",
                  answer: "Please bring your updated resume, educational certificates, experience letters, and any relevant certifications. Digital copies are also acceptable."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}