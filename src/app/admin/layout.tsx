import { Inter } from "next/font/google";
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminNavbar from '@/components/admin/AdminNavbar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Admin Dashboard | PT Prima Paper Indonesia',
  description: 'Dashboard admin untuk mengelola konten website PT Prima Paper Indonesia',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8 ml-64">
          {children}
        </main>
      </div>
    </div>
  )
} 