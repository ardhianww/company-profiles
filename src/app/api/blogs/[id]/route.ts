import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const blog = await prisma.blog.update({
      where: { id: params.id },
      data: {
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
      { error: 'Error updating blog' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.blog.delete({
      where: { id: params.id }
    });
    return NextResponse.json({ message: 'Blog deleted' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting blog' },
      { status: 500 }
    );
  }
} 