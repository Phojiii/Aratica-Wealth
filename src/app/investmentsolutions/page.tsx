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
        alt="Investment Solutions Banner"
        width={1920}
        height={500}
        className="w-full h-auto object-cover"
      />
    <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row mt-12">
      <div className="container mx-auto px-4 lg:px-16 py-12">
        <section id="portfoliomanagement" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold"><span className="text-orange-500">Portfolio</span> Management</h2>
          <p>At Aratica, we construct portfolios based on our client&#39;s goals, risk appetite, personal and tax circumstances. Our portfolio managers offer both discretionary and advisory investment services.</p>
          <p>With our discretionary offering, we invest on behalf of our clients. We draw on proven market expertise to help our clients achieve their financial goals. Our advisory solutions give our clients a two-way relationship with a dedicated banker who liaises with our investment experts. This investment service enables you to be in control but not alone.</p>
          <p>Discover our &#34;Empowering investors&#34; video series.</p>
        </section>

        <section id="privateassets" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold"><span className="text-orange-500">Private</span> Assets</h2>
          <p>We see many reasons to include private assets as part of a well diversified, long-term investment strategy. The benefits can include enhanced returns versus public markets, reduced volatility given lower exposure to short-term market movements, and greater portfolio diversification. Private assets are best suited to investors who can place capital for the long run and tolerate illiquidity. We favour a multi-year investment strategy across private asset classes, combined with traditional liquid assets as part of our &#34;total wealth&#34; approach.</p>
        </section>

        <section id="Equity" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold"><span className="text-orange-500">Equity</span></h2>
          <p>Our equity research team creates an exclusive list of direct holdings convictions based on our proprietary process and investment philosophy. Here, fundamentals come first and foremost. We concentrate on our circle of competence, as well as regions and industries where we have proven expertise.</p>
        </section>

        <section id="Bonds" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold"><span className="text-orange-500">Bonds</span></h2>
          <p>Our approach to bonds is focused on preserving capital and maximising risk-adjusted returns. We have a strong proprietary investment framework and offer a wide range of bond strategies covering credit segments and sovereign issuers, as well as specialised mandates.</p>
        </section>

        <section id="fundselection" className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold"><span className="text-orange-500">Fund</span> Selection</h2>
          <p>We strive to offer our clients the best fund investment ideas on the market, whether from us or other firms, spanning active and passive instruments. Our open architecture team identifies best-in-class fund managers with the expertise to run customised strategies that meet our client&#39;s portfolio needs.</p>
          <p>Our open architecture team selects the best strategies to meet investors needs. To this end, we have launched the “Privil Edge” fund platform, which allows us to partner with leading external managers on differentiated strategies through a wide range of funds in a UCITS (Undertakings for the Collective Investment in Transferable Securities) format, in different share classes to suit investors registration and reporting requirements.</p>
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