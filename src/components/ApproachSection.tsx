'use client';

import { useState } from 'react';

const OurApproachSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="ourapproach" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-primary text-[hsla(27,99%,49%)]">Our</span> Approach
        </h2>

        <p className="mb-4">
          Personal relationships are the foundation of our wealth management approach. Our bankers get to know their clients well, understanding their unique personal and professional situations and their personal and financial goals by spending time with them in order to design and implement personalised private banking strategies.
        </p>

        {isExpanded && (
          <div className="transition-all duration-500 ease-in-out">
            <p className="mb-4">
              At a time when many are opting for standardised offerings within private banking, we believe in personal relationships and bespoke investment solutions, powered by cutting-edge technology. This is our strength, we are bespoke solution providers, we are advisors not sellers.
            </p>
            <p className="mb-4">
              In our view, private banking is about helping our clients achieve their goals and realise their dreams. Are they thinking of moving abroad? Are they going to sell their company? Are they looking to retire early? Based on our client&#39;s goals, we reassess their wealth architecture and make adjustments over time to preserve and grow their assets for the future. We operate with a long-term perspective, ensuring stability and continuity, and we deeply value the trust our clients place in us, many of whom have been with us for many generations.
            </p>
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
};

export default OurApproachSection;
