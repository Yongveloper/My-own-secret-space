import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './hoc/Auth';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyDiaries from './pages/MyDiaries';
import DiaryDetail from './pages/DiaryDetail';
import Footer from './components/common/Footer';
import WriteDiary from './pages/WriteDiary';

function Router() {
  const AuthHomePage = Auth(Home, false);
  const AuthLoginPage = Auth(Login, false);
  const AuthSignupPage = Auth(Signup, false);
  const AuthDiaryPage = Auth(Footer, true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthHomePage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/signup" element={<AuthSignupPage />} />
        <Route path="/mydiaries" element={<AuthDiaryPage />}>
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
