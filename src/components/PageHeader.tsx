'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PageHeaderProps {
  pageTitle?: string; // Optional: if not provided, breadcrumb won't show
}

export default function PageHeader({ pageTitle }: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="main-header sticky top-0 bg-black text-white shadow-md z-50 transition-all duration-300">
      <div className="top-bar flex justify-between items-center p-4 relative z-50 container m-auto">
        {/* Left Section */}
        <div className="left flex items-center gap-4">
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <select className="bg-black text-white border border-white rounded px-2">
            <option value="English">English</option>
            <option value="Deutsch">Deutsch</option>
          </select>
        </div>

        {/* Middle Logo */}
        <div className="middle">
          <Link href="/">
            <Image src="/trasnparent-logo.webp" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Right Section */}
        <div className="right flex gap-4">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 0 1 5.292 13.707l5 5a1 1 0 1 1-1.414 1.414l-5-5A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
            </svg>
          </button>
        </div>
      </div>

      <hr className="border-gray-900" />

      {/* Slide-in Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-md bg-black text-white transform transition-transform duration-300 z-[9999] shadow-lg ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-white">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button onClick={toggleMenu} className="text-white text-2xl">&times;</button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <a href="#aboutus" onClick={toggleMenu}>About Us</a>
          <Link href="/loanandfunding" onClick={toggleMenu}>Loan & Funding</Link>
          <Link href="/InvestmentSolutions" onClick={toggleMenu}>Investment Solutions</Link>
          <a href="#" onClick={toggleMenu}>News & Media</a>
          <a href="#contactus" onClick={toggleMenu}>Contact Us</a>
        </nav>
      </div>

      {/* Dynamic Breadcrumb */}
      {pageTitle && (
        <div className="bottom-bar hidden md:flex flex-wrap justify-center gap-4 text-white py-3">
          <Link href="/" className="px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300">Home</Link>
          <p className="px-4 py-2">{pageTitle}</p>
        </div>
      )}
    </header>
  );
}
