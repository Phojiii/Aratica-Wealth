'use client';

export default function NewsletterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
      <div className="bg-black rounded-lg w-full max-w-xl p-6 relative">
        <button className="absolute top-2 right-3 text-xl font-bold" onClick={onClose}>
          &times;
        </button>
        <h5 className="text-lg font-semibold mb-4">Sign up for our newsletter</h5>
        <form className="space-y-4">
          <input type="email" className="w-full border px-3 py-2" placeholder="Enter your email" required />

          <div className="flex gap-2">
            <select className="border px-2 py-2 w-1/3">
              <option>Title</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
            <input type="text" className="border px-3 py-2 w-1/3" placeholder="Firstname" />
            <input type="text" className="border px-3 py-2 w-1/3" placeholder="Lastname" />
          </div>

          <div className="flex gap-4 items-center">
            <select className="border px-2 py-2 w-1/2">
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>India</option>
              <option>Other</option>
            </select>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              I&#39;m not a US resident or citizen
            </label>
          </div>

          <p className="text-sm text-gray-600">
            Your information will be used according to our{' '}
            <a href="#" className="underline text-blue-600">Privacy Statement</a>.
          </p>

          <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-black transition">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}
