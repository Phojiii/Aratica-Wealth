'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SocialIcons() {
  return (
    <section className="flex justify-center gap-6 py-6">
      <Link
        href="https://www.facebook.com/share/16ZUSjxond/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[50px] rounded-md p-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-[hsla(27,99%,49%,0.15)] hover:bg-[hsla(27,99%,49%,0.5)]"
      >
        <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
      </Link>

      <Link
        href="https://www.instagram.com/araticaportfoliomanagement/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[50px] rounded-md p-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-[hsla(27,99%,49%,0.15)] hover:bg-[hsla(27,99%,49%,0.5)]"
      >
        <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
      </Link>

      <Link
        href="https://x.com/araticaportmgmt?s=21"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[50px] rounded-md p-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-[hsla(27,99%,49%,0.15)] hover:bg-[hsla(27,99%,49%,0.5)]"
      >
        <Image src="/x-logo.svg" alt="X (Twitter)" width={30} height={30} />
      </Link>
    </section>
  );
}
