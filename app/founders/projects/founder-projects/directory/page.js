'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

// Startup data
const startupsData = [
  {
    name: "RedBus",
    founders: ["Phanindra Sama", "Charan Padmaraju", "Sudhakar Pasupunuri"],
    origin_city: "Tadapaikal, Nizamabad",
    tier: "Tier 3",
    sector: "TravelTech",
    valuation: "$138M (exit)",
    status: "Acquired",
    exit_details: "Acquired by Ibibo Group, 2013"
  },
  {
    name: "BigBasket",
    founders: ["Hari Menon", "V.S. Sudhakar", "Vipul Parekh", "Abhinay Choudhari", "V.S. Ramesh"],
    origin_city: "Mumbai",
    tier: "Tier 1",
    sector: "E-commerce",
    valuation: "Undisclosed (majority stake)",
    status: "Acquired",
    exit_details: "Majority stake acquired by Tata Digital, 2021"
  },
  {
    name: "Strand Life Sciences",
    founders: ["Vijay Chandru", "Ramesh Hariharan", "H S Sudarshan"],
    origin_city: "Bangalore",
    tier: "Tier 1",
    sector: "Biotech",
    valuation: "Not disclosed",
    status: "Active",
    exit_details: "-"
  },
  {
    name: "Sierra Atlantic",
    founders: ["Raju Reddy"],
    origin_city: "Nizamabad",
    tier: "Tier 3",
    sector: "IT Services",
    valuation: "Undisclosed",
    status: "Acquired",
    exit_details: "Acquired by Hitachi Consulting, 2010"
  },
  {
    name: "Hotmail",
    founders: ["Sabeer Bhatia", "Jack Smith"],
    origin_city: "Chandigarh",
    tier: "Tier 2",
    sector: "Email/Internet",
    valuation: "$400M (exit)",
    status: "Acquired",
    exit_details: "Acquired by Microsoft, 1998"
  },
  {
    name: "i-flex Solutions",
    founders: ["Rajesh Hukku"],
    origin_city: "Jaipur/Jodhpur",
    tier: "Tier 2",
    sector: "FinTech Software",
    valuation: "Undisclosed",
    status: "Acquired",
    exit_details: "Majority stake acquired by Oracle, 2005"
  },
  {
    name: "SanDisk",
    founders: ["Sanjay Mehrotra", "Eli Harari", "Jack Yuan"],
    origin_city: "Kanpur",
    tier: "Tier 2",
    sector: "Semiconductors",
    valuation: "$19B (exit)",
    status: "Acquired",
    exit_details: "Acquired by Western Digital, 2016"
  },
  {
    name: "Swiggy",
    founders: ["Sriharsha Majety", "Nandan Reddy", "Rahul Jaimini"],
    origin_city: "Vijayawada",
    tier: "Tier 2",
    sector: "Food Delivery",
    valuation: "$11B+",
    status: "Unicorn",
    exit_details: "-"
  },
  {
    name: "Groww",
    founders: ["Ishan Bansal", "Lalit Keshre", "Harsh Jain", "Neeraj Singh"],
    origin_city: "Noida",
    tier: "Tier 1",
    sector: "FinTech",
    valuation: "$3B+ (est.)",
    status: "Unicorn",
    exit_details: "-"
  },
  {
    name: "Eruditus/Emeritus",
    founders: ["Ashwin Damera", "Chaitanya Kalipatnapu"],
    origin_city: "Chennai",
    tier: "Tier 1",
    sector: "EdTech",
    valuation: "$3.2B",
    status: "Unicorn",
    exit_details: "-"
  },
  {
    name: "OfBusiness",
    founders: ["Asish Mohapatra", "Bhuvan Gupta", "Ruchi Kalra"],
    origin_city: "Bhubaneswar/Udhampur",
    tier: "Tier 2/3",
    sector: "B2B Commerce",
    valuation: "$5B",
    status: "Unicorn",
    exit_details: "IPO planned 2025"
  },
  {
    name: "Postman",
    founders: ["Abhinav Asthana", "Ankit Sobti", "Abhijit Kane"],
    origin_city: "Basti",
    tier: "Tier 3",
    sector: "SaaS/API",
    valuation: "$7.5B",
    status: "Unicorn",
    exit_details: "-"
  },
  {
    name: "MPL",
    founders: ["Shubham Malhotra", "Sai Srinivas"],
    origin_city: "Delhi",
    tier: "Tier 1",
    sector: "Gaming",
    valuation: "$2.3B",
    status: "Unicorn",
    exit_details: "-"
  },
  {
    name: "Onida (MIRC Electronics)",
    founders: ["Gulu Mirchandani", "Vijay Mansukhani"],
    origin_city: "Delhi",
    tier: "Tier 1",
    sector: "Consumer Electronics",
    valuation: "Public listed",
    status: "Listed",
    exit_details: "-"
  },
  {
    name: "FalconX",
    founders: ["Raghu Yarlagadda", "Prabhakar Reddy"],
    origin_city: "Warangal",
    tier: "Tier 2",
    sector: "FinTech/Crypto",
    valuation: "$8B",
    status: "Unicorn",
    exit_details: "-"
  },
  {
    name: "Media.net",
    founders: ["Divyank Turakhia"],
    origin_city: "Mumbai",
    tier: "Tier 1",
    sector: "AdTech",
    valuation: "$900M (exit)",
    status: "Acquired",
    exit_details: "Acquired by Chinese consortium, 2016"
  },
  {
    name: "Zeta",
    founders: ["Bhavin Turakhia", "Ramki Gaddipati"],
    origin_city: "Mumbai",
    tier: "Tier 1",
    sector: "FinTech",
    valuation: "$1.45B",
    status: "Unicorn",
    exit_details: "-"
  }
];

