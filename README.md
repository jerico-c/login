# Form Login Sederhana

Sebuah proyek frontend dasar untuk membuat halaman login yang bersih dan modern. Proyek ini dibuat hanya menggunakan HTML dan CSS, dan dirancang sebagai titik awal yang mudah untuk dikembangkan lebih lanjut.

## 🎨 Tampilan

Halaman ini menampilkan sebuah form login yang terpusat di tengah layar dengan latar belakang abu-abu muda. Form itu sendiri memiliki latar belakang putih, sudut melengkung, dan efek bayangan yang lembut untuk memberikan kesan modern.

## ✨ Fitur

-   **Input Username**: Kolom untuk memasukkan nama pengguna.
-   **Input Password**: Kolom untuk memasukkan kata sandi (karakter disembunyikan).
-   **Tombol Login**: Tombol interaktif dengan efek `hover`.
-   **Validasi Dasar**: Menggunakan atribut `required` dari HTML5 untuk memastikan tidak ada kolom yang kosong.
-   **Desain Minimalis**: Tampilan yang bersih dan terpusat, dibuat sepenuhnya dengan CSS internal.

## 🛠️ Teknologi yang Digunakan

Proyek ini murni menggunakan teknologi dasar web frontend:

-   **HTML5**: Untuk struktur dan konten form.
-   **CSS3**: Untuk styling, layout, dan tampilan visual.

Tidak ada framework atau library eksternal yang digunakan.

## 🚀 Cara Menjalankan

Tidak ada proses instalasi yang rumit. Cukup ikuti langkah-langkah berikut:

1.  **Clone atau Unduh Proyek**
    Jika ini adalah repositori Git, Anda bisa melakukan clone:
    ```bash
    git clone https://github.com/jerico-c/login/
    ```
    Atau, cukup unduh file `login.html`.

2.  **Buka File di Browser**
    Buka file `login.html` langsung di browser web favorit Anda (seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge).

## 📁 Struktur File

Struktur proyek ini sangat sederhana, hanya terdiri dari satu file:

```
.
└── login.html
```

## 📈 Rencana Pengembangan (Improvement)

Form ini sengaja dibuat sederhana agar mudah dipelajari dan dimodifikasi. Berikut adalah beberapa ide untuk pengembangan selanjutnya:

-   [x] **Validasi Frontend dengan JavaScript**:
    -   Menambahkan validasi real-time untuk memeriksa format email.
    -   Memberi tahu pengguna jika password terlalu pendek.
    -   Menampilkan pesan error yang lebih informatif.

-   [x] **Integrasi Backend**:
    -   Menghubungkan form ke server (misalnya dengan **Node.js/Express**, **PHP**, atau **Python/Flask**).
    -   Membuat sistem otentikasi untuk memverifikasi username dan password dengan database.

-   [x] **Desain Responsif**:
    -   Menggunakan **CSS Media Queries** agar tampilan tetap optimal di perangkat mobile dan tablet.

-   [x] **Fitur Tambahan**:
    -   Menambahkan tautan "Lupa Password?".
    -   Menambahkan checkbox "Ingat Saya" (Remember Me).

-   [ ] **Peningkatan Keamanan**:
    -   Mengimplementasikan *hashing* password di sisi server.
    -   Memastikan koneksi menggunakan HTTPS.
