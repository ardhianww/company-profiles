import Card from "@/components/card";


export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <div className="grid grid-cols-3 gap-4">
      <Card title="Total Produk" value="120"/>
        <Card title="Total Order" value="85"/>
        <Card title="Customer Aktif" value="150"/>
      </div>
    </div>
  );
}
