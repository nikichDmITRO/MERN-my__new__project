import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { AddPostPage } from "./pages/AddPostPage/AddPostPage";
import { EditPostPage } from "./pages/EditPostPage/EditPostPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import {ToastContainer} from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./redux/features/auth/authSlice";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(getMe())},[dispatch])
  return (
    <div className="text-red-600 text-4xl ">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path=":id" element={<PostPage />} />
          <Route path=":id/edit" element={<EditPostPage />} />
          <Route path="new" element={<AddPostPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </Layout>
    </div>
  );
}

export default App;
