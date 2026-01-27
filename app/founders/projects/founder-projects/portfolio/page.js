'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

// Data for the portfolio
const unicornsData = [
  { name: "SanDisk", valuation: 19.0, founder: "Sanjay Mehrotra", sector: "Tech/Software", exit: "Acquired by Western Digital (2016)", icon: "📱" },
  { name: "Swiggy", valuation: 11.0, founder: "Sriharsha Majety", sector: "Food Delivery", exit: "Current Valuation", icon: "🍔" },
  { name: "FalconX", valuation: 8.0, founder: "Raghu Yarlagadda", sector: "Fintech", exit: "Current Valuation", icon: "💱" },
  { name: "Postman", valuation: 7.5, founder: "Abhinav Asthana", sector: "Tech/Software", exit: "Current Valuation", icon: "🚀" },
  { name: "OfBusiness", valuation: 5.0, founder: "Asish Mohapatra & Bhuvan Gupta", sector: "E-commerce", exit: "Current Valuation", icon: "🏢" },
  { name: "Eruditus", valuation: 3.2, founder: "Ashwin Damera", sector: "EdTech", exit: "Current Valuation", icon: "📚" },
  { name: "BigBasket", valuation: 3.0, founder: "Hari Menon", sector: "E-commerce", exit: "Acquired by Tata Digital (2021)", icon: "🛒" },
  { name: "Groww", valuation: 3.0, founder: "Lalit Keshre", sector: "Fintech", exit: "Current Valuation", icon: "📈" },
  { name: "MPL", valuation: 2.3, founder: "Sai Srinivas", sector: "Gaming", exit: "Current Valuation", icon: "🎮" },
  { name: "Zeta", valuation: 1.45, founder: "Bhavin Turakhia", sector: "Fintech", exit: "Current Valuation", icon: "💳" }
];

const ecosystemFeatures = [
  { icon: "🎯", title: "Flexible Attendance Policy", description: "Freedom to focus on entrepreneurship and innovation" },
  { icon: "🚀", title: "Startup Gap Year", description: "Official policy allowing gap year for startup building (2022)" },
  { icon: "🏢", title: "Technology Business Incubators", description: "Dedicated incubators across all campuses" },
  { icon: "💡", title: "Innovation Center", description: "Rakesh Kapoor Innovation Centre for startup support" },
  { icon: "👥", title: "Angel Network", description: "Angel investment network of successful alumni" },
  { icon: "⚡", title: "Accelerator Program", description: "Hybrid program for startup acceleration" }
];

const sectorData = [
  { sector: "Fintech", count: 3, color: "bg-blue-500" },
  { sector: "E-commerce/Food Tech", count: 2, color: "bg-green-500" },
  { sector: "SaaS/Enterprise Tech", count: 3, color: "bg-purple-500" },
  { sector: "EdTech", count: 2, color: "bg-yellow-500" },
  { sector: "B2B Commerce", count: 1, color: "bg-pink-500" },
  { sector: "Gaming", count: 1, color: "bg-red-500" },
  { sector: "Hardware/Manufacturing", count: 2, color: "bg-indigo-500" }
];

const acquisitionsData = [
  { company: "Hotmail", year: 1996, amount: "$400M", acquirer: "Microsoft", founder: "Sabeer Bhatia" },
  { company: "RedBus", year: 2013, amount: "$138M", acquirer: "Ibibo Group", founder: "Phanindra Sama" },
  { company: "SanDisk", year: 2016, amount: "$19B", acquirer: "Western Digital", founder: "Sanjay Mehrotra" },
  { company: "Media.net", year: 2016, amount: "$900M", acquirer: "Chinese Consortium", founder: "Divyank Turakhia" },
  { company: "BigBasket", year: 2021, amount: "Majority Stake", acquirer: "Tata Digital", founder: "Hari Menon" }
];

