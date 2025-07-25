'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Wealth Management',
    image: '/Wealth Managemenet.webp',
    description: `As experienced wealth managers, our mission is to support our clients in preserving, growing and passing on their private wealth. Aratica is entirely owned by our Partners, who are all directly involved in delivering our wealth management services and ensuring smooth, seamless generational transmissions. Even as many banks are switching to standardised financial planning services, we continue to value personal relationships and offer bespoke wealth management for all our clients.`,
    link: '/wealthmanagement',
  },
  {
    title: 'Wealth Planning',
    image: '/Welath Planning.webp',
    description: `Managing your wealth isn't just about building a portfolio. It's about taking a holistic view of your wealth. At Aratica, we take a global, yet personalised approach to assessing your needs, which allows us to provide you with long-term, bespoke solutions.`,
    description2: `First, we get to know you, working with you to assess your personal, family and professional situation. Following this, we identify your needs and tailor the management of your wealth to your tax environment, individual circumstances and country of residence.`,
    link: '/wealthplanning',
  },
  {
    title: 'Multi Family Office',
    image: '/Multi Family Offices.webp',
    description: `The future of a family estate must be managed with the same care as a business. Everyone agrees that the longevity of a company must be safeguarded over a long period. Everything has to be done to achieve a steady growth and secure for future generations: organization and management, control, profit optimization and cost reduction.`,
    link: '/multifamilyoffice.html',
  },
  {
    title: 'Private Clients',
    image: '/Private Clients.webp',
    description: `Performance should not be left to chance. At Aratica, expertise, experience and quantitative decision support tools contribute to generate stable risk-adjusted returns. Through high-grade expertise and trusted networks, we meet our clients high standards by constantly adapting to new developments in Asset Management and new technologies.`,
    link: '/privateclients.html',
  },
  {
    title: 'Institutional Clients',
    image: '/Institutional Clients.webp',
    description: `As an independent asset manager with a FINMA licence, Aratica offers institutional investors a robust management process that complies with all governance requirements and principles. We apply a disciplined and reproducible process to establish an optimal investment schedule for each portfolio based on strategic allocation.`,
    description2: `This methodology relies on a systematic analysis of economic and financial variables, factoring out subjective bias and ensuring long-term performance.`,
    link: '/institutionalclients.html',
  },
  {
    title: 'Asset Management',
    image: '/Asset Management.webp',
    description: `Aratica specializes in expert asset management, offering tailored solutions for both individual and institutional investors. With a focus on long-term growth, we leverage data-driven strategies, market insights, and risk-managed planning to build and optimize high-performing portfolios.`,
    description2: `Our team ensures complete transparency, continuous performance tracking, and a disciplined approach to wealth protection and expansion. At Aratica, we don't just manage assets — we grow them with precision, care, and a deep understanding of our client's goals.`,
    link: '/assetmanagement',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-primary text-[hsla(27,99%,49%)]">Our</span> Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-[90%] aspect-square rounded-lg overflow-hidden shadow-md group cursor-pointer"
            >
              <div className="w-full h-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(72,61,55,0.85)] text-white p-4 
                flex flex-col justify-start transition-opacity duration-500 
                group-hover:opacity-100 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                <h2 className="text-lg font-semibold mb-3 transition-all duration-500 
                              transform md:-translate-x-full md:-translate-y-full md:opacity-0 
                              md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <span>{service.title.split(' ')[0]}</span>{' '}
                  {service.title.split(' ').slice(1).join(' ')}
                </h2>

                <p className="text-sm leading-relaxed text-justify transition-all duration-500 delay-200 
                             transform md:translate-y-1/2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {service.description}
                </p>

                {service.description2 && (
                  <p className="text-sm leading-relaxed text-justify mt-2 transition-all duration-500 delay-200 
                               transform md:translate-y-1/2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {service.description2}
                  </p>
                )}

                <Link
                href={service.link}
                className="mt-4 inline-block text-sm text-white relative w-1/2 group/link"
                >
                Read More{' '}
                <Image
                    src="/arrow-right-up.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="inline ml-2 w-4 h-4"
                />
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover/link:w-1/2"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