// Unicorn data for the hero section
const unicorns = [
  { name: "SanDisk", valuation: "$19B Exit", founder: "Sanjay Mehrotra", description: "Semiconductors - Flash memory pioneer", origin: "Kanpur (Tier 2)" },
  { name: "Swiggy", valuation: "$11B+ Unicorn", founder: "Sriharsha Majety", description: "Food Delivery - Market leader", origin: "Vijayawada (Tier 2)" },
  { name: "Postman", valuation: "$7.5B Unicorn", founder: "Abhinav Asthana", description: "SaaS/API - Development platform", origin: "Basti (Tier 3)" },
  { name: "OfBusiness", valuation: "$5B Unicorn", founder: "Asish Mohapatra, Bhuvan Gupta", description: "B2B Commerce - SME platform", origin: "Bhubaneswar/Udhampur (Tier 2/3)" },
  { name: "Eruditus", valuation: "$3.2B Unicorn", founder: "Ashwin Damera", description: "EdTech - Executive education", origin: "Mumbai (Tier 1)" },
  { name: "Groww", valuation: "$3B+ Unicorn", founder: "Lalit Keshre", description: "FinTech - Investment platform", origin: "Noida (Tier 1)" }
];

// Acquisitions timeline
const acquisitions = [
  { year: "1998", company: "Hotmail", founder: "Sabeer Bhatia", details: "$400M → Microsoft", description: "World's first free web-based email service" },
  { year: "2005", company: "i-flex Solutions", founder: "Rajesh Hukku", details: "Majority stake → Oracle", description: "Banking software solutions" },
  { year: "2009", company: "LogicVision", founder: "Vinod Agarwal", details: "Acquired by Synopsys", description: "Electronic design automation" },
  { year: "2010", company: "Sierra Atlantic", founder: "Raju Reddy", details: "Acquired by Hitachi Consulting", description: "IT services company" },
  { year: "2013", company: "RedBus", founder: "Phanindra Sama", details: "$138M → Ibibo Group", description: "India's first online bus booking platform" },
  { year: "2016", company: "SanDisk", founder: "Sanjay Mehrotra", details: "$19B → Western Digital", description: "Flash memory pioneer - largest BITSian exit" },
  { year: "2016", company: "Media.net", founder: "Divyank Turakhia", details: "$900M → Chinese consortium", description: "Contextual advertising platform" },
  { year: "2021", company: "BigBasket", founder: "Hari Menon", details: "Majority stake → Tata Digital", description: "India's largest online grocery platform" }
];

