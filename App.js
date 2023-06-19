import React from "react";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Age from "./pages/Age/Age";
import Food from "./pages/Food/Food";
import Home from "./Components/Home";
import Water from "./pages/Water/Water";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../src/pages/About/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="daf_tools_app">
        <Header toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isOpen} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/water" element={<Water />} />
            <Route path="/food" element={<Food />} />
            <Route path="/Age" element={<Age />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
