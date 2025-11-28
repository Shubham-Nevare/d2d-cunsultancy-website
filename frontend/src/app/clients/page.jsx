"use client";

import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaBuilding, 
  FaUsers, 
  FaHandshake, 
  FaChartLine,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";


export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const bankingPartners = [
    {
      id: 1,
      name: "HDFC Bank",
      logo: "/hdfc-logo.webp",
      category: "private",
      description: "Leading private sector bank with nationwide presence",
      partnership: "Since 2018",
      placements: "120+ candidates placed",
      roles: ["Relationship Manager", "Personal Banker", "Branch Operations", "Sales Executive"],
      testimonial: "Day2Day has been instrumental in providing quality talent for our retail banking expansion.",
      testimonialAuthor: "Rajesh Kumar, Regional HR Head",
      featured: true
    },
    {
      id: 2,
      name: "ICICI Bank",
      logo: "/icici-logo.png",
      category: "private",
      description: "Premier private bank with diverse financial services",
      partnership: "Since 2019",
      placements: "95+ candidates placed",
      roles: ["Credit Analyst", "Relationship Manager", "Customer Service", "Wealth Manager"],
      testimonial: "Consistent quality in candidate shortlisting and quick turnaround time.",
      testimonialAuthor: "Priya Sharma, Talent Acquisition Manager",
      featured: true
    },
    {
      id: 3,
      name: "State Bank of India",
      logo: "/sbi-logo.png",
      category: "public",
      description: "India's largest public sector bank",
      partnership: "Since 2020",
      placements: "80+ candidates placed",
      roles: ["Probationary Officer", "Clerk", "Specialist Officer", "Branch Manager"],
      testimonial: "Reliable partner for our mass recruitment drives across Maharashtra.",
      testimonialAuthor: "Amit Patel, Zonal Manager",
      featured: false
    },
    {
      id: 4,
      name: "Axis Bank",
      logo: "/axis-logo.png",
      category: "private",
      description: "Third-largest private sector bank in India",
      partnership: "Since 2019",
      placements: "75+ candidates placed",
      roles: ["Sales Manager", "Operations Manager", "Product Specialist", "Digital Banking"],
      testimonial: "Excellent understanding of our culture and role requirements.",
      testimonialAuthor: "Neha Verma, HR Business Partner",
      featured: false
    },
    {
      id: 5,
      name: "Kotak Mahindra Bank",
      logo: "/kotak-logo.png",
      category: "private",
      description: "Fast-growing private sector bank",
      partnership: "Since 2021",
      placements: "60+ candidates placed",
      roles: ["Relationship Manager", "Business Banking", "Priority Banking", "Operations"],
      testimonial: "Quick response and quality candidates for urgent requirements.",
      testimonialAuthor: "Sanjay Mehta, Cluster Head",
      featured: true
    },
    {
      id: 6,
      name: "Yes Bank",
      logo: "/yesbank-logo.png",
      category: "private",
      description: "Private sector bank with strong corporate focus",
      partnership: "Since 2020",
      placements: "45+ candidates placed",
      roles: ["Corporate Relationship Manager", "Business Development", "Branch Banking", "Credit"],
      testimonial: "Trusted recruitment partner for specialized banking roles.",
      testimonialAuthor: "Vikram Singh, Head of HR",
      featured: false
    },
    {
      id: 7,
      name: "IDFC First Bank",
      logo: "/idfc-logo.png",
      category: "private",
      description: "Emerging private sector bank",
      partnership: "Since 2022",
      placements: "35+ candidates placed",
      roles: ["Personal Banker", "Sales Officer", "Customer Service", "Wealth Advisor"],
      testimonial: "Growing together with quality talent acquisition support.",
      testimonialAuthor: "Anjali Deshpande, Recruitment Manager",
      featured: false
    },
    {
      id: 8,
      name: "Bank of Baroda",
      logo: "/bob-logo.png",
      category: "public",
      description: "Leading public sector bank",
      partnership: "Since 2021",
      placements: "40+ candidates placed",
      roles: ["Field Officer", "Clerk", "Specialist Officer", "Sales Executive"],
      testimonial: "Effective partner for our retail banking expansion in Mumbai.",
      testimonialAuthor: "Rahul Joshi, Regional Head",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Partners", count: bankingPartners.length },
    { id: "private", name: "Private Banks", count: bankingPartners.filter(client => client.category === "private").length },
    { id: "public", name: "Public Banks", count: bankingPartners.filter(client => client.category === "public").length },
    { id: "featured", name: "Featured", count: bankingPartners.filter(client => client.featured).length }
  ];

  const filteredClients = bankingPartners.filter(client => 
    activeCategory === "all" || 
    (activeCategory === "featured" ? client.featured : client.category === activeCategory)
  );

  const stats = [
    { number: "25+", label: "Banking Partners", icon: FaBuilding },
    { number: "500+", label: "Successful Placements", icon: FaUsers },
    { number: "8+", label: "Years Partnership", icon: FaHandshake },
    { number: "95%", label: "Client Retention", icon: FaChartLine }
  ];

  return (
    <>
      <Head>
        <title>Our Banking Clients | Day2Day Careers - Trusted by Top Banks</title>
        <meta
          name="description"
          content="Day2Day Careers partners with leading banking institutions including HDFC, ICICI, SBI, Axis, Kotak, and more. See our client success stories."
        />
        <meta name="keywords" content="banking clients, HDFC recruitment partner, ICICI bank, SBI recruitment, Axis Bank, Kotak Mahindra Bank" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 antialiased">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Trusted by <span className="text-yellow-300">Leading Banks</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We partner with India's top banking institutions to deliver exceptional talent 
              and build high-performing teams across the financial sector.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["🏆 Premium Partners", "🤝 Long-term Relationships", "🎯 Quality Placements", "🚀 Quick Turnaround"].map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-blue-600 text-2xl" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Banking Partners</h2>
              <p className="text-gray-600">Working with the best in the banking industry</p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Client Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClients.map(client => (
                <div key={client.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                  {/* Client Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-white rounded-lg border border-gray-200 p-2 flex items-center justify-center">
                        <div className="text-lg font-bold text-gray-700">{client.name.split(' ').map(w => w[0]).join('')}</div>
                        {/* In real implementation, use Image component: */}
                        {/* <Image src={client.logo} alt={client.name} width={64} height={64} className="object-contain" /> */}
                      </div>
                      {client.featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{client.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <FaHandshake className="mr-2 text-blue-500" />
                      Partnership: {client.partnership}
                    </div>
                  </div>

                  {/* Client Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <FaUsers className="mr-2 text-green-500" />
                        {client.placements}
                      </h4>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Roles Filled:</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.roles.slice(0, 3).map((role, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                            {role}
                          </span>
                        ))}
                        {client.roles.length > 3 && (
                          <span className="text-gray-500 text-xs">+{client.roles.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    {/* Testimonial */}
                    {client.testimonial && (
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <FaQuoteLeft className="text-blue-200 text-lg mb-2" />
                        <p className="text-gray-600 text-sm italic mb-2">"{client.testimonial}"</p>
                        <p className="text-gray-700 text-sm font-semibold">{client.testimonialAuthor}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredClients.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No clients found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Banks Choose Us</h2>
              <p className="text-gray-600">Delivering exceptional value to our banking partners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Quality Talent",
                  description: "Pre-screened candidates with banking-specific expertise"
                },
                {
                  icon: "⚡",
                  title: "Quick Turnaround",
                  description: "Average 7-day placement from requirement to joining"
                },
                {
                  icon: "💰",
                  title: "Cost Effective",
                  description: "Competitive pricing with guaranteed replacement period"
                },
                {
                  icon: "🔄",
                  title: "Ongoing Support",
                  description: "Continuous candidate support and follow-up services"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Banking Partners Say</h2>
              <p className="text-blue-100">Trusted by HR leaders across the banking industry</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bankingPartners.filter(client => client.featured).slice(0, 3).map(client => (
                <div key={client.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-white">{client.name.split(' ').map(w => w[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{client.name}</h4>
                      <p className="text-blue-200 text-sm">{client.testimonialAuthor.split(',')[1]}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map(star => (
                      <FaStar key={star} className="text-yellow-300 fill-current" />
                    ))}
                  </div>
                  <p className="italic">"{client.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section for New Partnerships */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Want to Become Our Banking Partner?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Join other leading banks who trust us for their recruitment needs. 
                Let's discuss how we can support your hiring goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <FaHandshake className="mr-2" />
                  Start Partnership
                </a>
                <a
                  href="tel:+919999999999"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                >
                  <FaArrowRight className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partnership Process</h2>
              <p className="text-gray-600">Simple, efficient, and results-driven</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirement Analysis",
                  description: "Understand your specific hiring needs and culture"
                },
                {
                  step: "02",
                  title: "Candidate Sourcing",
                  description: "Tap into our extensive database and active networks"
                },
                {
                  step: "03",
                  title: "Screening & Shortlisting",
                  description: "Rigorous evaluation and background verification"
                },
                {
                  step: "04",
                  title: "Placement & Support",
                  description: "Seamless onboarding and ongoing candidate support"
                }
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
                  )}
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
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