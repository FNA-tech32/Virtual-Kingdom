# 👑 Virtual Kingdom - Digital Agency & Innovation Platform

A modern, high-performance digital agency website engineered with **React 18**, **Vite**, and **Tailwind CSS**. **Virtual Kingdom** delivers immersive digital experiences, sleek animations, responsive design, a dark/light mode toggle with persistent state, and an enterprise-grade contact suite featuring both primary and alternative communication channels.

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![AOS Animation](https://img.shields.io/badge/AOS-2.3.4-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [📞 Contact & Communication Matrix](#-contact--communication-matrix)
- [🚀 Website Sections](#-website-sections)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [🔧 Installation & Quick Start](#-installation--quick-start)
- [🏃 Available Scripts](#-available-scripts)
- [📁 Project Directory Structure](#-project-directory-structure)
- [🎨 Customization & Configuration](#-customization--configuration)
- [📄 License & Authorship](#-license--authorship)

---

## ✨ Features

- 🌓 **Dynamic Dark / Light Mode** — Seamless theme toggle backed by `localStorage` persistence and automatic HTML class application.
- 📱 **100% Fully Responsive Layout** — Optimized for desktops, laptops, tablets, and smartphones with an interactive mobile drawer navigation.
- 🎭 **Animate On Scroll (AOS)** — Elegant entry animations and smooth transitions on all sections.
- 🎠 **Client Testimonial Slider** — Powered by `react-slick` with responsive breakpoints, avatars, and review quotes.
- 📮 **Dual-Channel Contact System** — Primary switchboards and alternative direct lines (WhatsApp, direct email, alternative hubs) for seamless client outreach.
- 📝 **Interactive Inquiry Form** — Custom form with interactive feedback state, service category picker, and preferred contact channel selector.
- ⚡ **Lightning Fast Builds** — Powered by Vite 5 with Hot Module Replacement (HMR).

---

## 📞 Contact & Communication Matrix

Virtual Kingdom maintains multi-tier contact channels to ensure uninterrupted client support and rapid response times:

| Channel | Primary Details | Alternative / Secondary Details |
| :--- | :--- | :--- |
| **🏢 Physical Office** | **Global Headquarters:**<br>742 Evergreen Terrace, Suite 400<br>Austin, TX 78701, USA | **Innovation & Design Hub:**<br>1204 Virtual Way, Floor 5<br>San Francisco, CA 94105, USA |
| **📞 Telephone Lines** | **Main Switchboard:**<br>[+1 (555) 349-8201](tel:+15553498201)<br>*(General Inquiries & Project Discovery)* | **Direct / WhatsApp Alternative:**<br>[+1 (555) 782-9104](tel:+15557829104)<br>*(Urgent Assistance & WhatsApp Messaging)* |
| **✉️ Email Addresses** | **General Inquiries:**<br>[hello@virtualkingdom.com](mailto:hello@virtualkingdom.com) | **Client Support & Tickets:**<br>[support@virtualkingdom.com](mailto:support@virtualkingdom.com) |
| **⏰ Business Hours** | **Standard Business Week:**<br>Monday – Friday: 9:00 AM – 6:00 PM (EST) | **Emergency & Weekend Coverage:**<br>Saturday: 10:00 AM – 2:00 PM (EST) |

---

## 🚀 Website Sections

1. **Navigation Bar (`Navbar.jsx` & `ResponsiveMenu.jsx`)**
   - Brand logo & title **Virtual Kingdom**
   - Quick navigation links (`#about`, `#services`, `#projects`, `#contact`)
   - "Get in Touch" primary call-to-action button
   - Dark/Light mode theme switch
   - Animated mobile hamburger menu drawer

2. **Hero Section (`Hero.jsx`)**
   - Impactful headline: *"Building Brands in the Virtual Kingdom"*
   - Value proposition description
   - Direct CTA linking to the `#services` showcase
   - Highlight stats card (e.g. 600+ Projects Completed)

3. **Brand Partners (`BrandsLogo.jsx`)**
   - Partner company logos and client trust indicators

4. **Services Showcase (`Services.jsx`)**
   - App Development, Web Designing, Graphic Designing, and Digital Marketing
   - Modern card hover effects with interactive call to request custom quotes

5. **Client Testimonials (`Testimonial.jsx`)**
   - Carousel slider of real client reviews and feedback with ratings

6. **Insights & Projects (`BlogsComp.jsx`)**
   - Real-time analytics, case studies, and latest agency updates

7. **Contact & Alternative Channels (`Contact.jsx`)**
   - Interactive 4-card matrix (Phone, Email, Locations, Business Hours) featuring Primary and Alternative channels
   - Direct inquiry form with real-time feedback
   - "Why Virtual Kingdom" value breakdown panel

8. **Footer (`Footer.jsx`)**
   - Virtual Kingdom summary, social media links (Instagram, Facebook, LinkedIn)
   - Quick links and legal terms
   - Dual contact lines directly accessible in the footer

---

## 🛠️ Tech Stack

- **Core Library:** [React 18.2.0](https://react.dev/)
- **Build Tooling:** [Vite 5.0.8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3.3.6](https://tailwindcss.com/)
- **Icons:** [React Icons 4.12.0](https://react-icons.github.io/react-icons/) (FontAwesome, HeroIcons, Ionicons)
- **Scroll Animations:** [AOS 2.3.4](https://michalsnik.github.io/aos/)
- **Carousel & Sliders:** [React Slick 0.30.1](https://react-slick.neostack.com/) & [Slick Carousel](https://kenwheeler.github.io/slick/)
- **Code Linter:** ESLint 8.55.0

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v16.x or later (recommended: v18.x or v20.x+)
- **npm**: v8.x or later (or `yarn` / `pnpm`)

---

## 🔧 Installation & Quick Start

1. **Navigate to the project root:**
   ```bash
   cd Virtual-Kingdom
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 🏃 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` folder |
| `npm run preview` | Locally serves and previews the production build from `dist/` |
| `npm run lint` | Runs ESLint to identify code quality and style issues |

---

## 📁 Project Directory Structure

```
Virtual-Kingdom/
├── public/                 # Static assets and favicon
├── src/
│   ├── assets/             # Brand logos, blog graphics, and team illustrations
│   │   ├── blog/           # Blog preview images
│   │   └── website/        # Vectors, team graphics, and brand assets
│   ├── components/         # Modular React UI components
│   │   ├── Blogs/          # Blog & project preview cards
│   │   ├── BrandsLogo/     # Partner logos strip
│   │   ├── Contact/        # Dual-channel contact suite & interactive form
│   │   ├── Footer/         # Agency footer with dual contact blocks
│   │   ├── Hero/           # Landing hero section
│   │   ├── Navbar/         # Header navigation, drawer, and dark mode toggle
│   │   ├── Services/       # Services catalog with hover interactions
│   │   └── Testimonial/    # Client review carousel slider
│   ├── App.jsx             # Main application orchestrator & AOS initialization
│   ├── index.css           # Global Tailwind utilities and color variables
│   └── main.jsx            # React 18 DOM mount point
├── index.html              # HTML5 entry template with Virtual Kingdom SEO tags
├── package.json            # Scripts, package metadata, and dependencies
├── postcss.config.js       # PostCSS plugins configuration
├── tailwind.config.js      # Custom primary color, container, and dark mode settings
├── vite.config.js          # Vite React plugin configuration
└── README.md               # Project documentation
```

---

## 🎨 Customization & Configuration

### Primary Colors
The primary theme color is configured in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: "#6153CD", // Virtual Kingdom Purple
      dark: "#111111",
    },
  },
}
```

### Dark Mode
Dark mode is activated via the `dark` class on the root `<html>` element. The toggle component in `src/components/Navbar/DarkMode.jsx` automatically synchronizes the theme with `localStorage`.

---

## 📄 License & Authorship

- **Project:** Virtual Kingdom
- **License:** [MIT License](https://opensource.org/licenses/MIT)
- **Year:** © 2026 Virtual Kingdom. All rights reserved.
