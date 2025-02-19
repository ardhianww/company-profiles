# PT Prima Paper Indonesia Website

Website company profile untuk PT Prima Paper Indonesia menggunakan Next.js 14 dan Tailwind CSS.

## Teknologi yang Digunakan

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## Persyaratan Sistem

- Node.js 18.17 atau versi lebih baru
- npm atau yarn sebagai package manager

## Cara Instalasi

1. Clone repository ini
   
```bash
git clone [url-repository]
```
2. Masuk ke direktori project

```bash
cd [nama-folder-project]
```

3. Install dependencies
```bash
npm install
# atau
yarn install
```

4. Jalankan development server
```bash
npm run dev
# atau
yarn dev
```

5. Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya

## Struktur Project

```
src/
├── app/                    # App router Next.js
│   ├── page.tsx           # Homepage
│   ├── about/             # Halaman About
│   ├── products/          # Halaman Products
│   ├── blog/              # Halaman Blog
│   └── contact/           # Halaman Contact
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── home/             # Components untuk homepage
│   └── shared/           # Shared/reusable components
├── lib/                   # Utility functions
└── types/                # TypeScript type definitions
```

## Fitur

- ✅ SEO Friendly dengan metadata yang optimal
- 📱 Fully Responsive Design
- 🎨 Modern UI dengan Tailwind CSS
- ⚡ Performa Optimal dengan Next.js
- 🔍 SEO Optimized
- 📝 Blog System
- 📞 Contact Form

## Deployment

Project ini dapat di-deploy menggunakan [Vercel](https://vercel.com) dengan mudah:

```bash
npm run build
# atau
yarn build
```

## Kontribusi

Silakan buat pull request untuk kontribusi. Untuk perubahan besar, harap buka issue terlebih dahulu untuk mendiskusikan perubahan yang diinginkan.

## Lisensi

[MIT](https://choosealicense.com/licenses/mit/)
