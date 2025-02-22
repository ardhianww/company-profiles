import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const testimonial = await prisma.testimonial.update({
      where: { id: params.id },
      data: {
        name: body.name,
        company: body.company,
        message: body.message,
        rating: body.rating,
        image: body.image,
      }
    });
    return NextResponse.json(testimonial);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating testimonial' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.testimonial.delete({
      where: { id: params.id }
    });
    return NextResponse.json({ message: 'Testimonial deleted' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting testimonial' },
      { status: 500 }
    );
  }
} 