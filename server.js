const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// --- Middleware ---
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menyajikan file statis (HTML, CSS, JS) dari folder saat ini
app.use(express.static(path.join(__dirname, '.')));

// --- Setup Database SQLite ---
// Database akan dibuat sebagai file 'users.db'
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error("Gagal konek ke database:", err.message);
    } else {
        console.log("Terhubung ke database SQLite.");
        // Buat tabel users jika belum ada
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        )`, () => {
            // --- SEED DATA (Membuat User Contoh) ---
            // Kita buat user: admin@example.com / password123
            const insert = 'INSERT INTO users (email, password) VALUES (?, ?)';
            const sampleEmail = "admin@example.com";
            const samplePassword = "password123";

            // Hash password dulu sebelum disimpan (Best Practice!)
            bcrypt.hash(samplePassword, 10, (err, hash) => {
                db.run(insert, [sampleEmail, hash], (err) => {
                    if (!err) {
                        console.log(`User contoh dibuat: ${sampleEmail} / ${samplePassword}`);
                    }
                });
            });
        });
    }
});

// --- ROUTES (Jalur Akses) ---

// 1. Route untuk Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Cari user berdasarkan email
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Server Error" });
        }
        if (!user) {
            return res.status(400).json({ success: false, message: "Email tidak ditemukan!" });
        }

        // Jika user ketemu, bandingkan password input dengan password hash di DB
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (isMatch) {
                // Login Berhasil
                res.json({ success: true, message: "Login Berhasil! Selamat Datang." });
            } else {
                // Password Salah
                res.status(400).json({ success: false, message: "Password salah!" });
            }
        });
    });
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`Buka browser dan akses http://localhost:${PORT}/login.html`);
});
