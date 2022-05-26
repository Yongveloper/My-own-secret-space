import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyDiaries from './pages/MyDiaries';
import DiaryDetail from './pages/DiaryDetail';
import Footer from './components/common/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mydiaries" element={<Footer />}>
          <Route index element={<MyDiaries />} />
          <Route path=":id" element={<DiaryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
