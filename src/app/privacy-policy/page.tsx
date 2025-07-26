'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import FixedModalButtons from '@/components/FixedModalButtons';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
      <>
      <Header/>
      <FixedModalButtons />
    <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row mt-12">
        
      <div className="container mx-auto px-4 lg:px-16 py-12">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-semibold">
        <span className="text-orange-500">Privacy Policy</span>
      </h2>

      <section className="space-y-8 text-base leading-relaxed">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Introduction</h3>
          <p>
            Aratica Wealth Management Ltd. (&#34;Aratica&#34;, &#34;we&#34;, &#34;our&#34;, or &#34;us&#34;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you visit our website <strong>aratica.pro</strong> or engage with our services.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Information We Collect</h3>
          <p>We may collect the following types of personal data:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Identity Data:</strong> Name, title, and date of birth</li>
            <li><strong>Contact Data:</strong> Email address, phone number, address</li>
            <li><strong>Financial Data:</strong> Investment goals, portfolio preferences (if shared)</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device info</li>
            <li><strong>Usage Data:</strong> How you interact with our website</li>
            <li><strong>Communication Data:</strong> Any messages or forms you submit</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">How We Collect Your Data</h3>
          <p>We collect your data through:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Forms submitted on our website</li>
            <li>Cookies and analytics tracking</li>
            <li>Third-party sources (e.g. social platforms, directories)</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">How We Use Your Data</h3>
          <p>We use your data to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries</li>
            <li>Send updates or newsletters (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Legal Basis for Processing</h3>
          <p>We rely on the following legal grounds to process your data:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Compliance with legal obligations</li>
            <li>Legitimate business interests</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Cookies</h3>
          <p>
            We use cookies to enhance your experience, analyze traffic, and personalize content. You can manage or disable cookies in your browser settings.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Sharing Your Data</h3>
          <p>We may share your data with:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Trusted service providers (e.g. hosting, CRM)</li>
            <li>Regulatory authorities (if legally required)</li>
            <li>Professional advisers (e.g. auditors, consultants)</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">International Transfers</h3>
          <p>
            If we transfer data outside the UK or EEA, we ensure it is protected by approved safeguards (e.g. Standard Contractual Clauses).
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Data Retention</h3>
          <p>
            We only keep your data for as long as necessary to fulfill the purposes outlined above, or as required by law. After that, we securely delete or anonymize it.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Your Rights</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the UK Information Commissioner’s Office (ICO)</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Data Security</h3>
          <p>
            We apply appropriate technical and organizational safeguards to protect your data, including encryption, access control, and secure hosting infrastructure.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Third-Party Links</h3>
          <p>
            This site may contain links to third-party websites. We are not responsible for their privacy practices or content. Please read their respective privacy policies.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[hsla(27,99%,49%)]">Changes to This Policy</h3>
          <p>
            We may occasionally update this Privacy Policy. Any changes will be posted on this page with a revised &#34;Effective Date&#34;.
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
