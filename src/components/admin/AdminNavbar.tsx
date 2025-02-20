'use client'

export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-primary">Admin Dashboard</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-primary">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 