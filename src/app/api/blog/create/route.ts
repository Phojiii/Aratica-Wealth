import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content } = body;

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const dirPath = path.join(process.cwd(), 'src', 'content', 'blogs');
  const filePath = path.join(dirPath, `${slug}.md`);

  try {
    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(
      filePath,
      `---\ntitle: "${title}"\ndate: "${new Date().toISOString()}"\n---\n\n${content}`
    );

    return NextResponse.json({ message: 'Blog saved!' });
  } catch (error) {
    console.error('Failed to save blog:', error);
    return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 });
  }
}
