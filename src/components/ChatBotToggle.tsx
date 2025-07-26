'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ChatBotToggle() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            backgroundColor: '#f97316',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
          aria-label="Open Chat"
        >
          <Image src="/customer-support.webp" alt="Aratica Logo" width={50} height={50} className='w-full h-full'/>
        </button>
      )}

      {isChatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            width: '400px',
            height: '600px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#fff',
          }}
        >
          <button
            onClick={() => setIsChatOpen(false)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'transparent',
              border: 'none',
              fontSize: '20px',
              color: '#333',
              cursor: 'pointer',
              zIndex: 10,
            }}
            aria-label="Close Chat"
          >
            ✕
          </button>
          <iframe
            src="https://interfaces.zapier.com/embed/chatbot/cmcyqf410000j78vxrbves82f"
            width="100%"
            height="100%"
            allow="clipboard-write *"
            style={{ border: 'none' }}
          />
        </div>
      )}
    </>
  );
}
