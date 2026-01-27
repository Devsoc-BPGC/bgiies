'use client';

import React from 'react';
import Link from 'next/link';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

const projects = [
  {
    title: "BITS Pilani Entrepreneurship Directory",
    description: "Comprehensive directory of startups founded by BITS Pilani alumni",
    href: "/founders/projects/founder-projects/directory",
    icon: "📊"
  },
  {
    title: "BITS Pilani Portfolio",
    description: "Interactive portfolio showcasing BITS entrepreneurship ecosystem",
    href: "/founders/projects/founder-projects/portfolio",
    icon: "🚀"
  }
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-bold text-[#2E1F47] mb-4"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            Founder Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore innovative projects created by our talented founders at BGIIES
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, projectIndex) => (
            <Link 
              key={projectIndex} 
              href={project.href}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full transform hover:-translate-y-2">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#2E1F47] to-purple-600 p-6">
                  <span className="text-4xl">{project.icon}</span>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold text-[#2E1F47] mb-3 group-hover:text-purple-600 transition-colors"
                    style={{ fontFamily: lexend.style.fontFamily }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* View Project Button */}
                  <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700">
                    <span>View Project</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center py-12 bg-white rounded-2xl shadow-md border border-dashed border-gray-300">
          <div className="text-5xl mb-4">🎓</div>
          <h3 
            className="text-xl font-semibold text-gray-400 mb-2"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            More Founders Coming Soon
          </h3>
          <p className="text-gray-400 text-sm">
            We&apos;re continuously adding more founder projects. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
