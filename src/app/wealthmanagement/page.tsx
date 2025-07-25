'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';
import FixedModalButtons from '@/components/FixedModalButtons';

export default function WealthManagementPage() {
  return (
    <>
    <PageHeader pageTitle="Wealth Management" />
    <FixedModalButtons />
    <div>
      <Image
        src="/Investment Header.webp"
        alt="Wealth Management"
        width={1920}
        height={500}
        className="w-full h-auto object-cover page-banner"
      />

      <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row mt-12">
        <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
          <section>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-primary text-[hsla(27,99%,49%)]">Wealth</span> Management
            </h2>
            <p className="mb-4">
              At Aratica Wealth, we are dedicated to helping our clients preserve, grow, and seamlessly transfer their wealth across generations. As a partner-led firm, our leadership is actively engaged in delivering personalized wealth management solutions tailored to each client's unique goals and circumstances.
            </p>
            <p className="mb-8">
              In a landscape where many institutions rely on standardized financial planning, we take pride in our client-first approach — offering bespoke strategies built on trust, long-term relationships, and a deep understanding of individual aspirations. At Aratica, wealth management is more than numbers — it's about building legacies with care, integrity, and strategic vision.
            </p>

            <blockquote className="qoute text-center italic border-y-2 border-y-gray-900 border-dashed py-6 my-10 max-w-3xl mx-auto">
              <p className="text-lg">
                <span className="text-3xl text-primary text-[hsla(27,99%,49%)]">"</span>We are convinced that sustainability will be a major performance driver...
                <span className="text-3xl text-primary text-[hsla(27,99%,49%)]">"</span>
              </p>
              <span className="text-primary font-medium block mt-2 text-[hsla(27,99%,49%)]">- Senior Managing Partner</span>
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  <span className="text-primary text-[hsla(27,99%,49%)]">Portfolio</span> Management
                </h4>
                <p className="mb-4">At Aratica Wealth, we provide customized, high-conviction portfolio management designed to meet the needs of our clients—wherever life takes them. Our investment strategies are shaped by a deep understanding of both global markets and local dynamics, executed by expert teams who bring insight, rigor, and agility to every portfolio.</p>
                <p className="mb-4">We offer both discretionary and advisory investment mandates, empowering you to choose the level of involvement that best aligns with your goals and lifestyle.</p>
                <p className="mb-4">With our discretionary mandates, we take on the responsibility of managing your investments on your behalf. Our process begins with an in-depth understanding of your financial objectives, risk appetite, and long-term vision. From there, our wealth managers and investment specialists design and actively manage a portfolio that aligns with your goals, allowing you to benefit from timely decisions, research-driven strategies, and continuous oversight—without the day-to-day complexity.</p>
                <p className="mb-4">Prefer to remain closely involved in your investment decisions? Our advisory mandates give you full control over your portfolio, supported by ongoing expert guidance. Your dedicated wealth manager will offer personalized advice based on your location, objectives, and market outlook. For clients seeking even greater access to our expertise, we offer enhanced service levels that provide direct insights from our investment team, ensuring you stay informed and empowered every step of the way.</p>
                <p>At Aratica Wealth, portfolio management is not just about returns...</p>
              </div>
              <div className="sticky-image relative lg:sticky top-0 h-fit">
                <Image
                  src="/WealthManagement-portfolio.webp"
                  alt="Portfolio Management"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-4">
              Your <span className="text-primary text-[hsla(27,99%,49%)]">Wealth</span>. Your <span className="text-primary text-[hsla(27,99%,49%)]">Vision</span>. Our <span className="text-primary text-[hsla(27,99%,49%)]">Strategy</span>.
            </h4>
            <p className="mb-4">At Aratica Wealth, we take a progressive and highly personalized approach to wealth management—designed around your life, your priorities, and your future. We understand that your wealth serves multiple purposes: supporting your lifestyle today, funding long-term ambitions, and securing your family's tomorrow.</p>
            <p className="mb-4">Rather than relying on a one-size-fits-all investment portfolio, we create a series of dedicated portfolios—each aligned to a specific financial goal. Every portfolio is crafted with a unique time horizon, asset allocation strategy, and independent risk profile to ensure it meets its intended purpose effectively.</p>
            <p className="mb-8">Your preferences, values, and constraints shape each investment decision, while overall risk and asset allocation are managed holistically across your entire wealth structure. This goal-based, forward-looking strategy ensures clarity, control, and confidence—every step of the way.</p>

            <blockquote className="qoute text-center italic border-y-2 border-y-gray-900 border-dashed py-6 my-10 max-w-3xl mx-auto">
              <p className="text-lg">
                We think of ourselves as more than asset managers; we also act as active investors, tracking down opportunities for our clients - even in difficult market environments.
              </p>
              <span className="text-primary font-medium block mt-2 text-[hsla(27,99%,49%)]">- Managing Partner</span>
            </blockquote>

            <h4 className="text-xl font-semibold mb-4">
              <span className="text-primary text-[hsla(27,99%,49%)]">Wealth Management</span> Rooted in Relationships
            </h4>
            <p className="mb-4">At Aratica Wealth, we believe true wealth management goes far beyond simply constructing a portfolio. It starts with a deep understanding of your life—your ambitions, your responsibilities, and the legacy you wish to build.</p>
            <p className="mb-4">Our approach is both global and highly personal. We begin by getting to know you—your family dynamics, professional journey, lifestyle, and future aspirations. This relationship-driven foundation allows us to design bespoke, long-term strategies tailored to your financial goals and evolving needs.</p>
            <p className="mb-4">Our experienced wealth planners conduct thorough diagnostics that consider every aspect of your life, from career plans to family commitments, business ventures to retirement objectives. By aligning your wealth strategy with your personal circumstances, tax considerations, and country of residence, we ensure your wealth is managed with precision, foresight, and flexibility.</p>
            <p className="mb-12">At Aratica, we don't just manage wealth—we help you shape your future.</p>

            <Image
              src="/WealthManagement_ArticleLOcom-Topic1.webp"
              alt="Wealth Strategy"
              width={900}
              height={600}
              className="mx-auto rounded-lg"
            />
          </section>
        </div>

        <aside className="w-full lg:w-1/4 mt-10 lg:mt-0 sticky-sidebar relative lg:sticky top-0 h-fit">
          <h2 className="text-2xl font-semibold mb-3 mt-4">
            Let's <span className="text-primary text-[hsla(27,99%,49%)]">Talk</span>
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
    </div>
    <ContactSection />
    <SocialIcons />
    <Footer />
    </>
  );
}