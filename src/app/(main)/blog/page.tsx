import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | PT Prima Paper Indonesia',
  description: 'Artikel dan informasi terkini seputar industri packaging dan karton box.',
}

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Blog & Artikel</h1>
          <p className="text-lg text-gray-600">
            Temukan informasi terkini seputar industri packaging dan tips memilih solusi packaging yang tepat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {blog.image && (
                <div className="relative h-48">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 hover:text-primary">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{new Date(blog.createdAt).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                </div>

                <p className="text-gray-600 line-clamp-3">
                  {blog.content}
                </p>

                <Link 
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center mt-4 text-primary hover:text-primary-dark"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 