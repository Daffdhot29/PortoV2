# Muhammad Daffa Yunus — Portfolio

Portofolio Next.js dengan desain editorial ivory, charcoal, dan burnt orange. Font Instrument Sans dan Newsreader disimpan lokal di `app/fonts`, beserta lisensinya.

## Menjalankan

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`. Untuk produksi:

```bash
npm run build
npm start
```

Paket ini berisi source, foto, CV, font, dan video. Folder dependency, hasil build, serta riwayat Git tidak disertakan. Saat menerapkan ke checkout lama, salin source ini ke folder proyek sambil mempertahankan folder `.git` milik checkout tersebut. Dependensi dan lockfile mengikuti proyek yang dikirim.

## Konten

- Hero → nama, deskripsi, tautan Projects dan Contact.
- Projects → **3 proyek**: MarketLens, TranslateByDeff, dan Telco Churn.
- Nama asli TranslateMachineByDeff dan TelcoSense tetap ditampilkan; deskripsi, teknologi, dan URL demo keduanya berasal dari source lama.
- About → profil, foto, pendidikan, mata kuliah, pengalaman, bidang fokus, keahlian, dan pencapaian. Panel rincian dapat dibuka tanpa JavaScript tambahan.
- Contact → email, GitHub, LinkedIn, dan unduhan CV dari data asli.

`data/profile.ts` memuat data profil dan kontak. `data/projects.ts` memuat proyek, termasuk lokasi video dan poster. `data/experiences.ts`, `data/skills.ts`, dan `data/achievements.ts` mempertahankan data asli.

Kontribusi pribadi, status pengembangan, repository proyek, dan stack MarketLens yang tidak tersedia ditandai placeholder. Isi berdasarkan informasi yang sudah dikonfirmasi. Pratinjau dua proyek lainnya adalah ilustrasi alur model, bukan screenshot aplikasi.

## Video MarketLens

`public/videos/marketlens.mp4` memuat video asli berdurasi sekitar 2 menit 19 detik dalam H.264/AAC, 1920 × 1080. Penataan metadata fast start diterapkan tanpa mengodekan ulang audio/video. Poster berasal dari frame video tersebut.

Pemutar menggunakan kontrol HTML, mendukung pemutaran inline, dan `preload="none"`. Pengunjung memulai video sendiri. Link Buka video menyediakan akses langsung ke berkasnya.

## Pemeriksaan

Build produksi dan pemeriksaan TypeScript berhasil. Pemeriksaan hasil prerender mencakup jumlah proyek, tujuan tautan internal, dan referensi aset. Foto dan CV asli dipertahankan. Browser interaktif belum diuji pada sesi ini.
