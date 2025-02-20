export default function StatCard({ 
  title, 
  value, 
  icon, 
  trend 
}: { 
  title: string
  value: string
  icon: React.ReactNode
  trend: string
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="text-sm font-medium text-green-500">{trend}</span>
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  )
} 