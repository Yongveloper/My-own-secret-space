import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyDiaries from './pages/MyDiaries';
import DiaryDetail from './pages/DiaryDetail';
import Footer from './components/common/Footer';
import WriteDiary from './pages/WriteDiary';

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
          <Route path="writediary" element={<WriteDiary />} />
          <Route path="updatediary/:id" element={<WriteDiary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
