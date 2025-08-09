'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ADMIN_PASSWORD = 'SuperSecure123'; // Used here only for demo purpose

export default function BlogEditorPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simple check — look for session auth (for demo, we use localStorage)
    const isAuth = localStorage.getItem('authenticated');
    if (isAuth !== 'true') {
      router.push('/adminlogin'); // Redirect if not logged in
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  const handleSubmit = async () => {
    const res = await fetch('/api/blog/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    alert(data.message);
  };

  if (!authenticated) return null; // Don't render form until auth check is complete

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Create New Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 border p-2"
      />
      <textarea
        placeholder="Write your markdown..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={12}
        className="w-full border p-2 mb-4"
      />
      <button onClick={handleSubmit} className="bg-green-600 px-4 py-2 text-white">
        Save Blog
      </button>
    </div>
  );
}
