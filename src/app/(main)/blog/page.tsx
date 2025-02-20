import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | PT Prima Paper Indonesia',
  description: 'Artikel dan berita terbaru seputar industri packaging dan perkembangan PT Prima Paper Indonesia.',
}

const articles = [
  {
    id: 1,
    title: 'Inovasi Packaging: Tren Karton Box di Era Digital',
    excerpt: 'Perkembangan e-commerce membawa perubahan signifikan dalam kebutuhan packaging. Simak tren terbaru dalam industri karton box.',
    date: '15 Maret 2024',
    category: 'Industri',
    image: '/images/blog/packaging-trends.jpg'
  },
  {
    id: 2,
    title: 'Sustainability dalam Industri Packaging',
    excerpt: 'Bagaimana PT Prima Paper Indonesia menerapkan prinsip berkelanjutan dalam proses produksi dan pengembangan produk.',
    date: '10 Maret 2024',
    category: 'Sustainability',
    image: '/images/blog/sustainable-packaging.jpg'
  },
  {
    id: 3,
    title: 'Tips Memilih Karton Box yang Tepat untuk Bisnis Anda',
    excerpt: 'Panduan lengkap dalam memilih spesifikasi karton box yang sesuai dengan kebutuhan bisnis Anda.',
    date: '5 Maret 2024',
    category: 'Tips & Tricks',
    image: '/images/blog/box-guide.jpg'
  },
  {
    id: 4,
    title: 'PT Prima Paper Raih Penghargaan Best Packaging Solution 2024',
    excerpt: 'Komitmen kami dalam memberikan solusi packaging terbaik mendapat pengakuan dalam ajang industri nasional.',
    date: '1 Maret 2024',
    category: 'Berita',
    image: '/images/blog/award.jpg'
  }
]

export default function BlogPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Blog & Artikel</h1>
          <p className="text-lg text-gray-600">
            Temukan informasi terbaru seputar industri packaging dan perkembangan perusahaan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                {/* Temporary div sebagai placeholder image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Uncomment line below and add actual images */}
                {/* <Image src={article.image} alt={article.title} fill className="object-cover" /> */}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-primary font-medium">{article.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors duration-300">
                  <Link href={`/blog/${article.id}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link 
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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