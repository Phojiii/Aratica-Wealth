'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contactus" className="py-20 border-t-[#333] border-t">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/2 space-y-6">
          <Link href="/" className="inline-block">
            <Image src="/trasnparent-logo.webp" alt="Aratica Logo" width={50} height={50} />
          </Link>
          <p className="text-white text-base">
            At Aratica, we are committed to empowering entrepreneurs and businesses across the UAE through innovative and flexible funding solutions. Our mission is to bridge the gap between ambition and financial access, offering tailored loan products that support business growth, expansion, and sustainability.
          </p>
          <Link href="#aboutus">
            <span className="inline-block rounded-md p-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-[hsla(27,99%,49%,0.15)] hover:bg-[hsla(27,99%,49%,0.5)]">Learn More</span>
          </Link>

          <div className="mt-6 space-y-3 text-sm text-white">
            <p>
              <a href="tel:+447700162142" className={`relative inline-block text-sm text-white hover:text-orange-600 mb-4 transition-transform duration-500 delay-200 transform translate-y-1/2 hover:translate-y-1/2 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-orange-600 after:transition-all after:duration-500 hover:after:w-full`}>
                📞 +44 7700 162142
              </a>
            </p>
            <p >
              <a href="mailto:info@aratica.org" className={`relative inline-block text-sm text-white hover:text-orange-600 mb-4 transition-transform duration-500 delay-200 transform translate-y-1/2 hover:translate-y-1/2 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-orange-600 after:transition-all after:duration-500 hover:after:w-full`}>
                📧 info@aratica.org
              </a>
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/LCqvmGjCHbJReskG7"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-block text-sm text-white hover:text-orange-600 mb-4 transition-transform duration-500 delay-200 transform translate-y-1/2 hover:translate-y-1/2 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-orange-600 after:transition-all after:duration-500 hover:after:w-full`}
              >
                📍 85 Great Portland Street, First Floor, London, United Kingdom
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 w-full  p-8 rounded-lg shadow-md">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);

              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  number: formData.get('number'),
                  message: formData.get('message'),
                }),
              });

              if (res.ok) {
                alert('Message sent successfully!');
                form.reset();
              } else {
                alert('Failed to send message.');
              }
            }}
            className="space-y-5"
          >
            <input
              type="name"
              name="name"
              placeholder="Name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="number"
              placeholder="Number"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" required className="accent-primary" />
              <label htmlFor="terms" className="text-sm text-gray-700">I agree to the Terms and Conditions</label>
            </div>

            <button
              type="submit"
              className="rounded-md p-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-[hsla(27,99%,49%,0.15)] hover:bg-[hsla(27,99%,49%,0.5)]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
