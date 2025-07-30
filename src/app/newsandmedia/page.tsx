'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';
import type { NewsItem } from '@/types/news';


export default function NewsAndMediaPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNews(data);
          console.log('News data:', data);
        } else if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          console.warn('Unexpected response format:', data);
          setNews([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load news:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Latest Business News</h2>
        {loading ? (
          <p>Loading...</p>
        ) : news.length === 0 ? (
          <p>No news found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="p-4 border border-gray-700 rounded-md bg-black text-white shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-gray-200 mb-2">
                    {item.headLine || 'No heading available.'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.subHeadline || 'No details available.'}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
      <ContactSection />
      <SocialIcons />
      <Footer />
    </>
  );
}
