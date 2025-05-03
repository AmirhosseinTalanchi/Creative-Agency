import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main.css';
import Home from './Home-page/Home';
import Work from "./Work-page/Work";
import About from "./About-page/About";
import ContactUs from "./contact-us-page/contact-us";
import ScrollToTop from './component/ScrollToTop/ScrollToTop'; 

const App = () => {
  return (
    <Router>
       <ScrollToTop />  {/* اینو اینجا اضافه کن */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Work" element={<Work />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
    </Router>
    
  );
};

export default App;
