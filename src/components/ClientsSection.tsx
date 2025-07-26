'use client';

import React from 'react';
import Image from 'next/image';

const clients = [
  { src: '/sevengate.webp', alt: 'Seven Gate' },
  { src: '/alphaseed.webp', alt: 'Alphaseed' },
  { src: '/araticaholding.webp', alt: 'Aratica Holding' },
  { src: '/zeilholding.webp', alt: 'Zeil Holding' },
  { src: '/adwademashq.webp', alt: 'Adwa Demashq' },
];

export default function ClientsSection() {
  return (
    <section id="ourclients" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-primary text-[hsla(27,99%,49%)]">Our</span> Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center justify-items-center">
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt={client.alt}
              width={120}
              height={120}
              className="rounded-md p-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-[hsla(27,99%,49%,0.15)] hover:bg-[hsla(27,99%,49%,0.5)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
