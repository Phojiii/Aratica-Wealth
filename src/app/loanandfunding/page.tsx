'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';
import FixedModalButtons from '@/components/FixedModalButtons';

export default function WealthManagementPage() {
  return (
    <>
    <Header/>
    <FixedModalButtons />
      <Image
        src="/Investment Header.webp"
        alt="Investment Header"
        width={1920}
        height={500}
        className="w-full h-auto page-banner"
      />
    <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row mt-12">
      <div className="container mx-auto px-4 lg:px-16 py-12">
        {/* Equity Release Loans */}
        <section id="equityreleaseloans" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Equity Release</span> Loans
          </h2>
          <p>
            These loans allow businesses to access the cash tied up in debt-free assets such as
            residential and commercial buildings, warehouses, labor camps, and malls, providing
            liquidity without selling the asset.
          </p>
        </section>

        {/* Unsecured Business Loans */}
        <section id="unsecuredbusinessloans" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Unsecured Business</span> Loans
          </h2>
          <p>
            These loans do not require collateral and are granted based on the borrower&#39;s
            creditworthiness. Since they pose a higher risk to lenders, they typically require a
            strong credit score and financial history.
          </p>
        </section>

        {/* Working Capital Facilities */}
        <section id="workingcapitalfacilities" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Working Capital</span> Facilities
          </h2>
          <p>
            This loan or overdraft is used to finance a company&#39;s daily operations. It helps
            businesses manage short-term cash flow needs rather than funding long-term assets or
            investments.
          </p>
        </section>

        {/* Trade Finance Facilities */}
        <section id="tradefinancefacilities" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Trade Finance</span> Facilities
          </h2>
          <p>
            These financial instruments help companies facilitate international trade. They cover a
            range of financial products that banks and lenders provide to make trade transactions
            more secure and efficient.
          </p>
        </section>

        {/* Capex Loans */}
        <section id="capexloans" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Capex</span> Loans
          </h2>
          <p>
            These funds help companies acquire, upgrade, and maintain physical assets such as
            property, buildings, technology, and equipment, allowing businesses to expand and
            modernize operations.
          </p>
        </section>

        {/* Invoice & Local Purchase Order Loans */}
        <section id="invoiceandlocalpurchaseorderloans" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Invoices and Local</span> Purchase Orders Loan
          </h2>
          <p className="mb-4">
            Funding the invoice amount and purchase orders with a value guarantee, without interest.
            It is considered a way to maintain the companies&#39; liquidity so that the fund finances
            the value of the invoice or purchase order until the receipt of the goods or service or
            collection, and the payment is through single bullet payment/installments without any
            interest according to the term of the contract mentioned in the invoice or purchase
            orders.
          </p>

          <h4 className="text-xl font-semibold mb-2 text-orange-500">Service Limitations:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Funding Amount: The maximum limit is 10,000,000 Euro.</li>
            <li>Grace period: Subject to the supplier/customer payment terms</li>
            <li>The trade license of the company is valid</li>
            <li>The trade license of the supplier/suppliers is valid</li>
            <li>
              The minimum financial contribution of the applicant to the funding shall be 20%.
            </li>
            <li>
              Its assets will be mortgaged to the Integrated Registries Company for the registration
              of movable and pledged assets.
            </li>
            <li>
              Submitting single/multiple installment checks + a security check for the finance
              amount (according to the fund&#39;s policy).
            </li>
            <li>
              Signing an agreement with the institution in the presence of a notary public.
            </li>
            <li>The company must cover the cost of the notary.</li>
          </ul>
        </section>

        {/* Credit Loans */}
        <section id="creditloans" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Credit</span> Loan
          </h2>
          <p className="mb-4">
            Entrepreneurs can obtain high-value credit loans with a value of more than one million
            dirhams and not exceeding 3 million through a bank guarantee from one of our bank and
            financial institution partners. Low interest, in addition to a grace period for loan
            repayment, enables Aratica members to cover costs and generate profits.
          </p>

          <h4 className="text-xl font-semibold mb-2 text-orange-500">Customer Journey Steps</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Sign up on the Fund&apos;s website: <a href="https://aratica.pro/" className="underline text-blue-400">Aratica.pro</a>
            </li>
            <li>
              Initial approval of the request and guiding the applicant in submitting the funding
              request.
            </li>
            <li>
              The applicant meets with the fund team to review the work plan, the financial plan,
              and related documents.
            </li>
            <li>The applicant uploads the documents through the fund&apos;s website.</li>
            <li>Field visit to view the existing project (if required).</li>
            <li>Presenting the idea/ request to the credit committee.</li>
            <li>
              The applicant signs the financing contract and the payment schedule, in addition to
              other documents, and obtains copies of them.
            </li>
          </ul>
          <h6 className="mt-4">
            <strong>Expecting Wait Time:</strong> <span className="text-orange-500">48 Hours</span>.
          </h6>

          <h4 className="text-xl font-semibold mt-6 mb-2 text-orange-500">Beneficiary</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Individuals Category - New Entrepreneurs from Citizens.</li>
            <li>Members Category - National Projects Owners.</li>
          </ul>
        </section>

        {/* Expansion Loan */}
        <section id="expansionloan" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="text-orange-500">Expansion</span> Loan
          </h2>
          <p>
            It is a loan designed to encourage and motivate entrepreneurs to grow/expand in
            companies/sectors (related to F&amp;B activity only) which they see as having potential
            for growth and satisfactory returns in the long term.
          </p>
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