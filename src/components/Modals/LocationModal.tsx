// Example: LocationModal.tsx
'use client';

import { useEffect } from 'react';

export default function LocationModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
      <div className="bg-black rounded-lg max-w-2xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl font-bold">&times;</button>
        <h2 className="text-xl font-semibold mb-4">Our Location<span className="text-orange-500">.</span></h2>
        <p className="mb-4 text-gray-700">85 Great Portland Street, First Floor, London, United Kingdom.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6781958533597!2d-0.14343162387834046!3d51.518485128215836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad5966688f5%3A0x7f597ce753ed6230!2s85%20Great%20Portland%20St%2C%20London%20W1W%207LT%2C%20UK!5e0!3m2!1sen!2s!4v1752363113873!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
