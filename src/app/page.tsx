// pages/index.tsx
import Head from 'next/head';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import FixedModalButtons from '@/components/FixedModalButtons';
import ServiceGrid from '@/components/ServiceGrid';
import ApproachSection from '@/components/ApproachSection';
import ClientsSection from '@/components/ClientsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aratica - Business Funding Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/trasnparent-logo.webp" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Header />
      <HeroCarousel />
      <FixedModalButtons />
      <ServiceGrid />
      <ApproachSection />
      <ClientsSection />
      <AboutSection />
      <ContactSection />
      <SocialIcons />
      <Footer />
    </>
  );
}
