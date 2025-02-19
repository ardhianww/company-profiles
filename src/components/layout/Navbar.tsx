'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            PT Prima Paper Indonesia
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary">Beranda</Link>
            <Link href="/about" className="hover:text-primary">Tentang Kami</Link>
            <Link href="/products" className="hover:text-primary">Produk</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/contact" className="hover:text-primary">Kontak</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-primary">Beranda</Link>
              <Link href="/about" className="hover:text-primary">Tentang Kami</Link>
              <Link href="/products" className="hover:text-primary">Produk</Link>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <Link href="/contact" className="hover:text-primary">Kontak</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 