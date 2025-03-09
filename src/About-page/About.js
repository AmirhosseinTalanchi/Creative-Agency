import React from "react";
import { useState, useEffect } from "react";
import Header from '../component/Header/Header';
import Svgs from '../component/svgs-comp/svgs';
import WorkingSpace from '../component/Working-space/Working-space';
import Footer from '../component/Footer/Footer';;

const About = () => {


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
       {/* App Svgs */}
          <Svgs></Svgs>

       {/* //App Header */}
          <Header  theme={theme} toggleTheme={toggleTheme} >
          </Header>

       {/* //App main */}

           

    </div>
  );
};

export default About;
