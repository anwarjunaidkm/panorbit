import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import Profile from './components/profile/Profile';
import Post from './components/posts/Post';
import Gallery from './components/gallery/Gallery';
import Todo from './components/todo/Todo';
import Logout from './components/logout/Logout';


function App() {
  return (
    <div className="App">
    //d
      

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="posts" element={<Post />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<Todo />} />
        <Route path="logout" element={<Logout />} />
         
       
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
