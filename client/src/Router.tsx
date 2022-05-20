import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyDiaries from './pages/MyDiaries';
import DiaryDetail from './pages/DiaryDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mydiaries" element={<MyDiaries />} />
        <Route path="/mydiaries/:id" element={<DiaryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
