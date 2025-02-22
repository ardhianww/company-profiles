import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const testimonial = await prisma.testimonial.create({
      data: {
        id: Math.random().toString(36).substr(2, 9),
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
      { error: 'Error creating testimonial' },
      { status: 500 }
    );
  }
} 