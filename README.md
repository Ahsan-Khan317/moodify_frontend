# 🎵 Moodify - AI-Powered Mood-Based Music Player

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2.1-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/MediaPipe-0.10.32-00ADD8?style=for-the-badge&logo=google" alt="MediaPipe"/>
  <br>
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/npm-10+-CB3837?style=for-the-badge&logo=npm" alt="npm"/>
</div>

## 🌟 Overview

**Moodify** is an innovative music streaming application that uses cutting-edge AI facial emotion detection to curate personalized music experiences. By analyzing your facial expressions in real-time, Moodify recommends songs that perfectly match your current mood, creating a truly immersive and emotional music journey! 🎭✨

## ✨ Features

### 🎭 AI Emotion Detection
- **Real-time Facial Analysis**: Uses MediaPipe's advanced computer vision to detect emotions from your webcam
- **Instant Mood Recognition**: Identifies happiness, sadness, anger, surprise, and more
- **Seamless Integration**: Smooth emotion-to-music transition

### 🎵 Music Experience
- **Personalized Playlists**: Get song recommendations based on your detected mood
- **Full Music Player**: Complete playback controls with modern UI
- **Song Library**: Browse and discover your entire music collection
- **Mood-Based Filtering**: Find songs that match specific emotions

### 🔐 User Management
- **Secure Authentication**: User registration and login system
- **Profile Management**: Personalized user profiles
- **Protected Routes**: Secure access to premium features

### 🎨 Modern UI/UX
- **Beautiful Design**: Stunning glassmorphism effects and gradients
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Dark Theme**: Eye-friendly dark interface with vibrant accents
- **Smooth Animations**: Fluid transitions and micro-interactions

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.3.1** - Fast build tool and development server

### State Management & Data
- **Redux Toolkit 2.11.2** - Efficient state management
- **Axios 1.13.6** - HTTP client for API requests

### Styling & UI
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **Tailwind CSS Vite Plugin** - Optimized Tailwind integration

### AI & Computer Vision
- **MediaPipe Tasks Vision 0.10.32** - Google's AI vision framework for emotion detection

### Routing & Navigation
- **React Router DOM 7.13.1** - Declarative routing for React

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Types** - Type definitions for better development experience

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** (version 10 or higher)
- **Webcam** (for emotion detection feature)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moodify/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Allow camera permissions when prompted for emotion detection

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

### Code Quality

```bash
# Run ESLint for code linting
npm run lint
```

## 📁 Project Structure

```
📦 src/
├── 🎯 features/
│   ├── 🔐 Auth/                 # Authentication module
│   │   ├── 🧩 components/       # Auth UI components
│   │   ├── 🔄 contexts/         # Auth context providers
│   │   ├── 📄 pages/           # Login, signup, profile pages
│   │   └── 🌐 services/        # Auth API services
│   ├── 🤖 expression_detector/  # AI emotion detection
│   │   ├── 🪝 hooks/           # Custom hooks for face detection
│   │   ├── 📄 pages/           # Emotion detection page
│   │   └── 📷 services/        # Camera and MediaPipe services
│   ├── 🏠 Home/                # Landing page
│   ├── 🎵 songs/               # Music features
│   │   ├── 🎼 context/         # Song state management
│   │   ├── 📄 pages/           # Player, library, mood songs
│   │   └── 🎶 services/        # Music API services
│   └── 🔗 shared/              # Shared components & utilities
│       ├── 🌐 api/             # Axios instance configuration
│       └── 🧩 COMPONENTS/      # Reusable UI components
├── 🎨 assets/                  # Static assets (images, icons)
├── ⚛️ App.jsx                  # Main app component
├── 🚀 main.jsx                 # App entry point
├── 🛣️ Routes.jsx               # Application routing
└── 🎨 index.css                # Global styles
```

## 🎯 How It Works

1. **🎭 Detect Your Mood**: Use the emotion detection feature to analyze your facial expressions
2. **🎵 Get Recommendations**: Receive personalized song suggestions based on your detected emotion
3. **▶️ Enjoy Music**: Play your favorite tracks with our intuitive music player
4. **🔄 Continuous Learning**: The app learns from your preferences to improve recommendations

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for API endpoints and other configurations:

```env
VITE_API_BASE_URL=your_api_endpoint
VITE_MEDIA_PIPE_MODEL_URL=path_to_model
```

### Camera Permissions
The emotion detection feature requires webcam access. Ensure your browser allows camera permissions for the best experience.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google MediaPipe** for the amazing computer vision capabilities
- **React Community** for the fantastic framework
- **Tailwind CSS** for the beautiful styling utilities
- **Vite** for the lightning-fast development experience

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: [your-email@example.com]
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

<div align="center">
  <p>Made with ❤️ and lots of 🎵</p>
  <p>Transform your emotions into melodies! 🎭➡️🎶</p>
</div>
