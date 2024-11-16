import "./App.css";
import { Routes, Route } from "react-router-dom";
import Espanyol from "./Pages/Espanyol";
import English from "./Pages/English";
import French from "./Pages/French";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/espana" element={<Espanyol />} />
        <Route path="/english" element={<English />} />
        <Route path="/francia" element={<French />} />
      </Routes>
    </>
  );
}

export default App;
