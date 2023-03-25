import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journey from "./pages/Journey/Journey";
import Portfolios from "./pages/Portfolios/Portfolios";
import './style/main.css'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
