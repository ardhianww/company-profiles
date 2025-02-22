import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const blog = await prisma.blog.create({
      data: {
        id: Math.random().toString(36).substr(2, 9),
        title: body.title,
        content: body.content,
        image: body.image,
        author: body.author,
        slug: body.slug,
        updatedAt: new Date(),
      }
    });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating blog' },
      { status: 500 }
    );
  }
} 