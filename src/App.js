import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgetPage from './components/ForgetPage';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import StartPage from './components/StartPage';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <>
    <div className="App">
    <Header/>
      <Routes>

        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/RegisterPage" element={<RegisterPage />}></Route>
        <Route path="/ForgetPage" element={<ForgetPage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ProductPage" element={<ProductPage />}></Route>
        <Route path="/StartPage" element={<StartPage />}></Route>
        <Route path="/PaymentPage" element={<PaymentPage />}></Route>

      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
