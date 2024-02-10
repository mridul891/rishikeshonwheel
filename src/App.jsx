import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./components/shared/Home";

function App() {
  return (
    <div className="bg-[#Fbfcf8] h-[100vh] w-[100vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
