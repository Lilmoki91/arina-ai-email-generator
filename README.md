# Arina AI Email Generator

[![Akses aplikasi / Open the app](https://img.shields.io/badge/Akses%20Aplikasi-Arina%20AI-2563EB?style=for-the-badge)](https://lilmoki91.github.io/arina-ai-email-generator/)

**Penjana e-mel pintar berasaskan AI | AI-powered smart email generator**

Arina AI membantu pengguna menyediakan draf e-mel yang kemas dan profesional dengan lebih mudah. Aplikasi web ini dibina menggunakan HTML, CSS dan JavaScript, serta menyokong Bahasa Melayu dan English.

Arina AI helps users create clear, professional email drafts more easily. This web application is built with HTML, CSS and JavaScript, and supports both Bahasa Melayu and English.

**Akses aplikasi / Open the app:** https://lilmoki91.github.io/arina-ai-email-generator/

---

## Bahasa Melayu

### Ciri-ciri

- Menjana draf e-mel menggunakan AI berdasarkan maklumat yang diberikan.
- Menyediakan templat pantas untuk permohonan cuti, mesyuarat, aduan, ucapan terima kasih, susulan, permohonan maaf, promosi dan invois.
- Menyokong Bahasa Melayu dan English.
- Menawarkan pilihan nada formal, separa formal, mesra, mendesak, pemasaran dan transaksional.
- Membolehkan pengguna mengedit, menyalin, memuat turun atau membuka draf dalam aplikasi e-mel.
- Menyokong penambahan imej dan pautan Google Drive.
- Menyimpan sejarah e-mel dalam storan pelayar (`localStorage`).
- Mempunyai antara muka responsif untuk telefon dan komputer.

### Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- `localStorage` untuk sejarah e-mel
- Font Awesome dan fon web melalui CDN
- Endpoint worker/API untuk penjanaan AI

### Cara menggunakan

1. Buka aplikasi melalui pelayar web.
2. Masukkan subjek atau tujuan e-mel.
3. Tambahkan penerima, nama pengirim dan butiran lain jika perlu.
4. Pilih nada serta bahasa e-mel.
5. Tekan butang **Jana E-mel**.
6. Semak draf yang dijana. Anda boleh mengedit, menyalin, memuat turun atau membukanya dalam aplikasi e-mel.

### Menjalankan secara setempat

Keperluan: pelayar web moden dan sambungan internet untuk CDN serta endpoint AI.

Buka `index.html` secara terus, atau jalankan pelayan setempat dari direktori projek:

```bash
python -m http.server 8000
```

Kemudian lawati <http://localhost:8000>.

### Konfigurasi endpoint AI

Aplikasi menghantar permintaan penjanaan ke endpoint worker yang ditetapkan dalam `script.js`. Jika anda menggunakan endpoint sendiri, kemas kini nilai `WORKER_URL` di dalam fail tersebut. Endpoint perlu menerima permintaan JSON yang mengandungi `prompt` dan memulangkan respons JSON dengan status serta teks yang dijana.

> **Nota keselamatan:** Jangan letakkan kunci API rahsia di dalam kod bahagian klien. Simpan rahsia pada pelayan atau persekitaran worker yang dilindungi.

---

## English

### Features

- Generates AI-assisted email drafts from the information provided.
- Includes quick templates for leave requests, meetings, complaints, thank-you notes, follow-ups, apologies, promotions and invoices.
- Supports Bahasa Melayu and English.
- Offers formal, semi-formal, friendly, urgent, marketing and transactional tones.
- Lets users edit, copy, download or open a draft in an email application.
- Supports adding images and Google Drive links.
- Stores email history in browser storage (`localStorage`).
- Provides a responsive interface for mobile and desktop.

### Technology

- HTML5
- CSS3
- Vanilla JavaScript
- `localStorage` for email history
- Font Awesome and web fonts via CDN
- Worker/API endpoint for AI generation

### How to use

1. Open the application in a web browser.
2. Enter the email subject or purpose.
3. Add the recipient, sender name and any other relevant details.
4. Choose the email tone and language.
5. Select **Generate Email**.
6. Review the generated draft. You can edit, copy, download or open it in an email application.

### Run locally

Requirements: a modern web browser and an internet connection for CDN assets and the AI endpoint.

Open `index.html` directly, or start a local server from the project directory:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

### Configure the AI endpoint

The application sends generation requests to the worker endpoint configured in `script.js`. To use your own endpoint, update `WORKER_URL` in that file. The endpoint should accept a JSON request containing `prompt` and return a JSON response with a status and generated text.

> **Security note:** Do not expose secret API keys in client-side code. Store secrets in a protected server or worker environment.

---

## Penghargaan / Credits

**Pembangun sistem / System developer:** Zulkarnain — berusia 16 tahun pada tahun 2026, pelajar Sekolah Menengah Kebangsaan Rantau Panjang, Klang, Selangor, Malaysia.

**Zulkarnain — age 16 in 2026, student at Sekolah Menengah Kebangsaan Rantau Panjang, Klang, Selangor, Malaysia.**

## Struktur projek / Project structure

```text
.
├── index.html
├── styles.css
├── script.js
├── LICENSE
└── README.md
```

## Lesen / License

Rujuk fail [LICENSE](LICENSE) untuk maklumat lesen projek ini.

See the [LICENSE](LICENSE) file for this project's licensing information.

---

**Dibina untuk memudahkan komunikasi e-mel yang jelas dan profesional.**  
**Built to make clear and professional email communication easier.**
