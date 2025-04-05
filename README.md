# 🎬 YouTube Clone – React, Tailwind CSS & Zustand

A modern, fully responsive YouTube-like video streaming application built using **React**, **Tailwind CSS**, and **Zustand** for state management. This project offers an intuitive UI, dark/light mode support, and smooth interactions to deliver a premium video browsing experience.

---

## 📸 Overview

This YouTube Clone fetches real-time data from the **YouTube Data API v3**, allowing users to explore trending content, search videos, and view video details. With responsive layouts and optimized performance, it mirrors the core UI/UX experience of YouTube — all built from scratch using modern frontend tools.

---

## ✨ Features

- 🔍 **Search Functionality** – Find videos by keyword instantly  
- 📺 **Video Feed** – Home feed with trending & popular content  
- 🌓 **Dark / Light Mode** – Seamless toggle with Zustand store  
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop  
- ⌛ **Skeleton Loaders** – Clean loading states with shimmer effect  
- 🎥 **Video Detail Page** – Watch videos with full metadata & suggestions  
- ⚡ **State Management** – Zustand-powered UI state control  
- 📚 **Category Navigation** – Filter videos by topic/category  

---

## 🛠️ Technologies Used

| Tool/Library     | Description                            |
|------------------|----------------------------------------|
| **React**        | Core UI library for building interfaces |
| **Tailwind CSS** | Utility-first CSS framework            |
| **Zustand**      | Lightweight global state management    |
| **React Router** | Client-side routing                    |
| **React Loading Skeleton** | Skeleton placeholders for UX |
| **YouTube Data API v3** | Fetches dynamic video content   |

---

## 🌐 Live Demo

🚀 [View Live Site](https://your-live-site-link.com)

---

## 📁 Project Structure

```
src/
├── assets/             # Static assets like logos, images
├── components/         # Reusable components (VideoCard, Navbar, Sidebar)
├── context/            # Zustand store for global state
├── hooks/              # Custom React hooks
├── pages/              # Route-based views (Home, VideoDetail)
├── utils/              # Helper functions (formatting, API)
├── App.jsx             # Root component
└── main.jsx            # Entry point
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/youtube-clone.git

# 2. Navigate into the project
cd youtube-clone

# 3. Install dependencies
npm install

# 4. Create a .env file and add your YouTube API Key
VITE_YOUTUBE_API_KEY=your_api_key_here

# 5. Start the development server
npm run dev
```

---

## 🔑 API Key Setup

This project uses the **YouTube Data API v3**. To make it work:

1. Go to [Google Developers Console](https://console.developers.google.com/).
2. Create a project and enable **YouTube Data API v3**.
3. Generate an API key.
4. Add the key to your `.env` file:

```env
VITE_YOUTUBE_API_KEY=your_api_key_here
```

---

## 🧠 Planned Enhancements

- 📺 Channel Pages 

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](https://github.com/your-username/youtube-clone/issues) or submit a pull request.

---

## 👨‍💻 Author

**Abdullah Mohammad**  
📧 [abdullahmollah311@gmail.com](mailto:abdullahmollah311@gmail.com)  
🔗 [Portfolio](https://your-portfolio-link.com)

---

> “Keep it clean. Keep it fast. Keep it responsive.” 🚀  
> — *Abdullah Mohammad*
