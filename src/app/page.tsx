import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import CTASection from '@/components/home/CTASection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beranda | PT Prima Paper Indonesia - Produsen Karton Box Terpercaya',
  description: 'Solusi packaging profesional untuk bisnis Anda. Produsen karton box berkualitas dengan layanan kustomisasi sesuai kebutuhan.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTASection />
    </>
  )
}
