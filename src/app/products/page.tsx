import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Produk | PT Prima Paper Indonesia - Produsen Karton Box Terpercaya',
  description: 'Berbagai jenis karton box dan kardus berkualitas dengan spesifikasi yang dapat disesuaikan untuk kebutuhan packaging bisnis Anda.',
}

const products = [
  {
    id: 1,
    name: 'Regular Slotted Container (RSC)',
    description: 'Box standar dengan flap atas dan bawah yang sama panjang. Cocok untuk berbagai kebutuhan packaging.',
    specs: [
      'Ukuran: Custom',
      'Ketebalan: 3mm - 7mm',
      'Material: Single/Double Wall',
      'Flute: B/C/E Flute',
      'Min. Order: 100 pcs'
    ],
    image: '/images/products/rsc-box.jpg' // Anda perlu menambahkan gambar
  },
  {
    id: 2,
    name: 'Die Cut Box',
    description: 'Box dengan desain khusus yang dipotong sesuai kebutuhan. Ideal untuk produk dengan bentuk unik.',
    specs: [
      'Ukuran: Custom',
      'Ketebalan: 2mm - 5mm',
      'Material: Single Wall',
      'Flute: E Flute',
      'Min. Order: 500 pcs'
    ],
    image: '/images/products/die-cut.jpg'
  },
  {
    id: 3,
    name: 'Double Wall Box',
    description: 'Box dengan dinding ganda untuk perlindungan ekstra. Cocok untuk barang berat atau membutuhkan proteksi tinggi.',
    specs: [
      'Ukuran: Custom',
      'Ketebalan: 6mm - 8mm',
      'Material: Double Wall',
      'Flute: BC Flute',
      'Min. Order: 100 pcs'
    ],
    image: '/images/products/double-wall.jpg'
  },
  {
    id: 4,
    name: 'Folding Carton',
    description: 'Kardus lipat yang efisien dalam penyimpanan. Ideal untuk retail packaging.',
    specs: [
      'Ukuran: Custom',
      'Ketebalan: 2mm - 3mm',
      'Material: Single Wall',
      'Flute: E Flute',
      'Min. Order: 1000 pcs'
    ],
    image: '/images/products/folding.jpg'
  }
]

export default function ProductsPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Produk Kami</h1>
          <p className="text-lg text-gray-600">
            Berbagai jenis karton box berkualitas dengan spesifikasi yang dapat disesuaikan untuk memenuhi kebutuhan packaging bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 bg-gray-200">
                {/* Temporary div sebagai placeholder image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Uncomment line below and add actual images */}
                {/* <Image src={product.image} alt={product.name} fill className="object-cover" /> */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Spesifikasi:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Minta Penawaran
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Butuh spesifikasi khusus? Kami siap membantu Anda mendapatkan solusi packaging yang tepat.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Hubungi Kami
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
} 