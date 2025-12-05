# 🥩 Skewers & Co. — Responsive Restaurant Menu Website

A high-performance, fully responsive restaurant website engineered with clean HTML5 and CSS3. This project showcases strong front-end fundamentals, modern UI patterns, and a streamlined, zero-dependency architecture.

---

## 🚦 Project Snapshot

| Metric | Details |
| :--- | :--- |
| **Status** | ![Status](https://img.shields.io/badge/Project%20Status-Complete-success) |
| **Tech Stack** | ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **Design** | ![Responsive](https://img.shields.io/badge/Design-Responsive-blue) |

---

## 🧭 Table of Contents

1. [Technical Overview](#technical-overview)
2. [Features & UX](#features--ux)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Enhancement Roadmap](#enhancement-roadmap)
6. [License](#license)

---

## 🛠 Technical Overview

| Category | Details |
| :--- | :--- |
| **Core Stack** | Pure HTML5 + CSS3 (no frameworks) |
| **Dependencies** | None |
| **Layout Engine** | Flexbox for structure, CSS Grid for product layout |
| **Responsiveness** | Mobile-first, scales from 375px to 4K monitors |
| **Performance Goal** | Zero-runtime, minimal payload, instant loading UX |

A clean, production-aligned implementation focused on scalability and maintainability.

---

## 💎 Features & UX

A polished, user-centered experience crafted around modern UI expectations.

### 🚀 Core Experience
- **Fully responsive layout** across all breakpoints  
- **Sticky, translucent navigation bar** powered by `backdrop-filter: blur()`  
- **Auto-adjusting CSS Grid menu** using `auto-fit` + `minmax()`  
- **Hero banner** with strong CTA and overlay  
- **Consistent typography and spacing** for brand-grade aesthetics  

### 📌 Section Walkthrough
1. **Hero**  
   Full-bleed background image with overlay and CTA.

2. **Menu**  
   Grid of card-based dish items with images, names, descriptions, and prices.

3. **About**  
   Clean narrative highlighting brand story and tradition.

4. **Contact**  
   Straightforward hours and address listing.

5. **Footer**  
   Lightweight, clarity-focused component.

---

## 📁 Project Structure

```bash
Skewers-Co-Menu/
│
├── index.html        # Main layout and HTML structure
├── style.css         # Styles, utilities, and responsive rules
└── images/           # Directory for hero and dish images
    ├── hero-bg.jpg
    ├── chicken-satay.jpg
    ├── paneer-tikka.jpg
    └── ...

```

## 🚀 Getting Started

To view and run this project locally, follow these simple steps. No complex build tools or installations are required.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/shubham21-star/WEB_DESIGNING.git](https://github.com/shubham21-star/WEB_DESIGNING.git)
    cd WEB_DESIGNING/05_MINI/02_Resturent_menu
    ```
2.  **Open the File:**
    Locate and open the `index.html` file directly in your preferred web browser (Chrome, Firefox, etc.).

---

## 📈 Future Enhancements

These additions would move the project from a static demo to a full-featured application:

* **Dynamic Menu:** Load menu data from a separate JSON file to decouple content from structure.
* **Interactive Contact Form:** Implement form validation and integrate with a basic serverless function for submissions.
* **Accessibility (A11y):** Enhance keyboard navigation and screen reader compatibility (e.g., using `aria` attributes).
* **Animations:** Add subtle CSS animations (like `transform` and `transition`) for a more dynamic user experience on menu item hover.

---

## ⚖️ License

This project is licensed under the **MIT License**, making it open for use in educational, personal, and commercial projects. Please provide appropriate attribution.