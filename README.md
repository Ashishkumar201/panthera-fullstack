# 🐆 Panthera – Full Stack Dashboard Replication

A full-stack web application replicating a Power BI dashboard using the MERN stack, designed to demonstrate dashboard replication, map-based interactivity, and data filtering with full-stack integration.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Bonus Feature](#bonus-feature)
- [Challenges Faced](#challenges-faced)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Author](#author)

---

## 🔍 Overview

**Panthera** is a dynamic full-stack dashboard that mimics a Power BI visualization using React, Node, and MongoDB. It supports interactive maps, data filters, and authentication — giving a complete dashboard experience with real backend support.

---

## 🛠️ Tech Stack

### 🖥 Frontend
- React.js (Vite)
- Tailwind CSS
- React Table
- React Leaflet
- React Router
- Google OAuth Login – `@react-oauth/google`
- JWT Decode – `jwt-decode`

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🚀 Features

### Frontend
- 📊 Data dashboard with community and listing views
- 🔍 Dynamic filtering using dropdowns
- 🗺️ Leaflet map integration with pins and polygons
- 🔐 Google Login with session management
- 🧭 Sidebar navigation
- 💬 Chat system integration (see Bonus Feature)

### Backend
- RESTful APIs for `/api/listings` and `/api/communities`
- Static data parsed from `.json` converted from Excel
- Google login decoding via JWT
- Environment variable support (`.env` file)

---

## 🧪 Getting Started

### ⚙️ Backend Setup (`server/panthera`)

```bash
cd server/panthera
npm install
npm run dev
Make sure MongoDB is running locally, or update your .env:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/panthera
💻 Frontend Setup (client/panthera)
bash
Copy
Edit
cd ../../client/panthera
npm install
npm run dev
Visit the local app at: http://localhost:5173

✨ Bonus Feature – Integrated Chat System
A static ChatGPT-style assistant is integrated into the UI as a floating chat widget.

➕ Functionality:
Appears on bottom-right corner

Expands to allow user input

Mimics a real-time support system using a static prompt/response model

Ideal for product walkthroughs, support integration, or showcasing UI versatility in dashboards.

🧱 Challenges Faced
🔷 Map-based Filtering with Polygons
Integrated Leaflet drawing tools to capture polygons

Used geospatial logic to filter listings within drawn areas

🔷 Google OAuth + JWT Decode
Encountered module resolution error with jwt-decode

Solved by ensuring it was properly installed and imported in Vite context

🔷 Dropdown Filters Not Updating
Fixed state update issues with useMemo to recalculate filtered values dynamically

🌍 Live Demo
🔗 Live Deployed Link:
👉 https://panthera-fullstack-a7fd4xa22-ashishs-projects-662bb8d9.vercel.app

🖼️ Screenshots
(Upload the screenshots to /screenshots/ folder and link them below once ready)

md
Copy
Edit
![Dashboard View](./screenshots/dashboard.png)
![Map Integration](./screenshots/map.png)
![Chat Widget](./screenshots/chat.png)
👨‍💻 Author
Built with 💻 by Ashish Kumar
Full Stack Developer | Trader | Builder

“Turning code into capital, one commit at a time.”
