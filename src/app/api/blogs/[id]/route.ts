import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/blogs/[id] - Get a specific blog
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: params.id }
    });
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

// PUT /api/blogs/[id] - Update a blog
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.content || !data.author || !data.slug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.update({
      where: { id: params.id },
      data: {
        title: data.title,
        content: data.content,
        image: data.image,
        author: data.author,
        slug: data.slug,
        updatedAt: new Date()
      }
    });
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] - Delete a blog
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.blog.delete({
      where: { id: params.id }
    });
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}