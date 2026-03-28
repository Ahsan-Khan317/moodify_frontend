import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./features/shared/COMPONENTS/loader.jsx";
import Navbar from "./features/shared/COMPONENTS/navbar.jsx";
import ProtectedRoute from "./features/shared/COMPONENTS/ProtectedRoute.jsx";

// Lazy imports
import Home from "./features/Home/pages/home.jsx"
const MediaPipeEmotion = lazy(() => import("./features/expression_detector/pages/detect_face.jsx"));
const Signup = lazy(() => import("./features/Auth/pages/signup.jsx"));
const Profile = lazy(() => import("./features/Auth/pages/profile.jsx"));
const Login = lazy(() => import("./features/Auth/pages/login.jsx"));
const MusicPlayer = lazy(() => import("./features/songs/pages/songs_palyer.jsx"));
const MusicPage = lazy(() => import("./features/songs/pages/all_song.jsx"));
const  Moodsong =  lazy(()=> import( "./features/songs/pages/moodsong.jsx"));
const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>

          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
 <Route path="/" element={<Home />} />
          {/* 🔐 Protected Routes */}
          <Route element={<ProtectedRoute />}>

           

            <Route
              path="/music_player"
              element={
                <>
                  <Navbar />
                  <MusicPlayer />
                </>
              }
            />

            <Route
              path="/all_music"
              element={
                <>
                  <Navbar />
                  <MusicPage />
                </>
              }
            />
                
    <Route
              path="/expression_songs"
              element={
                <>
                  <Navbar />
                  <Moodsong />
                </>
              }
            />


            <Route path="/detect_emotion" element={<MediaPipeEmotion />} />
            <Route path="/profile" element={<><Profile /></>} />

          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;