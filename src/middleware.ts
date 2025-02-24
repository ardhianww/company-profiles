import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect ke login kalau token tidak ada
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!); // Verifikasi token
    return NextResponse.next(); // Lanjut ke halaman admin
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect kalau token tidak valid
  }
}

// Config untuk menentukan route mana yang diproteksi
export const config = {
  matcher: ["/admin/:path*"], // Semua route dalam /admin akan diproteksi
};