const timelineData = [
  { year: 1996, milestone: "Hotmail founded and sold to Microsoft", valuation: "$400M" },
  { year: 2004, milestone: "TBI established at BITS Pilani", valuation: "-" },
  { year: 2006, milestone: "RedBus founded", valuation: "-" },
  { year: 2013, milestone: "RedBus acquired for $138M", valuation: "$138M" },
  { year: 2016, milestone: "SanDisk sold for $19B, Media.net for $900M", valuation: "$19.9B" },
  { year: 2018, milestone: "Swiggy becomes unicorn", valuation: "$1B" },
  { year: 2021, milestone: "Multiple unicorns: Postman, Eruditus, OfBusiness", valuation: "$15B+" },
  { year: 2022, milestone: "BITS allows one-year startup gap", valuation: "-" },
  { year: 2023, milestone: "Rakesh Kapoor Innovation Centre opened", valuation: "-" },
  { year: 2024, milestone: "15 unicorns, $60B+ combined valuation", valuation: "$60B+" }
];

export default function PortfolioPage() {
  const [activePage, setActivePage] = useState('page1');

  const totalValuation = unicornsData.reduce((sum, u) => sum + u.valuation, 0);
  const totalSectorCount = sectorData.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button & Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <Link href="/founders" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="flex gap-2">
            <button
              onClick={() => setActivePage('page1')}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                activePage === 'page1' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              The Unicorn Factory
            </button>
            <button
              onClick={() => setActivePage('page2')}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                activePage === 'page2' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Ecosystem & Impact
            </button>
          </div>
        </div>
      </div>

      {/* Page 1: The Unicorn Factory */}
      {activePage === 'page1' && (
        <div>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-[#2E1F47] to-purple-900 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 
                className="text-3xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                BITS PILANI: THE UNICORN FACTORY
              </h1>
              <p className="text-lg md:text-xl text-purple-200 mb-10">
                15 Unicorns • $60+ Billion Combined Valuation • 1,500+ Startups
              </p>
              
              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
                {[
                  { number: "1,500+", label: "Total Startups" },
                  { number: "657", label: "Funded Startups" },
                  { number: "15", label: "Unicorns" },
                  { number: "$60B+", label: "Combined Valuation" },
                  { number: "8", label: "Major Acquisitions" },
                  { number: "30+", label: "Years of Success" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                    <div className="text-xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-xs md:text-sm text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Top 5 Unicorns Cards */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                Top 5 BITSian Unicorns
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {unicornsData.slice(0, 5).map((unicorn, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100 p-5 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-3">{unicorn.icon}</div>
                    <h3 className="text-lg font-bold text-[#2E1F47] mb-1">{unicorn.name}</h3>
                    <div className="text-2xl font-bold text-yellow-500 mb-2">${unicorn.valuation}B</div>
                    <div className="text-sm text-purple-600 mb-1">{unicorn.founder}</div>
                    <div className="text-xs text-gray-500">{unicorn.exit}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Unicorns by Valuation Chart */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                BITSian Unicorns by Valuation
              </h2>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="space-y-4">
                  {unicornsData.map((unicorn, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-24 md:w-32 text-sm font-medium text-[#2E1F47] truncate">{unicorn.name}</div>
                      <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-end px-3 transition-all duration-500"
                          style={{ width: `${(unicorn.valuation / 19) * 100}%` }}
                        >
                          <span className="text-white text-xs font-bold">${unicorn.valuation}B</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Acquisitions Timeline */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                Major Acquisitions Timeline
              </h2>
              
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-700 transform md:-translate-x-1/2"></div>
                
                <div className="space-y-6">
                  {acquisitionsData.map((item, idx) => (
                    <div key={idx} className={`relative flex items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold transform md:-translate-x-1/2 z-10">
                        {String(item.year).slice(-2)}
                      </div>
                      
                      <div className={`ml-12 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-4 border border-gray-100">
                          <div className="text-purple-600 font-bold text-sm">{item.year}</div>
                          <h3 className="text-lg font-bold text-[#2E1F47]">{item.company}</h3>
                          <p className="text-purple-600 text-sm">{item.founder}</p>
                          <p className="text-green-600 font-semibold text-sm">{item.amount} → {item.acquirer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Ecosystem Features */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                What Makes BITS Different
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecosystemFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-100">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-[#2E1F47] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Page 2: Ecosystem & Impact */}
      {activePage === 'page2' && (
        <div>
          {/* Geographic Diversity */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                Geographic Diversity of BITS Founders
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Tier 1 Cities</h3>
                  <div className="text-5xl font-bold mb-2">7</div>
                  <div className="text-blue-100">33.3% of founders</div>
                  <div className="mt-4 text-sm text-blue-100">Mumbai, Bangalore, Pune, Delhi, Chennai</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Tier 2 Cities</h3>
                  <div className="text-5xl font-bold mb-2">9</div>
                  <div className="text-yellow-100">42.8% of founders</div>
                  <div className="mt-4 text-sm text-yellow-100">Chandigarh, Jaipur, Vijayawada, Kanpur</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Tier 3 Cities</h3>
                  <div className="text-5xl font-bold mb-2">5</div>
                  <div className="text-green-100">23.8% of founders</div>
                  <div className="mt-4 text-sm text-green-100">Basti, Nizamabad, Bhubaneswar</div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 text-center border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-2">Key Insight</h3>
                <p className="text-purple-700">
                  Over 66% of successful BITSian entrepreneurs come from Tier 2 & 3 cities, 
                  showcasing BITS&apos;s role in democratizing entrepreneurship opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Sector Breakdown */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                Sector-wise Breakdown
              </h2>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="space-y-4">
                  {sectorData.map((sector, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-40 text-sm font-medium text-[#2E1F47]">{sector.sector}</div>
                      <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${sector.color} rounded-full flex items-center justify-end px-3`}
                          style={{ width: `${(sector.count / 3) * 100}%` }}
                        >
                          <span className="text-white text-xs font-bold">{sector.count}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <span className="text-gray-600">Total Companies: </span>
                  <span className="font-bold text-[#2E1F47]">{totalSectorCount}</span>
                </div>
              </div>
            </div>
          </section>

          {/* 30 Years Timeline */}
          <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                30 Years of Entrepreneurial Excellence
              </h2>
              
              <div className="relative overflow-x-auto pb-4">
                <div className="flex gap-4 min-w-max px-4">
                  {timelineData.map((item, idx) => (
                    <div key={idx} className="w-48 flex-shrink-0">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-4 border border-gray-100 h-full">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                        <p className="text-sm text-gray-700 mb-2">{item.milestone}</p>
                        {item.valuation !== "-" && (
                          <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">
                            {item.valuation}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">← Scroll horizontally to see full timeline →</p>
            </div>
          </section>

          {/* All Unicorns Grid */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
                style={{ fontFamily: lexend.style.fontFamily }}
              >
                All BITSian Unicorns
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {unicornsData.map((unicorn, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-3xl">{unicorn.icon}</span>
                      <span className="text-lg font-bold text-yellow-500">${unicorn.valuation}B</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E1F47] mb-1">{unicorn.name}</h3>
                    <p className="text-sm text-purple-600 mb-1">{unicorn.founder}</p>
                    <p className="text-xs text-gray-500">{unicorn.sector}</p>
                  </div>
                ))}
              </div>

              {/* Total Valuation */}
              <div className="mt-8 bg-gradient-to-r from-[#2E1F47] to-purple-700 rounded-xl p-6 text-center text-white">
                <h3 className="text-lg mb-2">Combined Valuation of Top 10 Unicorns</h3>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400">${totalValuation.toFixed(1)}B+</div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2E1F47] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-purple-200">BGIIES Founder Project</p>
          <p className="text-sm text-purple-300 mt-2">Data sourced from public records and alumni networks</p>
        </div>
      </footer>
    </div>
  );
}
