import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug }
  })

  if (!blog) {
    return {
      title: 'Blog Not Found | PT Prima Paper Indonesia'
    }
  }

  return {
    title: `${blog.title} | PT Prima Paper Indonesia`,
    description: blog.content.substring(0, 160)
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug }
  })

  if (!blog) {
    notFound()
  }

  return (
    <div className="py-24 bg-gray-50">
      <article className="container mx-auto px-4 max-w-4xl">
        {blog.image && (
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

        <div className="flex items-center text-gray-500 mb-8">
          <span>{new Date(blog.createdAt).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
          <span className="mx-2">•</span>
          <span>{blog.author}</span>
        </div>

        <div className="prose prose-lg max-w-none">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  )
}