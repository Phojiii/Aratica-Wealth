'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ADMIN_PASSWORD = 'SuperSecure123';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('authenticated', 'true'); // <- add this
        router.push('/admin/blogeditor');
    } else {
        alert('Incorrect password');
    }
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
        <button
          onClick={handleLogin}
          className="ml-2 bg-blue-500 px-4 py-2 text-white"
        >
          Login
        </button>
      </div>
    );
  }

  return null;
}
