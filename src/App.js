import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Timeline from "./pages/Timeline";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Submission from "./pages/Submission";
import Navbar from "./pages/Navbar";
import Navbar2 from "./pages/Navbar2";
import Footer from "./pages/Footer";
import './pages/navbar.css';
import './pages/footer.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/navbar2" element={<Navbar2 />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