// Unique sectors for filter
const sectors = [...new Set(startupsData.map(s => s.sector))].sort();

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredStartups = useMemo(() => {
    return startupsData.filter(startup => {
      const matchesSearch = searchTerm === '' || 
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.founders.some(f => f.toLowerCase().includes(searchTerm.toLowerCase())) ||
        startup.sector.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTier = tierFilter === '' || startup.tier.includes(tierFilter);
      const matchesSector = sectorFilter === '' || startup.sector === sectorFilter;
      const matchesStatus = statusFilter === '' || startup.status === statusFilter;
      
      return matchesSearch && matchesTier && matchesSector && matchesStatus;
    });
  }, [searchTerm, tierFilter, sectorFilter, statusFilter]);

  const displayedStartups = showAll ? filteredStartups : filteredStartups.slice(0, 10);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Unicorn': return 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white';
      case 'Acquired': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Listed': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'Active': return 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white';
      case 'Closed': return 'bg-gradient-to-r from-red-500 to-red-600 text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <Link href="/founders" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Founder Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E1F47] to-purple-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            BITS Pilani: India&apos;s Entrepreneurship Powerhouse
          </h1>
          <p className="text-lg md:text-xl text-purple-200 mb-10">
            Pioneering innovation and building unicorns for over three decades
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-yellow-400">1900</div>
              <div className="text-sm md:text-base text-purple-200">Startups</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-yellow-400">$60B+</div>
              <div className="text-sm md:text-base text-purple-200">Combined Valuation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-yellow-400">15</div>
              <div className="text-sm md:text-base text-purple-200">Unicorns</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-yellow-400">113K+</div>
              <div className="text-sm md:text-base text-purple-200">Jobs Produced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unicorns Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            Unicorns & Major Exits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unicorns.map((unicorn, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#2E1F47]">{unicorn.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      unicorn.valuation.includes('Exit') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {unicorn.valuation}
                    </span>
                  </div>
                  <p className="text-purple-600 font-medium mb-2">Founder: {unicorn.founder}</p>
                  <p className="text-gray-600 text-sm mb-2">{unicorn.description}</p>
                  <p className="text-gray-500 text-sm">Origin: {unicorn.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Directory */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            Complete Startups Directory
          </h2>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search startups, founders, sectors..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value)}
              >
                <option value="">All Tiers</option>
                <option value="Tier 1">Tier 1</option>
                <option value="Tier 2">Tier 2</option>
                <option value="Tier 3">Tier 3</option>
              </select>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
              >
                <option value="">All Sectors</option>
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Unicorn">Unicorn</option>
                <option value="Acquired">Acquired</option>
                <option value="Listed">Listed</option>
                <option value="Active">Active</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#2E1F47] to-purple-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Founders</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold hidden lg:table-cell">Origin (Tier)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Sector</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Valuation</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {displayedStartups.map((startup, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-[#2E1F47]">{startup.name}</div>
                        <div className="text-xs text-gray-500 md:hidden">{startup.founders[0]}{startup.founders.length > 1 && ` +${startup.founders.length - 1}`}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 hidden md:table-cell">
                        {startup.founders.slice(0, 2).join(', ')}{startup.founders.length > 2 && ` +${startup.founders.length - 2}`}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 hidden lg:table-cell">
                        {startup.origin_city} ({startup.tier})
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 hidden md:table-cell">{startup.sector}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{startup.valuation}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(startup.status)}`}>
                          {startup.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Show More Button */}
            {filteredStartups.length > 10 && (
              <div className="p-4 text-center border-t border-gray-100">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  {showAll ? 'Show Less' : `View All ${filteredStartups.length} Startups`}
                </button>
              </div>
            )}
            
            <div className="px-6 py-3 bg-gray-50 text-sm text-gray-500">
              {filteredStartups.length} startups found
            </div>
          </div>
        </div>
      </section>

      {/* Acquisitions Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            Major Acquisitions Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-700 transform md:-translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {acquisitions.map((item, index) => (
                <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Year Badge */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold transform md:-translate-x-1/2 z-10">
                    {item.year.slice(-2)}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="text-purple-600 font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="text-lg font-bold text-[#2E1F47] mb-1">{item.company}</h3>
                      <p className="text-purple-600 text-sm mb-1">{item.founder}</p>
                      <p className="text-green-600 font-semibold text-sm mb-2">{item.details}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-bold text-[#2E1F47] text-center mb-10"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            Geographic Distribution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Tier 1 Cities</h3>
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-blue-100 text-sm">33.3% of founders</div>
              <div className="mt-4 text-sm">Mumbai, Bangalore, Pune, Delhi, Chennai, Noida</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Tier 2 Cities</h3>
              <div className="text-4xl font-bold mb-2">9</div>
              <div className="text-yellow-100 text-sm">42.8% of founders</div>
              <div className="mt-4 text-sm">Chandigarh, Jaipur, Vijayawada, Kanpur, Warangal</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Tier 3 Cities</h3>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-green-100 text-sm">23.8% of founders</div>
              <div className="mt-4 text-sm">Basti, Nizamabad, Bhubaneswar, Udhampur</div>
            </div>
          </div>
        </div>
      </section>

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
