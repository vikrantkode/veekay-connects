import "./App.css";
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Explore, Homepage, LandingPage, Login, OtherUserProfile, Profile, Signup } from "./Pages";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
import { Bookmark } from "./Pages/Bookmark";
import { SinglePost } from "./Pages/Post/SinglePost";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>}
        />
        <Route path="/bookmarks" element={
          <ProtectedRoute>
            <Bookmark />
          </ProtectedRoute>}
        />
        <Route path="/post/:postId" element={
          <ProtectedRoute>
            <SinglePost />
          </ProtectedRoute>}
        />
         <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>}
        />
         <Route path="/user-profile/:userId" element={
          <ProtectedRoute>
            <OtherUserProfile />
          </ProtectedRoute>}
        />
        <Route path="/explore" element={
          <ProtectedRoute>
            <Explore />
          </ProtectedRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;
