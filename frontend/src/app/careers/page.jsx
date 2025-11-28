"use client";

import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUpload, FaCheck, FaBriefcase, FaMapMarkerAlt, FaRupeeSign, FaClock, FaSearch } from "react-icons/fa";

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    resume: null,
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const jobCategories = ["All", "Relationship Manager", "Personal Banker", "Credit Analyst", "Branch Operations", "Sales Executive", "Customer Service"];

  const currentOpenings = [
    {
      id: 1,
      title: "Relationship Manager",
      company: "HDFC Bank",
      location: "Mumbai",
      salary: "₹6-8 LPA",
      experience: "2-5 years",
      type: "Full-time",
      category: "Relationship Manager",
      description: "Managing client relationships and driving sales for banking products.",
      requirements: ["MBA in Finance", "2+ years banking experience", "Good communication skills"],
      posted: "2 days ago",
      urgent: true
    },
    {
      id: 2,
      title: "Personal Banker",
      company: "ICICI Bank",
      location: "Delhi",
      salary: "₹4-6 LPA",
      experience: "1-3 years",
      type: "Full-time",
      category: "Personal Banker",
      description: "Providing personalized banking services to retail customers.",
      requirements: ["Graduation in any field", "1+ years experience", "Customer service orientation"],
      posted: "1 week ago",
      urgent: false
    },
    {
      id: 3,
      title: "Credit Analyst",
      company: "Axis Bank",
      location: "Bangalore",
      salary: "₹7-9 LPA",
      experience: "3-6 years",
      type: "Full-time",
      category: "Credit Analyst",
      description: "Analyzing creditworthiness and managing risk assessment.",
      requirements: ["CA/MBA Finance", "3+ years credit analysis", "Strong analytical skills"],
      posted: "3 days ago",
      urgent: true
    },
    {
      id: 4,
      title: "Branch Operations Manager",
      company: "SBI Bank",
      location: "Chennai",
      salary: "₹8-12 LPA",
      experience: "5-8 years",
      type: "Full-time",
      category: "Branch Operations",
      description: "Overseeing daily branch operations and team management.",
      requirements: ["Graduation + relevant experience", "5+ years banking ops", "Leadership skills"],
      posted: "2 weeks ago",
      urgent: false
    },
    {
      id: 5,
      title: "Sales Executive",
      company: "Kotak Mahindra Bank",
      location: "Pune",
      salary: "₹3-5 LPA + Incentives",
      experience: "0-2 years",
      type: "Full-time",
      category: "Sales Executive",
      description: "Acquiring new customers and selling banking products.",
      requirements: ["Graduation in any field", "Freshers welcome", "Good sales attitude"],
      posted: "5 days ago",
      urgent: true
    },
    {
      id: 6,
      title: "Customer Service Representative",
      company: "Yes Bank",
      location: "Hyderabad",
      salary: "₹3-4 LPA",
      experience: "0-1 years",
      type: "Full-time",
      category: "Customer Service",
      description: "Handling customer queries and providing service support.",
      requirements: ["Graduation in any field", "Good communication", "Customer-first attitude"],
      posted: "1 week ago",
      urgent: false
    }
  ];

  const filteredJobs = currentOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    if (!form.position) e.position = "Please select a position";
    if (!form.experience) e.experience = "Please select experience level";
    if (!form.resume) e.resume = "Please upload your resume";
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
        position: "",
        experience: "",
        currentCompany: "",
        expectedSalary: "",
        resume: null,
        message: "",
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleApplyForJob(jobTitle) {
    setForm(prev => ({ ...prev, position: jobTitle }));
    document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>Banking Careers | Day2Day Careers - Find Your Dream Banking Job</title>
        <meta
          name="description"
          content="Explore banking career opportunities with top banks. Submit your resume and get placed in your dream banking job with Day2Day Careers."
        />
        <meta name="keywords" content="banking jobs, bank careers, relationship manager, credit analyst, banking recruitment" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 antialiased">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Launch Your <span className="text-yellow-300">Banking Career</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join India's leading banking institutions with our expert recruitment services. 
              500+ successful placements and counting.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["🚀 Quick Placement", "💼 Top Banks", "🎯 Career Growth", "🤝 Expert Guidance"].map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <a 
              href="#current-openings" 
              className="inline-flex items-center bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaBriefcase className="mr-2" />
              View Current Openings
            </a>
          </div>
        </section>

        {/* Current Openings Section */}
        <section id="current-openings" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
              <p className="text-gray-600">Find your perfect role in the banking sector</p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 bg-gray-50 p-6 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs by title, company, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {jobCategories.map(category => (
                    <option key={category} value={category.toLowerCase()}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-gray-600">
                Showing {filteredJobs.length} of {currentOpenings.length} jobs
              </div>
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
                    </div>
                    {job.urgent && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                        Urgent Hiring
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaRupeeSign className="mr-2 text-green-500" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaBriefcase className="mr-2 text-purple-500" />
                      {job.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="mr-2 text-orange-500" />
                      {job.posted}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleApplyForJob(job.title)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    Apply for this Position
                  </button>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or check back later for new openings.</p>
              </div>
            )}
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <p className="text-gray-600">Fill out the form below and our recruitment team will contact you within 24 hours</p>
            </div>

            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in banking careers with Day2Day. 
                  Our recruitment team will review your application and contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Apply for Another Position
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      Preferred Position *
                    </label>
                    <select
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select a position</option>
                      {jobCategories.filter(cat => cat !== "All").map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="text-red-600 text-sm mt-1">{errors.position}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Experience *
                    </label>
                    <select
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher">Fresher (0 years)</option>
                      <option value="0-2 years">0-2 years</option>
                      <option value="2-5 years">2-5 years</option>
                      <option value="5-8 years">5-8 years</option>
                      <option value="8+ years">8+ years</option>
                    </select>
                    {errors.experience && (
                      <p className="text-red-600 text-sm mt-1">{errors.experience}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current/Last Company
                    </label>
                    <input
                      type="text"
                      value={form.currentCompany}
                      onChange={(e) => setForm({ ...form, currentCompany: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Salary (₹)
                    </label>
                    <input
                      type="text"
                      value={form.expectedSalary}
                      onChange={(e) => setForm({ ...form, expectedSalary: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Expected annual salary"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Resume *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <FaUpload className="mx-auto text-gray-400 text-2xl mb-2" />
                      <p className="text-gray-600 mb-2">
                        {form.resume ? form.resume.name : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max. 5MB)</p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.resume && (
                      <p className="text-red-600 text-sm mt-1">{errors.resume}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Tell us about your career goals, achievements, or any other relevant information..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  By submitting this form, you agree to our privacy policy and consent to being contacted by our recruitment team.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Day2Day Careers?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "Quick Placement",
                  description: "Average placement time of 2-3 weeks with our extensive banking network"
                },
                {
                  icon: "💼",
                  title: "Top Banking Partners",
                  description: "Direct partnerships with HDFC, ICICI, SBI, Axis, Kotak, and more"
                },
                {
                  icon: "🎯",
                  title: "Career Guidance",
                  description: "Expert resume review and interview preparation from industry specialists"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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