import StatCard from '@/components/admin/StatCard'

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Produk"
          value="24"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          }
          trend="+12%"
        />
        <StatCard 
          title="Pengunjung Bulan Ini"
          value="1,234"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          trend="+23%"
        />
        <StatCard 
          title="Total Testimoni"
          value="48"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          }
          trend="+8%"
        />
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          <ActivityItem 
            title="Produk Baru Ditambahkan"
            description="Double Wall Box 60x40x50 cm"
            time="2 jam yang lalu"
          />
          <ActivityItem 
            title="Testimoni Baru"
            description="PT Elektronik Maju memberikan testimoni"
            time="5 jam yang lalu"
          />
          <ActivityItem 
            title="Permintaan Penawaran"
            description="3 permintaan penawaran baru"
            time="1 hari yang lalu"
          />
        </div>
      </div>
    </div>
  )
}

function ActivityItem({ title, description, time }: { 
  title: string
  description: string
  time: string 
}) {
  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  )
} 