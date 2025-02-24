"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Card from "@/components/card";
import { GetServerSidePropsContext } from "next";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("[Admin] Memeriksa token...");
    const token = Cookies.get("token");
    console.log("[Admin] Token ditemukan:", token);

    if (!token) {
      console.log("[Admin] Token tidak ditemukan, redirect ke /login...");
      router.replace("/login");
      setLoading(false);
      return;
    }

    fetch("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("[Admin] Response dari /api/auth/me:", data);

        if (data.error) {
          console.log("[Admin] Session expired, redirect ke /login...");
          Cookies.remove("token");
          router.replace("/login");
        } else {
          console.log("[Admin] User ditemukan, tetap di halaman admin.");
          setUser(data.user);
        }
      })
      .catch((err) => {
        console.error("[Admin] Gagal fetch user data:", err);
        setError("Gagal mengambil data pengguna.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Dashboard Admin</h1>
      {user ? <p className="mb-4">Welcome, {user.email}!</p> : <p className="text-red-500">User not found.</p>}
      <div className="grid grid-cols-3 gap-4">
        <Card title="Total Produk" value="120" />
        <Card title="Total Order" value="85" />
        <Card title="Customer Aktif" value="150" />
      </div>
    </div>
  );
}
