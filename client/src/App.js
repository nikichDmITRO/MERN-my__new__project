import { Layout } from "./components/Layout";
import {Routes, Route} from "react-router-dom"
import { MainPage } from "./pages/MainPage";
import { AddPostPage } from "./pages/AddPostPage";
import { EditPostPage } from "./pages/EditPostPage";
import { LoginPage } from "./pages/LoginPage";
import { PostPage } from "./pages/PostPage";

function App() {
  return (
    <div className="text-red-600 text-4xl ">
 <Layout>
  <Routes>
    <Route path="/" component={MainPage} />
    <Route path="/posts" component={PostPage} />  
    
    
  </Routes>
  </Layout> 
    </div>
  );
}

export default App;
