
'use client';
import { useState } from 'react';

const ADMIN_PASSWORD = 'SuperSecure123'; // hardcoded

export default function BlogEditorPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/blog/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    alert(data.message);
  };

  if (!authenticated) {
    return (
      <div className="p-10">
        <h2>Enter Admin Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button onClick={() => setAuthenticated(password === ADMIN_PASSWORD)} className="ml-2 bg-blue-500 px-4 py-2 text-white">
          Login
        </button>
      </div>
    );
  }

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
