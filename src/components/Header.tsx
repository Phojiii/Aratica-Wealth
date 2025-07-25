'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBottomBarOpen, setIsBottomBarOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleBottomBar = () => setIsBottomBarOpen(!isBottomBarOpen);

  // 👇 Define dynamic nav links based on the current pathname
  const bottomNavLinks = (() => {
    if (pathname.includes('/loanandfunding')) {
      return [
        { href: '#equityreleaseloans', label: 'Equity Release Loans' },
        { href: '#unsecuredbusinessloans', label: 'Unsecured Business Loans' },
        { href: '#workingcapitalfacilities', label: 'Working Capital Facilities' },
        { href: '#tradefinancefacilities', label: 'Trade Finance Facilities' },
        { href: '#capexloans', label: 'Capex Loans' },
        { href: '#invoiceandlocalpurchaseorderloans', label: 'Invoice & LPO Loans' },
        { href: '#creditloans', label: 'Credit Loans' },
        { href: '#expansionloan', label: 'Expansion Loan' },
      ];
    }

    if (pathname.includes('/wealthmanagement')) {
      return [
        { href: '#services', label: 'Services' },
        { href: '#ourapproach', label: 'Our Approach' },
        { href: '#ourvalues', label: 'Our Values' },
        { href: '#ourclients', label: 'Our Clients' },
        { href: '#aboutus', label: 'About Us' },
        { href: '#contactus', label: 'Contact Us' },
      ];
    }

    if (pathname.includes('/investmentsolutions')){
      return [
        { href: '#portfoliomanagement', label: 'Portfolio Management' },
        { href: '#privateassets', label: 'Private Assets' },
        { href: '#Equity', label: 'Equity' },
        { href: '#Bonds', label: 'Bonds' },
        { href: '#fundselection', label: 'Fund Selection' },
      ];
    }

    // fallback for other pages (if needed)
    return [];
  })();

  return (
    <header className="main-header text-white">
      <div className="top-bar flex justify-between items-center p-4 relative z-50 container m-auto">
        {/* Left Section */}
        <div className="left flex items-center gap-4">
          <button id="menuToggle" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <select name="language" className="bg-black text-white border border-white rounded px-2">
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
      <div className={`fixed top-0 left-0 h-full w-full md:w-md bg-black text-white transform transition-transform duration-300 z-[9999] shadow-lg ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b border-white">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button onClick={toggleMenu} className="text-white text-2xl">&times;</button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <Link href="/" onClick={toggleMenu} className='px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out border-b-2'>Home</Link>
          <a href="#aboutus" onClick={toggleMenu} className='px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out border-b-2'>About Us</a>
          <Link href="/loanandfunding" onClick={toggleMenu} className='px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out border-b-2'>Loan & Funding</Link>
          <Link href="/investmentsolutions" onClick={toggleMenu} className='px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out border-b-2'>Investment Solutions</Link>
          <a href="#" onClick={toggleMenu} className='px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out border-b-2'>News & Media</a>
          <a href="#contactus" onClick={toggleMenu} className='px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out border-b-2'>Contact Us</a>
        </nav>
      </div>

      {/* Desktop Bottom Navigation */}
      {bottomNavLinks.length > 0 && (
        <div className="bottom-bar hidden md:flex flex-wrap justify-center gap-4 text-white py-3">
          {bottomNavLinks.map((item) => (
            <a key={item.href} href={item.href} className="px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out">
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Mobile Toggle Button */}
      {bottomNavLinks.length > 0 && (
        <button className="bottom-bar-toggle px-4 py-2 bg-black text-white font-semibold w-full md:hidden" onClick={toggleBottomBar}>
          Menu +
        </button>
      )}

      {/* Mobile Bottom Navigation */}
      {bottomNavLinks.length > 0 && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isBottomBarOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
          <div className="bottom-bar bg-black text-white py-3 px-4 space-y-2">
            {bottomNavLinks.map((item) => (
              <a key={item.href} href={item.href} className="block">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
