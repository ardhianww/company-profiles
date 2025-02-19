import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PT Prima Paper Indonesia</h3>
            <p className="text-gray-400">
              Produsen karton box terpercaya dengan komitmen kualitas dan layanan terbaik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">Tentang Kami</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Produk</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Alamat: Jalan Contoh No. 123</li>
              <li>Email: info@perusahaan.com</li>
              <li>Telp: (021) 1234-5678</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PT Prima Paper Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 