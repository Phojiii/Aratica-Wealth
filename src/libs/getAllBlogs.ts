
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllBlogs() {
  const blogDir = path.join(process.cwd(), 'src/content/blogs');
  const files = fs.readdirSync(blogDir);

  return files.map((fileName) => {
    const filePath = path.join(blogDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      title: data.title || '',
      date: data.date || '',
      slug: fileName.replace('.md', ''),
    };
  });
}
