'use client';
import ShareModal from './Modals/ShareModal';
import TalkModal from './Modals/TalkModal';
import NewsletterModal from './Modals/NewsletterModal';
import LocationModal from './Modals/LocationModal';

import { useState } from 'react';
import Image from 'next/image';

export default function FixedModalButtons() {
  const [openModal, setOpenModal] = useState<null | 'share' | 'talk' | 'newsletter' | 'location'>(null);

  return (
    <>
      {/* Fixed Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-[9999]">
        <button
          onClick={() => setOpenModal('share')}
          className="flex items-center gap-2 bg-orange-600 hover:bg-black transition-all duration-500 text-white px-4 py-2 rounded-l-full shadow-md -right-4/6 hover:right-0 relative"
        >
          <Image src="/share-2-w.svg" alt="Share" width={20} height={20} />
          Share
        </button>

        <button
          onClick={() => setOpenModal('talk')}
          className="flex items-center gap-2 bg-orange-600 hover:bg-black transition-all duration-500 text-white px-4 py-2 rounded-l-full shadow-md  -right-4/6 hover:right-0 relative"
        >
          <Image src="/message-circle.svg" alt="Talk" width={20} height={20} />
          Let's Talk
        </button>

        <button
          onClick={() => setOpenModal('newsletter')}
          className="flex items-center gap-2 bg-orange-600 hover:bg-black transition-all duration-500 text-white px-4 py-2 rounded-l-full shadow-md  -right-4/6 hover:right-0 relative"
        >
          <Image src="/send.svg" alt="Newsletter" width={20} height={20} />
          Newsletter
        </button>

        <button
          onClick={() => setOpenModal('location')}
          className="flex items-center gap-2 bg-orange-600 hover:bg-black transition-all duration-500 text-white px-4 py-2 rounded-l-full shadow-md  -right-4/6 hover:right-0 relative"
        >
          <Image src="/location.svg" alt="Location" width={20} height={20} />
          Location
        </button>
      </div>

      {/* Render Modals */}
      {openModal === 'share' && <ShareModal onClose={() => setOpenModal(null)} />}
      {openModal === 'talk' && <TalkModal onClose={() => setOpenModal(null)} />}
      {openModal === 'newsletter' && <NewsletterModal onClose={() => setOpenModal(null)} />}
      {openModal === 'location' && <LocationModal onClose={() => setOpenModal(null)} />}
    </>
  );
}
