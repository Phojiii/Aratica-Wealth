// app/terms-and-conditions/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import FixedModalButtons from '@/components/FixedModalButtons';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';

export default function TermsAndConditionsPage() {
  return (
        <>
        <Header/>
        <FixedModalButtons />
    <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row mt-12">
        
      <div className="container mx-auto px-4 lg:px-16 py-12">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-semibold">
        <span className="text-orange-500">Terms</span> & <span className="text-orange-500">Conditions</span>
      </h2>

      <section className="space-y-8 text-base leading-relaxed">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Acceptance of Terms</h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by these Terms and Conditions, our Privacy Policy, and any other legal notices published on this site. If you do not agree, please do not use the site.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">About Aratica</h3>
          <p>
            Aratica Wealth Management Ltd. (&#34;Aratica&#34;) is a private wealth management company providing financial advisory, investment planning, and related services to individuals and institutions. All content provided on this website is for informational purposes only and does not constitute financial advice.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Use of the Website</h3>
          <p>
            You agree to use the website only for lawful purposes and in a way that does not infringe on the rights of, restrict, or inhibit the use and enjoyment of the website by any third party.
          </p>
          <p className="mt-2">You may not use this website:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>For any fraudulent purposes</li>
            <li>To solicit others to perform or participate in any unlawful acts</li>
            <li>To violate any international, federal, provincial, or local regulations or laws</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">No Financial Advice</h3>
          <p>
            The content on aratica.pro is for informational purposes only and does not constitute financial, investment, tax, or legal advice. You should consult with a licensed professional for advice tailored to your situation.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Intellectual Property</h3>
          <p>
            All content on this website—including text, images, graphics, logos, and trademarks—is the property of Aratica Wealth Management Ltd. and is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any content without written permission from Aratica.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, Aratica shall not be liable for any direct, indirect, incidental, or consequential damages that result from the use of, or inability to use, the website or the materials on the website.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">External Links</h3>
          <p>
            This website may contain links to third-party websites. Aratica is not responsible for the content or practices of any linked websites and inclusion of a link does not imply endorsement.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Privacy</h3>
          <p>
            Please refer to our{' '}
            <a href="/privacypolicy" className="underline text-orange-500 hover:text-white transition">
              Privacy Policy
            </a>{' '}
            for information on how we collect, use, and protect your personal data.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Changes to These Terms</h3>
          <p>
            Aratica reserves the right to change these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of the site constitutes acceptance of those changes.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Governing Law</h3>
          <p>
            These Terms and Conditions are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of London, United Kingdom.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Contact Us</h3>
          <div className="mt-4 space-y-2">
            <p>
              <a href="tel:+447700162142" className="text-orange-500 hover:underline">
                +44 7700 162142
              </a>
            </p>
            <p>
              <a href="mailto:info@aratica.org" className="text-orange-500 hover:underline">
                info@aratica.org
              </a>
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/LCqvmGjCHbJReskG7"
                className="text-orange-500 hover:underline"
                target="_blank"
              >
                85 Great Portland Street, First Floor, London, United Kingdom
              </a>
            </p>
          </div>
        </div>
      </section>
      </div>
      <aside className="w-full lg:w-1/4 mt-10 lg:mt-0 sticky-sidebar relative lg:sticky top-0 h-fit">
          <h2 className="text-2xl font-semibold mb-3 mt-4">
            Let&#39;s <span className="text-primary text-[hsla(27,99%,49%)]">Talk</span>
          </h2>
          <p className="mb-6 text-sm">
            Are you looking for tailor-made investment solutions?... Get in touch with one of our experts.
          </p>
          <button className="rounded-md p-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-[hsla(27,99%,49%,0.15)] hover:bg-[hsla(27,99%,49%,0.5)]">Contact Us</button>

          <h2 className="text-2xl font-semibold mb-3 mt-4">
            Related <span className="text-primary text-[hsla(27,99%,49%)]">Services</span>
          </h2>
          <nav className="flex flex-col gap-3 mt-5 text-[hsla(27,99%,49%)]">
            {[
              { name: 'Wealth Planning', link: '/wealthplanning' },
              { name: 'Wealth Management', link: '/wealthmanagement' },
              { name: 'Multi Family Office', link: '/multifamilyoffice.html' },
              { name: 'Private Client', link: '/privateclients.html' },
              { name: 'Institutional Clients', link: '/institutionalclients.html' },
              { name: 'Asset Management', link: '/assetmanagement.html' },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                className="flex justify-between items-center text-sm text-primary border-b border-white/10 pb-2 hover:text-white relative group  transition-all duration-500 ease-in-out"
              >
                {service.name}
                <Image src="/arrow-right-up.svg" alt={service.name} width={14} height={14} />
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500"></span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    <ContactSection />
    <SocialIcons />
    <Footer />
    </>
  );
}
