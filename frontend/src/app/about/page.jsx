"use client";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaUsers, 
  FaHandshake, 
  FaChartLine, 
  FaAward,
  FaEye,
  FaGem,
  FaHistory,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaRocket,
  FaBullseye
} from "react-icons/fa";
import { FaTarget } from "react-icons/fa";


export default function About() {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      experience: "12+ years in Banking HR",
      expertise: ["Talent Acquisition", "Banking Operations", "Client Relations"],
      description: "Former HR manager at leading private bank with extensive network in banking sector."
    },
    {
      name: "Priya Patel",
      role: "Senior Recruitment Manager",
      experience: "8+ years in Recruitment",
      expertise: ["Candidate Screening", "Interview Coordination", "Career Counseling"],
      description: "Specialized in banking roles with 500+ successful placements."
    },
    {
      name: "Amit Verma",
      role: "Client Relations Head",
      experience: "10+ years in Banking",
      expertise: ["Banking Partnerships", "Client Management", "Market Analysis"],
      description: "Ex-banker with deep understanding of banking industry requirements."
    }
  ];

  const milestones = [
    { year: "2016", event: "Company Founded", description: "Started operations in Borivali, Mumbai" },
    { year: "2017", event: "First Major Partnership", description: "Onboarded first banking client - HDFC Bank" },
    { year: "2019", event: "Expanded Portfolio", description: "Added 10+ banking partners including ICICI, Axis" },
    { year: "2021", event: "500+ Placements", description: "Crossed milestone of 500 successful placements" },
    { year: "2023", event: "Industry Recognition", description: "Recognized as top banking recruitment partner" },
    { year: "2024", event: "Digital Transformation", description: "Launched enhanced digital platform" }
  ];

  const values = [
    {
      icon: FaGem,
      title: "Integrity",
      description: "We maintain absolute transparency and ethical practices in all our dealings with candidates and banking partners.",
      points: ["Honest Communication", "Ethical Practices", "Transparent Processes"]
    },
    {
      icon: FaBullseye,
      title: "Excellence",
      description: "We strive for the highest standards in recruitment, ensuring quality matches between candidates and banking institutions.",
      points: ["Quality Focus", "Continuous Improvement", "Benchmark Excellence"]
    },
    {
      icon: FaHandshake,
      title: "Partnership",
      description: "We build long-term relationships based on trust, mutual respect, and shared success with both candidates and clients.",
      points: ["Long-term Approach", "Mutual Growth", "Trust Building"]
    },
    {
      icon: FaUsers,
      title: "Commitment",
      description: "We are deeply committed to the success of every candidate and the satisfaction of every banking partner we work with.",
      points: ["Dedicated Support", "Result Orientation", "Accountability"]
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Placements", icon: FaUsers },
    { number: "25+", label: "Banking Partners", icon: FaHandshake },
    { number: "8+", label: "Years Experience", icon: FaHistory },
    { number: "95%", label: "Client Satisfaction", icon: FaStar }
  ];

  return (
    <>
      <Head>
        <title>About Us - Day2Day Careers | Premier Banking Recruitment Agency</title>
        <meta name="description" content="Discover Day2Day Careers - Mumbai's leading banking recruitment agency with 8+ years experience, 500+ placements, and partnerships with top banks like HDFC, ICICI, SBI." />
        <meta name="keywords" content="banking recruitment agency, banking jobs Mumbai, financial sector recruitment, banking career consultants" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-yellow-300">Day2Day Careers</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Premier banking recruitment specialists connecting exceptional talent with 
              India's leading financial institutions since 2016.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["🏆 Trusted by 25+ Banks", "🚀 500+ Placements", "💼 8+ Years Experience", "⭐ 95% Success Rate"].map((badge, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
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

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey & Vision</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Founded in 2016, <strong>Day2Day Careers</strong> emerged from a simple yet powerful vision: 
                    to bridge the gap between exceptional banking talent and leading financial institutions 
                    across India.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    What started as a small recruitment agency in Borivali, Mumbai, has grown into a 
                    trusted partner for <strong>25+ banking institutions</strong>, including HDFC Bank, 
                    ICICI Bank, SBI, Axis Bank, and Kotak Mahindra Bank.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our deep understanding of the banking sector, combined with our extensive network 
                    and personalized approach, has enabled us to successfully place <strong>500+ professionals</strong> 
                    in rewarding banking careers.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: "Banking Partners", value: "25+" },
                    { label: "Years Experience", value: "8+" },
                    { label: "Team Members", value: "15+" },
                    { label: "Success Rate", value: "95%" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Mission & Vision */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FaBullseye className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    To connect skilled professionals with fulfilling banking careers while helping 
                    financial institutions build high-performing teams through ethical, efficient, 
                    and personalized recruitment solutions.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <FaEye className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Our Vision</h3>
                    </div>
                  </div>
                  <p className="text-blue-100">
                    To become India's most trusted and preferred recruitment partner in the banking 
                    sector, known for excellence, integrity, and transformative career solutions.
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Day2Day Careers?</h3>
                  <ul className="space-y-3">
                    {[
                      "Industry-specific expertise exclusively in banking sector",
                      "Extensive network of 25+ leading banking partners",
                      "8+ years of specialized recruitment experience",
                      "Personalized career guidance and interview preparation",
                      "Quick and efficient placement process (avg. 2-3 weeks)",
                      "Confidential and professional service guaranteed"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to becoming a trusted name in banking recruitment
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                      <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-200 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="text-blue-600 text-sm font-semibold mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="md:w-1/2 md:px-8">
                      {/* Empty space for alignment */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision and interaction at Day2Day Careers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <value.icon className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 mb-4">{value.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {value.points.map((point, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your banking career success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-500 text-sm mb-4">{member.experience}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 text-center">{member.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office & Contact Info */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-yellow-300 mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Head Office</h3>
                      <p className="text-blue-100">Borivali, Mumbai</p>
                      <p className="text-blue-100">Maharashtra, India - 400103</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaPhone className="text-yellow-300 mr-4 text-lg" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:+919999999999" className="text-blue-100 hover:text-white transition-colors">
                        +91 99999 99999
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaEnvelope className="text-yellow-300 mr-4 text-lg" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:day2dayconsultancy@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                        day2dayconsultancy@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaClock className="text-yellow-300 mt-1 mr-4 text-lg" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-blue-100">Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Why Banking Professionals Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    "Deep understanding of banking sector requirements",
                    "Direct access to HR heads of leading banks",
                    "Personalized career roadmap and guidance",
                    "Interview preparation with industry experts",
                    "Quick placement process with high success rate",
                    "Continuous support even after placement"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FaRocket className="text-yellow-300 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Advance Your Banking Career?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Join thousands of banking professionals who have transformed their careers with Day2Day Careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <FaRocket className="mr-2" />
                  Explore Career Opportunities
                </a>
                <a
                  href="/contact"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                >
                  <FaHandshake className="mr-2" />
                  Get Career Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}