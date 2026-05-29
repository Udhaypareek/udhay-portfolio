# ~/udhay — Engineering Portfolio

### Full Stack Developer & AI-Enabled Systems
A high-fidelity, interactive portfolio built with a **Modern Linux Workstation** aesthetic. This project focuses on pushing the boundaries of WebGL, Framer Motion, and high-performance React architectures to create a \"Living Desktop\" experience.

---

## 🛠 Tech Stack
*   **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/) (Lightning fast HMR & builds)
*   **UI/UX Engine**: [Framer Motion](https://www.framer.com/motion/) (Physics-based animations & drag interaction)
*   **Styling**: [Material UI (MUI) v5](https://mui.com/) + Emotion (Custom themed system)
*   **3D Elements**: [Three.js](https://threejs.org/) via [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) (Performant particle systems)
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Atomic & lightweight state)
*   **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis) (Cinematic inertia scrolling)
*   **Typography**: IBM Plex Mono (Engineering feel) & Inter (Modern readability)

---

## ✨ Key Features & UX Innovations

### 🖥 The \"Desktop-First\" Interaction
*   **Draggable Project Windows**: On desktop, projects open in high-fidelity \"OS Windows\" that can be moved and interacted with, mirroring a real Linux development environment.
*   **Fuzzy-Search Command Palette**: Built-in \Ctrl+K\ (or Menu) palette for instant navigation across the site using custom fuzzy logic.
*   **Cinematic Launch Sequences**: Custom \"App Launch\" animations where icons physically fly to the top-bar before opening tabs, with perfectly timed 2.5s ease-curves.

### 📱 High-Fidelity Mobile UX
*   **Stacked Glass Drawers**: The Experience section uses a custom \"Folder Stack\" logic with \ackdrop-filter\ blur. Experience cards overlap like physical folders and \"pop\" into focus when tapped.
*   **Adaptive Haptics**: Integrated \
avigator.vibrate\ support for physical feedback on tech-tag clicks and project launches.
*   **Adaptive Backgrounds**: A customized WebGL particle field that scales its complexity (4,000 → 1,500 particles) based on device processing power.

### 🐧 Terminal Engineering UI
*   **Git-Branch Career Log**: A vertical timeline inspired by \git log --graph\, featuring dynamic node glowing and \"Commit Diff\" style responsibility lists.
*   **System Status Dashboard**: Real-time performance monitoring and \"Terminal Blocks\" that display project metadata in raw JSON/CLI formats.
*   **Typewriter Logic**: Custom hooks for simulating real-time terminal input buffers.

---

## 🚀 Performance Optimizations
*   **Lazy-Loaded Ecosystem**: Every major section is lazy-loaded with a customized suspense fallback to ensure minimal initial bundle size.
*   **Low-End Device Detection**: Automatic detection of hardware constraints (CPU cores/DPI) to toggle between WebGL and CSS-Grid fallbacks.
*   **Reduced Motion Support**: Full compliance with \prefers-reduced-motion\ to ensure accessibility for all users.

---

## 📜 Career Log
Managed via \src/data/experience.ts\, the portfolio tracks deep technical roles including:
*   **Creative Upaay**: Full Stack Developer (Productivity Tools & MERN)
*   **BetaZen InfoTech**: AI Systems Engineer (LLM Integration & RAG)
*   **Chegg India**: Subject Matter Expert (Technical Problem Solving)

---

## 🛠 Development
\\\ash
# Install dependencies
npm install

# Start the interactive dev server
npm run dev

# Build for production
npm run build
\\\

---
**~/udhay** | *Engineered with precision and a love for the terminal.*
