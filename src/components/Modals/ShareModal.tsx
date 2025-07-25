'use client';

export default function ShareModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
      <div className="bg-black rounded-lg w-full max-w-md p-6 relative">
        <button className="absolute top-2 right-3 text-xl font-bold" onClick={onClose}>
          &times;
        </button>
        <h5 className="text-lg font-semibold mb-4">Share<span className="text-orange-500">.</span></h5>
        <div className="flex justify-center gap-6">
          <a href="#" target="_blank" title="LinkedIn">
            <img src="../linkedin.svg" alt="LinkedIn" className="w-12 h-12 bg-sky-800 p-1 rounded-lg" />
          </a>
          <a href="#" target="_blank" title="Twitter (X)">
            <img src="../twitter.svg" alt="X" className="w-12 h-12 bg-gray-500 p-1 rounded-lg" />
          </a>
          <a href="mailto:?subject=Check this out!" title="Email">
            <img src="./mail.svg" alt="Email" className="w-12 h-12 bg-cyan-700 p-1 rounded-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
