'use client';

import { useState } from 'react';

export default function AboutUsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="aboutus" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-primary text-[hsla(27,99%,49%)]">About</span> Us
        </h2>

        <p className="mb-4 text-base text-white">
          At Aratica, we are committed to empowering entrepreneurs and businesses across the UAE through innovative and flexible funding solutions. Our mission is to bridge the gap between ambition and financial access, offering tailored loan products that support business growth, expansion, and sustainability.
        </p>

        {isExpanded && (
          <div className="pl-0 border-0 space-y-4">
            <p>We offer a wide range of financial services, including Equity Release Loans, Unsecured Business Loans, Working Capital Facilities, Trade Finance, Capex Loans, and Expansion Loans. For companies needing liquidity without high costs, we provide interest-free Invoice and Local Purchase Order Loans with funding up to €10 million designed to keep operations smooth while awaiting customer payments or goods delivery.</p>
            <p>Our Credit Loans support national entrepreneurs with high-value funding (€ 1M-3M) through bank guarantees and competitive terms. Additionally, we offer specialized Expansion Loans exclusively for F&B sector growth, helping UAE nationals tap into long-term opportunities.</p>
            <p>Through a transparent and digitized journey at Aratica, applicants receive guidance from initial approval to final disbursement—with a typical processing time of just 48 hours. We value transparency, simplicity, and security, requiring valid trade licenses, a 20% minimum contribution, and proper asset registration to ensure responsible lending.</p>
            <p>Whether you&#39;re starting a new venture or scaling your current business, Aratica is your trusted funding partner. We&#39;re not just offering capital, we&#39;re building the foundation for your success.</p>
            <p><strong>Aratica — Fueling Ambitions. Powering Progress.</strong></p>
          </div>
        )}

        
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`relative inline-block text-sm text-white mb-4 transition-transform duration-500 delay-200 transform translate-y-1/2 hover:translate-y-1/2 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full`}
            id="readMoreBtn"
            >
            {isExpanded ? 'Read Less...' : 'Read More...'}
            </button>
      </div>
    </section>
  );
}
