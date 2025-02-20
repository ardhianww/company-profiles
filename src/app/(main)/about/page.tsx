import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tentang Kami | PT Prima Paper Indonesia',
  description: 'Pelajari lebih lanjut tentang PT Prima Paper Indonesia, produsen karton box terkemuka dengan komitmen kualitas dan inovasi.',
}

export default function AboutPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-lg text-gray-600">
            PT Prima Paper Indonesia adalah produsen karton box terkemuka yang berkomitmen untuk memberikan solusi packaging terbaik sejak 2010.
          </p>
        </div>

        {/* Visi Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">Visi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Menjadi perusahaan packaging terdepan di Indonesia yang mengutamakan inovasi, kualitas, dan keberlanjutan untuk mendukung pertumbuhan industri nasional.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Menghadirkan solusi packaging yang inovatif dan berkelanjutan</p>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Menjadi mitra terpercaya dalam pengembangan bisnis klien</p>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Berkontribusi dalam pertumbuhan ekonomi nasional</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Sejarah Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Perjalanan Kami</h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 w-24 text-primary font-bold">2010</div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Awal Mula</h3>
                <p className="text-gray-600">Didirikan sebagai perusahaan packaging skala kecil dengan fokus pada kualitas produk.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 text-primary font-bold">2015</div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Ekspansi Pertama</h3>
                <p className="text-gray-600">Pembukaan pabrik kedua dan peningkatan kapasitas produksi hingga 200%.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 text-primary font-bold">2018</div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Inovasi Teknologi</h3>
                <p className="text-gray-600">Implementasi teknologi produksi modern dan sistem manajemen terintegrasi.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 text-primary font-bold">2020</div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Go Digital</h3>
                <p className="text-gray-600">Transformasi digital dalam proses bisnis dan pelayanan pelanggan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tujuan Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tujuan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inovasi Berkelanjutan</h3>
              <p className="text-gray-600">
                Terus mengembangkan solusi packaging yang inovatif dan ramah lingkungan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Kepuasan Pelanggan</h3>
              <p className="text-gray-600">
                Memberikan pelayanan terbaik dan solusi yang sesuai kebutuhan pelanggan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ekspansi Global</h3>
              <p className="text-gray-600">
                Memperluas jangkauan pasar dan berkontribusi dalam perdagangan internasional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 