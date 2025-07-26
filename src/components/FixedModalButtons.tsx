'use client';

import ShareModal from './Modals/ShareModal';
import TalkModal from './Modals/TalkModal';
import NewsletterModal from './Modals/NewsletterModal';
import LocationModal from './Modals/LocationModal';

import { useState } from 'react';
import Image from 'next/image';

type ModalType = 'share' | 'talk' | 'newsletter' | 'location';

const modalButtons: { id: ModalType; label: string; icon: string }[] = [
  { id: 'share', label: 'Share', icon: '/share-2-w.svg' },
  { id: 'talk', label: "Let's Talk", icon: '/message-circle.svg' },
  { id: 'newsletter', label: 'Newsletter', icon: '/send.svg' },
  { id: 'location', label: 'Location', icon: '/location.svg' },
];

export default function FixedModalButtons() {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);

  return (
    <>
      {/* Fixed Buttons Container */}
      <div className="fixed bottom-0 md:bottom-1/4 right-0 z-[9999] w-full md:w-auto">
        {/* Mobile View: Horizontal Buttons */}
        <div className="flex md:hidden justify-around bg-orange-600 text-white w-3/4">
          {modalButtons.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setOpenModal(id)}
              className="flex flex-col items-center justify-center text-xs py-2 w-full hover:text-black transition-colors duration-200"
            >
              <Image src={icon} alt={label} width={18} height={18} />
              {label}
            </button>
          ))}
        </div>

        {/* Desktop View: Slide-in Buttons */}
        <div className="hidden md:flex flex-col gap-2">
          {modalButtons.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setOpenModal(id)}
              className="group flex items-center gap-2 bg-orange-600 hover:bg-black transition-all duration-300 text-white px-4 py-2 rounded-l-full shadow-md relative transform translate-x-24 hover:translate-x-0"
            >
              <Image src={icon} alt={label} width={20} height={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Render Modals */}
      {openModal === 'share' && <ShareModal onClose={() => setOpenModal(null)} />}
      {openModal === 'talk' && <TalkModal onClose={() => setOpenModal(null)} />}
      {openModal === 'newsletter' && <NewsletterModal onClose={() => setOpenModal(null)} />}
      {openModal === 'location' && <LocationModal onClose={() => setOpenModal(null)} />}
    </>
  );
}
