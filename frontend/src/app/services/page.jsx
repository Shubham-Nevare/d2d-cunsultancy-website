"use client";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Permanent Staffing",
      description: "Full-time recruitment solutions for banking positions with long-term career placements",
      icon: "💼",
      features: [
        "Relationship Managers", 
        "Branch Operations Staff", 
        "Credit Analysts", 
        "Sales Executives",
        "Personal Bankers",
        "Customer Service Representatives"
      ],
      benefits: [
        "Comprehensive background verification",
        "Skill and competency assessment",
        "Cultural fit evaluation",
        "Long-term career mapping"
      ],
      process: ["Requirement Analysis", "Candidate Sourcing", "Screening & Interviews", "Final Placement"]
    },
    {
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based and temporary banking requirements",
      icon: "⏱️",
      features: [
        "Temporary Staffing", 
        "Project-based Hiring", 
        "Seasonal Requirements", 
        "Special Projects",
        "Maternity Leave Coverage",
        "Peak Season Staffing"
      ],
      benefits: [
        "Quick turnaround (48-72 hours)",
        "Flexible engagement models",
        "Cost-effective solutions",
        "Immediate resource deployment"
      ],
      process: ["Quick Requirement", "Rapid Sourcing", "Fast-track Screening", "Immediate Deployment"]
    },
    {
      title: "Executive Search",
      description: "Leadership and specialized role recruitment for senior banking positions",
      icon: "🎯",
      features: [
        "Branch Managers", 
        "Area Heads", 
        "Department Heads", 
        "Specialized Roles",
        "Regional Managers",
        "Business Heads"
      ],
      benefits: [
        "Confidential search process",
        "Executive competency mapping",
        "Leadership assessment",
        "Strategic role fit analysis"
      ],
      process: ["Position Profiling", "Targeted Search", "Leadership Assessment", "Strategic Placement"]
    },
    {
      title: "Bulk Recruitment",
      description: "Mass recruitment solutions for large-scale banking expansion and branch openings",
      icon: "👥",
      features: [
        "Branch Expansion Drives", 
        "Mass Hiring Campaigns", 
        "Pan-India Recruitment", 
        "Campus to Corporate",
        "Graduate Hiring Programs",
        "Management Trainee Programs"
      ],
      benefits: [
        "Scalable recruitment process",
        "Standardized assessment tools",
        "Geographical reach",
        "Cost-efficient mass hiring"
      ],
      process: ["Volume Planning", "Multi-city Drive", "Standardized Assessment", "Batch Onboarding"]
    },
    {
      title: "HR Consulting",
      description: "Professional HR solutions and consulting services for banking institutions",
      icon: "📊",
      features: [
        "Manpower Planning", 
        "Compensation Benchmarking", 
        "Performance Management", 
        "HR Policy Design",
        "Training Needs Analysis",
        "Employee Engagement"
      ],
      benefits: [
        "Industry benchmarking data",
        "Customized HR solutions",
        "Compliance guidance",
        "Best practices implementation"
      ],
      process: ["Diagnostic Analysis", "Solution Design", "Implementation Support", "Performance Review"]
    },
    {
      title: "Career Consulting",
      description: "Personalized career guidance and development services for banking professionals",
      icon: "🎓",
      features: [
        "Resume Building", 
        "Interview Preparation", 
        "Career Counseling", 
        "Skill Development",
        "Career Transition",
        "Progress Tracking"
      ],
      benefits: [
        "Personalized career roadmap",
        "Industry expert guidance",
        "Mock interviews and feedback",
        "Continuous career support"
      ],
      process: ["Career Assessment", "Skill Gap Analysis", "Personalized Plan", "Continuous Monitoring"]
    }
  ];

  const recruitmentProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Deep dive into your specific hiring needs, team culture, and role requirements",
      duration: "1-2 days"
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      description: "Leverage our extensive database, networks, and sourcing channels to find ideal candidates",
      duration: "3-5 days"
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Comprehensive screening including technical tests, behavioral interviews, and background checks",
      duration: "2-3 days"
    },
    {
      step: "04",
      title: "Interview Coordination",
      description: "Seamless coordination between candidates and clients, including feedback collection",
      duration: "3-7 days"
    },
    {
      step: "05",
      title: "Offer & Onboarding",
      description: "Support through offer negotiation, joining formalities, and initial onboarding process",
      duration: "5-10 days"
    },
    {
      step: "06",
      title: "Post-placement Support",
      description: "Continuous follow-up and support to ensure successful integration and performance",
      duration: "90 days"
    }
  ];

  const industrySpecializations = [
    {
      category: "Retail Banking",
      roles: ["Personal Banker", "Relationship Manager", "Branch Operations", "Customer Service"]
    },
    {
      category: "Corporate Banking",
      roles: ["Corporate RM", "Business Banking", "Transaction Banking", "Credit Analyst"]
    },
    {
      category: "Wealth Management",
      roles: ["Wealth Manager", "Investment Advisor", "Portfolio Manager", "Financial Planner"]
    },
    {
      category: "Digital Banking",
      roles: ["Digital Banking Head", "Product Manager", "UX Designer", "Digital Operations"]
    }
  ];

  return (
    <>
      <Head>
        <title>Banking Recruitment Services | Day2Day Careers - Comprehensive Staffing Solutions</title>
        <meta name="description" content="Expert banking recruitment services including permanent staffing, contract staffing, executive search, bulk recruitment, HR consulting and career consulting for financial institutions." />
        <meta name="keywords" content="banking recruitment services, banking staffing solutions, financial sector recruitment, banking HR consulting" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive <span className="text-yellow-300">Banking Recruitment</span> Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              End-to-end staffing solutions tailored for the unique needs of the banking and financial services industry
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["🚀 Quick Placement", "🎯 Industry Expertise", "💼 500+ Placements", "⭐ 95% Success Rate"].map((badge, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tailored recruitment solutions designed specifically for the banking sector's unique requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:transform hover:-translate-y-2">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                        <span className="text-xl">{service.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Positions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-gray-500 text-xs">+{service.features.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-600">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Our Process:</h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1 text-blue-600 font-semibold">
                              {idx + 1}
                            </div>
                            <span className="hidden sm:inline">{step.split(' ')[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recruitment Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach ensuring quality placements and successful long-term matches
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recruitmentProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-700 text-sm font-semibold">
                      Average Duration: <span className="text-blue-900">{step.duration}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Specializations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Banking Sector Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Deep understanding of various banking domains and their specific talent requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industrySpecializations.map((specialization, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 hover:border-blue-300 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{specialization.category}</h3>
                  <ul className="space-y-2">
                    {specialization.roles.map((role, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Banking Recruitment Services?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Industry-specific expertise combined with proven recruitment methodologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Sector Specialization",
                  description: "Exclusive focus on banking and financial services recruitment"
                },
                {
                  icon: "🚀",
                  title: "Quick Turnaround",
                  description: "Average placement time of 2-3 weeks for most positions"
                },
                {
                  icon: "💡",
                  title: "Industry Insight",
                  description: "Deep understanding of banking roles, skills, and market trends"
                },
                {
                  icon: "🔄",
                  title: "End-to-End Support",
                  description: "Comprehensive support from sourcing to onboarding and beyond"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Successful Placements" },
                { number: "25+", label: "Banking Partners" },
                { number: "48-72", label: "Hours Average Response" },
                { number: "95%", label: "Client Satisfaction Rate" }
              ].map((stat, index) => (
                <div key={index} className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-colors">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</p>
                  <p className="text-gray-700 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Banking Team?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Partner with us to find the perfect talent for your banking organization or advance your career in the financial sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">📞</span>
                  Discuss Your Requirements
                </a>
                <a
                  href="/careers"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">💼</span>
                  Explore Career Opportunities
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