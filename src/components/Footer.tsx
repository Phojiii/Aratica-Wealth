'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-700">
      <div className="container mx-auto px-4">
        <p className="mb-1">&copy; 2025 Aratica. All rights reserved.</p>
        <p className="mb-0">
          <Link
            href="/privacy-policy.html"
            className="text-primary hover:underline mr-4"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions.html"
            className="text-primary hover:underline"
          >
            Terms &amp; Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}
