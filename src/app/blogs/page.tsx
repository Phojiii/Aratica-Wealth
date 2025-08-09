import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SocialIcons from '@/components/SocialIcons';
import Link from 'next/link';

type Blog = {
  slug: string;
  title: string;
  date: string;
};

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`, { cache: 'no-store' });

  if (!res.ok) {
    console.error('Failed to fetch blogs');
    return [];
  }

  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <>
    <Header />
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.slug} className="border-b pb-4">
              <Link href={`/blogs/${blog.slug}`}>
                <p className="text-xl text-blue-600 hover:underline">{blog.title}</p>
              </Link>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <ContactSection />
      <SocialIcons />
      <Footer />
    </>
  );
}
