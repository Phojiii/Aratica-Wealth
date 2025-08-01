// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { marked } from 'marked';
// import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//   const dir = path.join(process.cwd(), 'src/content/blogs');
//   const files = fs.readdirSync(dir);

//   return files.map((filename) => ({
//     slug: filename.replace('.md', ''),
//   }));
// }

// // ❗ No need to use PageProps or Promise-wrapped types
// export default async function BlogPage({ params }: { params: { slug: string } }) {
//   const filePath = path.join(process.cwd(), 'src/content/blogs', `${params.slug}.md`);

//   if (!fs.existsSync(filePath)) {
//     notFound();
//   }

//   const fileContent = fs.readFileSync(filePath, 'utf-8');
//   const { content, data } = matter(fileContent);

//   return (
//     <div className="prose max-w-3xl mx-auto p-10">
//       <h1>{data.title}</h1>
//       <p className="text-sm text-gray-500">{data.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
//     </div>
//   );
// }
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/blogs'));

  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export default async function BlogPage({ params }) {
  const filePath = path.join(process.cwd(), 'src/content/blogs', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <div className="prose max-w-3xl mx-auto p-10">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
}
