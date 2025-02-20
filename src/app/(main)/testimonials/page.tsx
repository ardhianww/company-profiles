import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Testimoni | PT Prima Paper Indonesia - Produsen Karton Box Terpercaya',
  description: 'Testimoni dari pelanggan setia PT Prima Paper Indonesia. Lihat bagaimana kami membantu bisnis mereka dengan solusi packaging terbaik.',
}

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Rizki',
    position: 'Procurement Manager',
    company: 'PT Elektronik Maju',
    image: '/images/testimonials/person1.jpg',
    content: 'Kualitas karton box yang sangat baik dan konsisten. Pengiriman selalu tepat waktu dan layanan customer service yang responsif. Sangat membantu operasional bisnis kami.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    position: 'Owner',
    company: 'Toko Online MakeupKu',
    image: '/images/testimonials/person2.jpg',
    content: 'Desain packaging yang customized sangat membantu branding bisnis online saya. Pelanggan sering memuji packaging yang menarik dan aman.',
    rating: 5
  },
  {
    id: 3,
    name: 'Budi Santoso',
    position: 'Supply Chain Director',
    company: 'PT Makanan Sehat Indonesia',
    image: '/images/testimonials/person3.jpg',
    content: 'Sudah 3 tahun bekerja sama dan tidak pernah mengecewakan. Kapasitas produksi yang besar membuat kami tidak pernah kekurangan stock packaging.',
    rating: 5
  },
  {
    id: 4,
    name: 'Linda Kusuma',
    position: 'Business Owner',
    company: 'Kerajinan Tangan Linda',
    image: '/images/testimonials/person4.jpg',
    content: 'Sangat puas dengan layanan konsultasi yang diberikan. Tim sales sangat membantu dalam memilih spesifikasi box yang tepat untuk produk kerajinan kami.',
    rating: 5
  },
  {
    id: 5,
    name: 'Hendra Wijaya',
    position: 'Operations Manager',
    company: 'PT Logistik Cepat',
    image: '/images/testimonials/person5.jpg',
    content: 'Box dengan kualitas premium namun harga tetap kompetitif. Sangat cocok untuk kebutuhan packaging distribusi kami yang membutuhkan proteksi ekstra.',
    rating: 5
  }
]

export default function TestimonialsPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Testimoni Pelanggan</h1>
          <p className="text-lg text-gray-600">
            Dengarkan langsung dari pelanggan kami tentang pengalaman mereka menggunakan produk dan layanan PT Prima Paper Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                  {/* Temporary div sebagai placeholder image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {/* Uncomment line below and add actual images */}
                  {/* <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" /> */}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-primary font-medium text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-4">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Bergabunglah dengan ratusan pelanggan puas kami dan temukan solusi packaging terbaik untuk bisnis Anda.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Mulai Konsultasi
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
} 