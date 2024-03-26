import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./components/shared/Home";

import About from "./components/shared/About";
import ContactUs from "./components/shared/ContactUs";
import Fleet from "./components/shared/Fleet";
import Blog from "./components/shared/Blog";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/fleet' element={<Fleet />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
