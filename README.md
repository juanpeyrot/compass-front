
# 🌐 Compass URL Shortener & QR Generator — Frontend

Welcome to the **frontend** of a modern, minimalist and powerful URL Shortener & QR Code Generator. This application is designed to offer a seamless, fast and aesthetically clean experience for users looking to create, manage, and share shortened URLs and QR codes — enhanced with cutting-edge features and an intuitive interface.

**Compass's API repository [here](https://github.com/juanpeyrot/compass-api)**

---

## ✨ Description

Compass transforms long, cluttered URLs into sleek, shortened links — with the added option of password protection for extra security. Not just that, it allows users to instantly generate downloadable QR codes for any link, making it perfect for both digital and print sharing.

Login is effortless thanks to seamless **Google** and **GitHub authentication**, and the entire app is built on a foundation of **simplicity, minimalism, and performance**.

Whether you’re managing your personal links, creating codes for business cards, or protecting sensitive content — this tool makes it fast, easy, and beautiful.

---

## 🛠️ Technologies

| Technology     | Description                                             |
|:---------------|:--------------------------------------------------------|
| **React**       | Modern JavaScript library for building interactive UIs |
| **Vite**        | Lightning-fast development server and bundler          |
| **TypeScript**  | Strongly typed JavaScript for scalable, reliable code  |
| **Zustand**     | Lightweight, intuitive state management library        |
| **Tailwind CSS**| Utility-first CSS framework for custom designs         |
| **Lucide React** | Icon library integration for a modern UI               |

---

## 🚀 Key Features

- 🔒 **Password-Protected Links** — Secure your shortened links with a password, ensuring only the right people have access.
- 🎨 **Minimalist & Clean Design** — Carefully crafted with a focus on simplicity and clarity, using Tailwind CSS for a sleek modern look.
- 📲 **Instant QR Code Generation** — Convert any URL into a QR code, perfect for mobile or printed use cases.
- 💾 **Downloadable QR Codes** — Save your generated QR codes as image files, ready to use wherever you need them.
- 🌐 **OAuth Login with Google and GitHub** — Fast and secure authentication methods without the hassle.
- ⚡ **Blazing Fast Performance** — Thanks to Vite and optimized React components, enjoy instant load times and smooth interactions.
- 📱 **Responsive & Mobile-Friendly** — Works perfectly on smartphones, tablets, and desktops.

---

## 🗂️ Architecture

The frontend project follows a clean, modular, and scalable folder structure, separating responsibilities by domain:

| Folder        | Purpose                                                             |
|:--------------|:--------------------------------------------------------------------|
| **components** | Reusable and modular React components used across the application   |
| **hooks**      | Custom React hooks to encapsulate reusable logic                    |
| **lib**        | Utility functions and **Zod schema validators** for data validation |
| **pages**      | All the route-based pages of the application, following a file-based routing approach |
| **store**      | Global state management powered by **Zustand**, providing simple and reactive state logic |
| **types**      | TypeScript type definitions to ensure type safety and consistency throughout the code |

---
