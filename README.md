# Sachin Rana — Portfolio

Personal portfolio website showcasing my projects, technical skills, and experience as a Computer Science student and full-stack developer.

Built as a cinematic, single-page WebGL experience featuring an interactive 3D portrait with dual-texture color reveal, volumetric background shaders, smooth scroll animations (GSAP + Lenis), and a case-study drawer system.

---

## 🚀 Live Website

> _Deployment link coming soon_

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Core** | HTML5, Vanilla CSS, JavaScript |
| **3D / WebGL** | Three.js (r128) — custom GLSL shaders |
| **Animation** | GSAP 3.12 + ScrollTrigger |
| **Smooth Scroll** | Lenis |
| **Typography** | SplitType + Google Fonts (Inter, Space Grotesk, Outfit, Syne) |
| **Design** | Editorial minimal — white background, red accent, custom cursor |

---

## 📂 Project Structure

```
├── 3d.html                  # Main portfolio (single HTML file with embedded CSS/JS)
├── textures.js              # Base64-encoded portrait textures (B&W + color)
├── sach-modified.jpeg       # About section portrait image
├── rana_mod2.png             # B&W portrait source (for texture generation)
├── rana3.png                 # Color portrait source (for texture generation)
├── generate_textures.js     # Dev utility — generates textures.js from source PNGs
├── compare_png.js           # Dev utility — compares PNG alpha bounds
├── find_shift.js            # Dev utility — calculates pixel shift between portraits
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

---

## 🏗 Featured Projects

### SkillLedger
Trust infrastructure for technical hiring — GitHub intelligence + coding assessment platform with Monaco Editor and Judge0 sandboxed execution.

### HireFlow AI
Multi-tenant SaaS recruitment automation powered by Gemini AI agents, SHA-256 response caching, and async batch processing.

### Qwerty · Synapse OS
Next-generation visibility, orchestration, and governance platform for autonomous multi-agent AI systems. Real-time topology mapping, hallucination risk scoring, and human-in-the-loop governance.
- [GitHub Repository](https://github.com/hritikshuklalfc/qwerty#synapse-os)

### Synapse OS (Website)
Production web interface for the AI Agent Observability platform — high-contrast monochrome design system with interactive legal, contact, and careers modules.

---

## 💻 Development

This is a static single-page site. No build step or npm required.

### Run locally

Simply open `3d.html` in a modern browser:

```bash
# macOS
open 3d.html

# Linux
xdg-open 3d.html

# Or use any local server, e.g.:
npx serve .
```

### Regenerate portrait textures

If you modify the source portrait PNGs, regenerate the base64 texture file:

```bash
node generate_textures.js
```

---

## 👤 Author

**Sachin Rana**
B.Sc. Computer Science · BITS Pilani (Online Programme)

- **GitHub**: [github.com/Sachinva-karma](https://github.com/Sachinva-karma)
- **LinkedIn**: [linkedin.com/in/sachin-rana077](https://www.linkedin.com/in/sachin-rana077)
- **Email**: sachinrana77601@gmail.com

---

## 📄 License

This project is open source and available for reference and learning purposes.
