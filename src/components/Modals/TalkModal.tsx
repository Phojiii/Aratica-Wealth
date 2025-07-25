'use client';

export default function TalkModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
      <div className="bg-black rounded-lg w-full max-w-xl p-6 relative">
        <button className="absolute top-2 right-3 text-xl font-bold" onClick={onClose}>
          &times;
        </button>
        <h5 className="text-lg font-semibold mb-4">Let's <span className="text-orange-500">talk.</span></h5>

        <form className="space-y-4">
          <select className="w-full border px-3 py-2" required>
            <option selected disabled>How can we help you?</option>
            <option>General Inquiry</option>
            <option>Request Information</option>
            <option>Other</option>
          </select>

          <input type="email" className="w-full border px-3 py-2" placeholder="Email address" required />

          <div className="flex gap-2">
            <select className="border px-3 py-2 w-1/3">
              <option>Title</option>
              <option>Mr</option>
              <option>Ms</option>
            </select>
            <input type="text" className="border px-3 py-2 w-1/3" placeholder="Firstname" />
            <input type="text" className="border px-3 py-2 w-1/3" placeholder="Lastname" />
          </div>

          <select className="w-full border px-3 py-2">
            <option selected disabled>What is your country of domicile?</option>
            <option>United Arab Emirates</option>
            <option>Saudi Arabia</option>
            <option>Qatar</option>
            <option>Other</option>
          </select>

          <textarea className="w-full border px-3 py-2" rows={4} placeholder="Your message"></textarea>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> I'm not a US resident or citizen
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> I would also like to subscribe to your newsletter
          </label>

          <p className="text-sm text-gray-600">
            Your information will be used according to our{' '}
            <a href="#" className="underline text-blue-600">Privacy Statement</a>.
          </p>

          <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-black transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
