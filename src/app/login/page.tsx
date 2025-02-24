"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  
=======
>>>>>>> b419d28 (repair jwt function)

  // Cek apakah token sudah ada, jika ada langsung redirect ke /admin
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      console.log("Token ditemukan di cookies, redirecting...");
      router.replace("/admin");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

<<<<<<< HEAD
      console.log("Response dari server:", data); // Debugging

      if (res.ok) {
        Cookies.set("token", data.token, { expires: 1, sameSite: "Lax", secure: true });
        console.log("Token disimpan di cookies:", Cookies.get("token"));
    
        console.log("Redirecting ke /admin...");
        router.push("/admin"); 
        console.log("🚀 router.push seharusnya sudah dijalankan!");
      } else {
        console.error("Login gagal:", data.error);
      }
      
    } catch (err) {
      console.error("Error saat login:", err);
      setError("Terjadi kesalahan saat login");
=======
      if (!res.ok) {
        if (data.error === "Invalid credentials") {
          setError("Email atau password salah");
        } else if (data.error === "Email and password are required") {
          setError("Email dan password harus diisi");
        } else {
          setError("Terjadi kesalahan saat login");
        }
        return;
      }

      // Jika login berhasil
      Cookies.set("token", data.token, {
        expires: 1, // 1 hari
        sameSite: "Lax",
        secure: process.env.NODE_ENV === "production",
      });

      router.push("/admin");
    } catch (err) {
      console.error("Error saat login:", err);
      setError("Terjadi kesalahan pada server");
    } finally {
>>>>>>> b419d28 (repair jwt function)
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login Admin</h2>

        {error && <p className="text-red-600 text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
=======
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Login Admin
        </h2>

        {error && (
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'
            role='alert'
          >
            <span className='block sm:inline'>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Masukkan email'
              className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Masukkan password'
              className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <span className='flex items-center justify-center'>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Login"
            )}
>>>>>>> b419d28 (repair jwt function)
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
