# 🌿 Two Good Co (Animated Clone)

An animated, responsive clone of the award-winning [Two Good Co](https://www.awwwards.com/), built using modern frontend techniques to recreate a cinematic, smooth-scrolling user experience.

---

## 🚀 Live Demo

Visit the live demo here:
https://abhi172004.github.io/TwoGoodCo/

---

## 📁 Project Structure

```
TwoGoodCo/
│
├── index.html         # HTML structure and embedded video
├── style.css          # Styling and layout rules
├── script.js          # GSAP + ScrollTrigger + Locomotive Scroll animations
├── video.mp4          # Intro video element
└── assets/            # Images, fonts, and optional media
```

---

## ✨ Core Features

* **Responsive Design** — Optimized for desktop, tablet, and mobile displays.
* **Smooth Scroll Animations** — Powered by GSAP and ScrollTrigger.
* **Cinematic Intro** — Full-screen background video on load.
* **Locomotive Scroll Integration** — Adds smooth momentum scrolling effects.
* **Interactive Sections** — Animate into view as users scroll.

---

## 🔧 Technologies Used

* **HTML5**
* **CSS3** (Custom fonts, Flexbox/Grid)
* **JavaScript (ES6)** — Main logic and event handling
* **GSAP** — Animations
* **ScrollTrigger** — Scroll-based control of animations
* **Locomotive Scroll** — Enhanced scroll effects

---

## 🔨 How It Works

1. **Intro Video**: Loads on the homepage using a full-screen `<video>` element.
2. **Scroll Effects**:

   * **Locomotive Scroll** initializes a smooth-scrolling container.
   * **GSAP + ScrollTrigger** animates elements as they enter the viewport.
3. **Structure**:

   * Sections marked with data attributes or JS selectors.
   * CSS transitions set the initial hidden state; GSAP animates them into view.

---

## 🖥️ Usage & Setup

### Local Development

```bash
git clone https://github.com/abhi172004/TwoGoodCo.git
cd TwoGoodCo
```

1. **Install dependencies** *(if using a bundler or package manager)*:

   ```bash
   npm install gsap locomotive-scroll
   ```
2. **Serve locally**:

   * Use any static server (e.g., `serve`, `live-server`, or VS Code Live Server).

   ```bash
   live-server
   ```

   * Or directly open `index.html` in your browser.

---

## 📌 Screenshots / Video 🎮

![image](https://github.com/user-attachments/assets/e5052287-71ce-433a-9946-9aefc706004c)
![image](https://github.com/user-attachments/assets/7cd3453a-db86-4491-a0df-7713ed2a2fa9)
![image](https://github.com/user-attachments/assets/8e23afa6-1c43-4679-9daa-94854de1e13f)


---

## 🧹 Extending & Customization

* Swap `video.mp4` for your branding intro.
* Adjust `GSAP` timelines in `script.js` for custom fade/slide effects.
* Modify styles in `style.css` for theme colors and typography.
* Add new sections/components within the `<body>` and animate them using GSAP/ScrollTrigger.

---

## 🗂️ Future Enhancements

* Lazy-load videos and images for performance.
* Add navigation bar with smooth scroll links.
* Include interactive UI elements (e.g. hover effects, sliders).
* Convert into a full React/Vue component for reusability.

---

## 🤝 Contribution

Contributions are welcome! Here's how to get involved:

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to branch (`git push origin feature-name`).
5. Open a pull request — describe your feature or fix.

---

## 🧑‍💻 Author

**Abhijeet Bhise** 
GitHub: [@abhi172004](https://github.com/abhi172004)
