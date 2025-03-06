import React from "react";
import { useState, useEffect } from "react";
import Header from './Header/Header';

const Work = () => {


 const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedTheme);
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
      };


  return (
    <div>
     
       {/* //App Header */}
       <Header  theme={theme} toggleTheme={toggleTheme} >
        </Header>

    </div>
  );
};

export default Work;
