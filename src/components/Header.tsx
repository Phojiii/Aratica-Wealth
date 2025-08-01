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

    if (pathname.includes('/')) {
      return [
        { href: '#services', label: 'Services' },
        { href: '#ourapproach', label: 'Our Approach' },
        { href: '#ourvalues', label: 'Our Values' },
        { href: '#ourclients', label: 'Our Clients' },
        { href: '#aboutus', label: 'About Us' },
        { href: '#contactus', label: 'Contact Us' },
      ];
    }

    if (pathname.includes('/investmentsolutions')) {
      return [
        { href: '#portfoliomanagement', label: 'Portfolio Management' },
        { href: '#privateassets', label: 'Private Assets' },
        { href: '#Equity', label: 'Equity' },
        { href: '#Bonds', label: 'Bonds' },
        { href: '#fundselection', label: 'Fund Selection' },
      ];
    }

    return [];
  })();

  return (
    <header className="main-header sticky top-0 bg-[url(/texture-repeat.jpg)] text-white shadow-md z-50 transition-all duration-300">
      <div className="top-bar flex justify-between items-center p-4 container mx-auto relative">
        <div className="left flex items-center gap-4 md:w-1/3 w-auto">
          <button id="menuToggle" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>
        </div>

        <div className="middle flex justify-center md:w-1/3 w-full">
          <Link href="/" className="flex justify-center">
            <Image src="/trasnparent-logo.webp" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        <div className="right flex items-center justify-end gap-4 md:w-1/3 w-auto">
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

      <hr className="border-[#333]" />

      {/* Slide-in Side Panel */}
      <div className={`fixed top-0 left-0 h-full w-full md:w-md  text-white transform transition-transform duration-300 z-[9999] shadow-lg ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b border-b-[#333]">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button onClick={toggleMenu} className="text-white text-2xl">&times;</button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <a href="#aboutus" onClick={toggleMenu}>About Us</a>
          <Link href="/loanandfunding" onClick={toggleMenu}>Loan & Funding</Link>
          <Link href="/investmentsolutions" onClick={toggleMenu}>Investment Solutions</Link>
          <a href="/newsandmedia">News & Media</a>
          <a href="#contactus" onClick={toggleMenu}>Contact Us</a>
          <select name="language" className="bg-black text-white border border-white rounded px-2 mt-4">
            <option value="English">English</option>
            <option value="Deutsch">Deutsch</option>
          </select>
        </nav>
      </div>

      {bottomNavLinks.length > 0 && (
        <>
          <div className="bottom-bar hidden md:flex flex-wrap justify-center gap-4 text-white py-3 transition-all duration-300 border-b border-b-[#333]">
            {bottomNavLinks.map((item) => (
              <a key={item.href} href={item.href} className="px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-orange-500 transition-colors duration-300">{item.label}</a>
            ))}
          </div>

          <button className="bottom-bar-toggle px-4 py-2 bg-black text-white w-full md:hidden" onClick={toggleBottomBar}>
            Menu +
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isBottomBarOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bottom-bar bg-black text-white py-3 px-4 space-y-2">
              {bottomNavLinks.map((item) => (
                <a key={item.href} href={item.href} className="block hover:text-orange-500 transition-colors">{item.label}</a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
