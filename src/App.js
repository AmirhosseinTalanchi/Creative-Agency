import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main.css';
import Home from './Home-page/Home';
import Work from "./Work-page/Work";
import About from "./About-page/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Work" element={<Work />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </Router>
    
  );
};

export default App;
