'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';
import FixedModalButtons from '@/components/FixedModalButtons';

export default function WealthPlanningPage() {
  return (
    <>
    <PageHeader pageTitle="Wealth Planning" />
    <FixedModalButtons />
    <Image src="/Investment Header.webp" alt="Investment Banner" width={1920} height={600} className="w-full h-auto object-cover page-banner" />

      <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row mt-12 text-justify">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-9/12 lg:pr-6">
            <section>
              <h2 className="mb-4 text-3xl font-semibold"><span className="text-orange-500">Wealth</span> Planning</h2>
              <p className="mb-4">
                At Aratica Wealth, managing wealth is not just about building a portfolio—it&#39;s about understanding the full picture. We take a comprehensive, forward-thinking approach that is both global in perspective and deeply personalized to your life.
              </p>
              <p className="mb-4">Our process begins by getting to know you—your family, your career, and your long-term goals. We take the time to assess your complete financial landscape so we can design solutions that are aligned with your personal circumstances, tax considerations, and country of residence.</p>
              <p className="mb-4">We go beyond day-to-day investment decisions. Whether you&#39;re preparing to sell a business, planning a major life event, or thinking about generational wealth transfer, we help you structure your assets with foresight and flexibility—always ensuring that those who matter most to you are protected.</p>
              <p className="mb-4">At Aratica Wealth, we don&#39;t just manage capital—we help you shape a lasting legacy.</p>
              <p className="italic border-y-2 border-dashed border-gray-700 py-6 text-center max-w-3xl mx-auto text-sm md:text-base">
                <span className="text-3xl text-orange-500">&#34;</span>Our wealth planners are dedicated exclusively to the service of our clients
                <span className="text-3xl text-orange-500">&#34;</span>
              </p>

              {/* First Row */}
              <div className="relative">
                <div className="flex flex-col md:flex-row gap-6 my-8">
                  <div className="w-full md:w-3/4 space-y-4">
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Global Knowledge,</span> Local Expertise.</h4>
                    <p>At Aratica Wealth, our team consists of experienced professionals with deep expertise across the UAE, Europe, and other key international jurisdictions. No matter where you are based, our wealth planners understand the local tax laws, legal frameworks, and cross-border complexities that impact your financial decisions.</p>
                    <p>We offer wealth planning services through a trusted combination of our in-house specialists and a network of external partners. Working in close collaboration with your personal advisors, we ensure that every solution is aligned with your specific circumstances—both locally and globally.</p>
                    <p>At Aratica, we deliver clarity and confidence in an increasingly interconnected world.</p>

                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Family</span> Governance</h4>
                    <p>At Aratica Wealth, we understand the complexities that come with managing family wealth across generations. As a privately held, independent firm, we share the entrepreneurial spirit of the families we serve. Supporting families in structuring, preserving, and passing on their wealth is at the heart of what we do.</p>
                    <p>We offer dedicated guidance and educational seminars on key issues facing family-run enterprises—such as governance frameworks, succession strategies, and intergenerational planning—helping you build clarity, cohesion, and continuity across your family&#39;s legacy.</p>

                    <h4 className="text-xl font-semibold"><span>Inheritance</span> & <span className="text-orange-500">Succession</span> Planning</h4>
                    <p>Passing on wealth is more than a transaction—it&#39;s a deeply personal transition. At Aratica Wealth, we help you plan for the future with care, foresight, and precision.</p>
                    <p>Whether you&#39;re arranging lifetime gifts, defining testamentary wishes, or selecting the most appropriate succession planning vehicles, we work to ensure that your wealth is aligned with your objectives while fully addressing the legal, tax, and cross-border implications involved. Our goal is to give you peace of mind—knowing that what you&#39;ve built will be passed on exactly as you intend.</p>
                  </div>
                  <div className="w-full md:w-1/2 sticky top-5 h-fit">
                    <Image src="/wealth-planning-image.webp" alt="Wealth Planning" width={500} height={500} className="mx-auto" />
                  </div>
                </div>
              </div>

              {/* Second Quote */}
              <p className="italic border-y-2 border-dashed border-gray-700 py-6 text-center max-w-3xl mx-auto text-sm md:text-base">
                <span className="text-3xl text-orange-500">&#34;</span>We help you to ensure a smooth transition of wealth from one generation to the next
                <span className="text-3xl text-orange-500">&#34;</span>
              </p>

              {/* Second Row */}
              <div className="relative">
                <div className="flex flex-col md:flex-row gap-6 my-8">
                  <div className="w-full md:w-3/4 space-y-4">
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Relocation</span> Advisory</h4>
                    <p>Relocating to a new country can significantly impact your financial and legal situation. At Aratica Wealth, we help you assess the personal, legal, and tax implications of a move—before you commit. If you decide to relocate, we ensure your assets are structured in compliance with both the departure and destination jurisdictions, and we support you with any administrative steps needed to facilitate a smooth transition.</p>
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Financial</span> Planning</h4>
                    <p>We take a comprehensive approach to organizing your wealth around your present needs and future goals. Our financial planning begins with a detailed diagnostic of your assets, liabilities, professional journey, and private aspirations. This allows us to manage your liquid assets efficiently and track the performance and growth of your wealth over time.</p>
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Pension</span> Provision</h4>
                    <p>Planning for retirement is an essential part of your broader financial strategy. At Aratica Wealth, we help you set up pension solutions that align with your long-term objectives. By integrating your pension provision with your wider asset base, we aim to optimize returns and reduce your overall tax exposure while safeguarding your financial future.</p>
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Tax Filing</span> Support</h4>
                    <p>We assist our clients with tax filing requirements to ensure full compliance and peace of mind. This includes preparing and submitting tax returns for applicable jurisdictions. For clients with cross-border obligations, such as those residing in France, we also support the completion of required monthly declarations on dividends and interest payments.</p>
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Fiduciary</span> & <span className="text-orange-500">Trust</span> Services</h4>
                    <p>Whether you are looking to establish a legal entity, trust, or philanthropic foundation, Aratica Wealth offers end-to-end fiduciary support. We assist with the creation and ongoing administration of companies, charitable organizations, and private structures. Our team handles accounting, board coordination, regulatory tasks, and liaison with external advisors to ensure seamless governance.</p>
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Real Estate</span> Advisory</h4>
                    <p>From acquisition to sale, we provide legal and tax advice to help you optimize your real estate transactions. Our team assesses key issues such as funding strategies, ownership structures (direct or indirect), and co-ownership arrangements—ensuring your property decisions are both efficient and aligned with your overall wealth plan.</p>
                    <h4 className="text-xl font-semibold"><span className="text-orange-500">Philanthropy</span> Planning</h4>
                    <p>At Aratica Wealth, we support your desire to make a meaningful impact. Whether you&#39;re launching your own charitable initiative, establishing a foundation, or exploring structured giving strategies, our advisors provide the global insight and governance expertise you need. We work with philanthropists at every stage to align their giving with personal values and long-term legacy goals.</p>
                  </div>
                  <div className="w-full md:w-1/2 sticky top-5 h-fit">
                    <Image src="/CP-WP-PensionProvision_LOcom.webp" alt="Pension Provision" width={500} height={500} className="mx-auto" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-3/12 mt-8 lg:mt-0 lg:pl-6 sticky top-0 h-fit">
            <h2 className="text-2xl font-semibold mt-4">Let&#39;s <span className="text-orange-500">Talk</span></h2>
            <p className="mt-2 mb-4 text-sm">Are you looking for tailor-made investment solutions? Or are you interested in market perspectives? Get in touch with one of our experts.</p>
            <button type="button" className="btn">Contact Us</button>

            <h2 className="text-2xl font-semibold mt-6">Related <span className="text-orange-500">Services</span></h2>
            <nav className="flex flex-col gap-3 mt-5 text-[hsla(27,99%,49%)]">
              {[
                { href: "/wealthmanagement", text: "Wealth Management" },
                { href: "multifamilyoffice.html", text: "Multi Family Office" },
                { href: "privateclients.html", text: "Private Client" },
                { href: "institutionalclients.html", text: "Institutional Clients" },
                { href: "assetmanagement.html", text: "Asset Management" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex justify-between items-center text-sm text-primary border-b border-white/10 pb-2 hover:text-white relative group  transition-all duration-500 ease-in-out"
                >
                  {item.text}
                  <Image src="/arrow-right-up.svg" alt={item.text} width={14} height={14} className="ml-2" />
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    <ContactSection />
    <SocialIcons />
    <Footer />
    </>
  );
}