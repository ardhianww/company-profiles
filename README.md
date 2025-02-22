# PT Prima Paper Indonesia Website

Website company profile untuk PT Prima Paper Indonesia menggunakan **Next.js 15**, **Tailwind CSS**, **Prisma**, dan **MySQL**

## Teknologi yang Digunakan

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [mysql](https://mysql.com/)

## Persyaratan Sistem

- Node.js 18.17 atau versi lebih baru
- npm atau yarn sebagai package manager

## 🛠️ **Setup & Instalasi**

### **1️⃣ Clone Repository**
```sh
git clone https://github.com/ardhianww/company-profiles.git
cd company-profiles
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Konfigurasi Database**
1. Pastikan MySQL sudah terinstall di sistem Anda.

2. Buat database dengan nama company_db atau sesuaikan dengan preferensi Anda.

3. Salin konfigurasi .env:
   ```env
   cp .env.example .env
    ```
   
4. Konfigurasi **DATABASE_URL** pada file .env::
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/company_db"
   ```
   Gantilah user, password, dan company_db sesuai dengan konfigurasi MySQL Anda.
   
5. **Setup Prisma**
   ```sh
   npx prisma migrate dev --name init
   npx prisma generate
   ```
### **4️⃣ Menjalankan Proyek**

Setelah setup selesai, jalankan perintah berikut untuk memulai proyek:
```sh
npm run dev
```
Aplikasi akan berjalan di **http://localhost:3000**

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
