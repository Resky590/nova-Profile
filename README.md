# Altair Resky — Web Profile Mahasiswa (Portfolio)

Website profil mahasiswa berstandar editorial human art-direction (terinspirasi dari dennis snellenberg) dengan estetika Swiss, tipografi monumental, 60fps GPU micro-choreography, dan layout responsif yang bersih dan ringan.

## 🚀 Fitur & Komponen Utama
- **Slide 1 Hero Viewport**: Identitas mahasiswa, status pill berputar, kinetic marquee, portrait photo plate switcher, dan metrik akademik.
- **Tech Stack & Tools**: Marquee logo 60fps dan interactive tiles (React, Next.js, TypeScript, Python, PostgreSQL, Figma, Git/Docker).
- **Tentang Mahasiswa**: Word-scrubbing manifesto, dual view mode (Dev Desk & System Architecture), dan circular magnetic button.
- **Selected Works**: 6 proyek unggulan dengan 2 mode tampilan (6-Panel Panorama & 6-Col Modular).
- **Bidang Keahlian**: 4 disiplin kompetensi software engineering.
- **Prinsip & Nilai**: Dual-axis scroll typography animation.
- **Pencapaian & Rekam Jejak**: 4 slab metrik akademik (IPK 3.92 Cum Laude, 18+ Proyek, 5 Penghargaan, 3+ Tahun Koding).
- **Alur Kerja**: Discover → Define → Design → Build → Launch dengan progress line scroll.
- **Rekomendasi**: Endorsement resmi dosen pembimbing & mentor industri.
- **Jurnal & Riset**: 3 catatan eksplorasi web performance & software engineering.
- **Final CTA & Footer**: Hubungi langsung, email, media sosial, lokasi kampus, dan live clock Jakarta (WIB).

---

## 🛠️ Menjalankan Proyek Secara Lokal

1. Clone repositori ini:
   ```bash
   git clone <URL_REPOSITORY_ANDA>
   cd <NAMA_FOLDER>
   ```

2. Pasang dependensi:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:3000`.

4. Build untuk produksi:
   ```bash
   npm run build
   ```

---

## 🌐 Cara Hosting di Vercel (100% Siap Deploy)

Proyek ini telah dikonfigurasi secara lengkap dengan `vercel.json` dan Vite bundler standar.

### Opsi A: Import Langsung via Dashboard Vercel (Rekomendasi)
1. Push repositori ini ke akun **GitHub** Anda.
2. Buka [Vercel](https://vercel.com) dan masuk dengan akun GitHub Anda.
3. Klik tombol **"Add New..."** → **"Project"**.
4. Pilih repositori GitHub Anda dan klik **"Import"**.
5. Vercel akan secara otomatis mendeteksi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **"Deploy"**. Proyek Anda akan langsung live dalam beberapa detik tanpa error!

### Opsi B: Menggunakan Vercel CLI
```bash
npm i -g vercel
vercel
```
Ikuti instruksi singkat di terminal dan pilih default settings.

---

## 📦 Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4
- **Motion**: Motion (Framer Motion v12)
- **Icons**: Lucide React
- **Audio Feedback**: Native Web Audio API Synthesizer (Zero-weight)
