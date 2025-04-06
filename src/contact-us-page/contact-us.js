import React from "react";
import { useState, useEffect } from "react";
import Header from '../component/Header/Header';
import Svgs from '../component/svgs-comp/svgs';
import './contact-us.css';



export default function ContactUs() {

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
        <main>
            {/* // main // */}
            <section>
                <div className="container">
                  <div className="main">
                     <div className="main__left">
                      <h1 className="main__title h1">Let’s Work Together!</h1>
                      <p className="main__caption body">I would like to meet with you to discuss something and opportunities for collaboration.</p>
                      <div className="main__email-wrapper">
                        <svg className="main__email-icon">
                            <use href="#email-icon"></use>          
                        </svg>
                        <span className="main__text body">info@yourdomain.com</span>
                      </div>
                      <div className="main__address-wrapper">
                        <svg className="main__address-icon">
                            <use href="#building"></use>          
                        </svg>
                        <span className="main__text body">Jl KH Samanhudi Metro Atom Plaza<br/> Bl AKS 1/11, Dki Jakarta</span>
                      </div>
                      <div className="main__phone-wrapper">
                        <svg className="main__phone-icon">
                            <use href="#phone"></use>          
                        </svg>
                        <span className="main__text body">+62 (0) 000 0000 00</span>
                      </div>
                     </div>
                     <div className="main__right">
                      <input type="text" className="main__name-input body" placeholder="Name" />
                      <input type="email" className="main__email-input body" placeholder="info@yourdomain.com" />
                      <input type="text" className="main__message-input body" placeholder="Message" />
                    </div>
                  </div>
                </div>
            </section>
        </main>

        
    </div>
  )

}
