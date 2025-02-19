'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-bold text-2xl text-primary">
            <span className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
              </svg>
              <span>Prima Paper</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Beranda</NavLink>
            <NavLink href="/about">Tentang Kami</NavLink>
            <NavLink href="/products">Produk</NavLink>
            <NavLink href="/testimonials">Testimoni</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <Link 
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-t">
            <div className="flex flex-col space-y-4 p-4">
              <NavLink mobile href="/">Beranda</NavLink>
              <NavLink mobile href="/about">Tentang Kami</NavLink>
              <NavLink mobile href="/products">Produk</NavLink>
              <NavLink mobile href="/testimonials">Testimoni</NavLink>
              <NavLink mobile href="/blog">Blog</NavLink>
              <Link 
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-center transition-colors duration-300"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children, mobile = false }: { 
  href: string; 
  children: React.ReactNode;
  mobile?: boolean;
}) {
  return (
    <Link 
      href={href} 
      className={`
        ${mobile ? 'block w-full px-4 py-2 hover:bg-gray-50 rounded-lg' : 'relative'}
        text-gray-700 hover:text-primary transition-colors duration-300
        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
        after:bg-primary after:transition-all after:duration-300
        hover:after:w-full
      `}
    >
      {children}
    </Link>
  )
} 