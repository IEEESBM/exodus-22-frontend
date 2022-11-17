import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Signup from "./pages/Signup";
import Timeline from "./pages/Timeline";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Submission from "./pages/Submission";
import Navbar from "./pages/Navbar";
import Navbar2 from "./pages/Navbar2";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";
import './pages/navbar.css';
import './pages/footer.css';
import './pages/submission.css';
import './pages/Dashboard.css'
import './pages/submission.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/navbar2" element={<Navbar2 />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
