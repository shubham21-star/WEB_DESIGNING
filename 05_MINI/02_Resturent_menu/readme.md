# 🥩 Skewers & Co. — Responsive Restaurant Menu Website

This project is a fully responsive, static website built for a modern restaurant menu, emphasizing clean, efficient HTML5 and CSS3. A strong portfolio piece demonstrating mastery of **front-end fundamentals** without relying on external libraries or frameworks.

## ✨ Project Status

| Badge | Value |
| :--- | :--- |
| **Status** | ![Status](https://img.shields.io/badge/Project%20Status-Complete-success) |
| **Tech Stack** | ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **Design** | ![Responsive](https://img.shields.io/badge/Design-Responsive-blue) |



---

## 🧭 Table of Contents

1.  [Technical Overview](#-technical-overview)
2.  [Features & Design](#-features--design)
3.  [Project Structure](#-project-structure)
4.  [Getting Started](#-getting-started)
5.  [Future Enhancements](#-future-enhancements)
6.  [License](#-license)

---

## 🛠 Technical Overview

| Category | Details |
| :--- | :--- |
| **Core Languages** | HTML5 (Semantic Structure) & CSS3 (Styling & Layout) |
| **Dependencies** | None (Vanilla Setup) |
| **Layout Strategy** | CSS Flexbox for components; CSS Grid (`auto-fit`/`minmax()`) for the main menu. |
| **Responsiveness** | Mobile-first approach using CSS Media Queries. |
| **Goal** | Achieve fast load times and pixel-perfect rendering across all devices. |

---

## 💎 Features & Design

The website is divided into distinct, easily navigable sections, ensuring a great user experience.

### 💻 Key Design Elements

* **Responsive Layout:** Adapts flawlessly from mobile phones (375px) to large desktop monitors.
* **Sticky Navigation:** A non-intrusive header that remains visible for quick menu access.
* **CSS Grid Menu:** Utilizes modern CSS Grid properties (`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`) for an elegant, self-adjusting menu card layout.

### 📋 Section Breakdown

1.  **Hero Section:** High-impact background image with a clear Call-to-Action (CTA).
2.  **Menu Section:** Displays dish cards featuring an image, name, description, and price.
3.  **About Section:** A concise and engaging story about the restaurant's brand and history.
4.  **Contact & Hours:** Clear listing of business address and operating hours.
5.  **Footer:** Contains copyright information and social media placeholders.

---

## 📁 Project Structure

The codebase maintains a clean and intuitive file hierarchy for easy development and maintenance.

```bash
Skewers-Co-Menu/
│
├── index.html         # Primary application layout and content.
├── style.css          # Comprehensive styling rules and media queries.
└── images/            # Directory for all menu and hero images.
    ├── chicken-satay.jpg
    └── beef-kebab.jpg
    └── ...
