import React from "react";
import { useState, useEffect } from "react";
import Header from '../component/Header/Header';
import Svgs from '../component/svgs-comp/svgs';
import {Footer2} from '../component/Footer/Footer';
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
                      <textarea className="main__message-input body" placeholder="Message" />
                      <a href="#" className="main__btn btn">
                        Let’s Talk
                        <svg>
                            <use href="#arrow-right"></use>
                        </svg>
                    </a>
                    </div>
                  </div>
                </div>
            </section>

            {/* // Social medias // */}
            <section>
                <div className="container">
                    <div className="Social-medias">
                      <div className="Social-medias__wrapper">
                         <div className="Social-medias-logo">
                            <svg className="Social-medias-logo-svg"> 
                                <use href="#facebook"></use>
                            </svg>
                         </div>
                         <h5 className="Social-medias__text body">Facebook</h5>
                      </div>
                      <div className="Social-medias__wrapper">
                         <div className="Social-medias-logo">
                            <svg className="Social-medias-logo-svg"> 
                                <use href="#instagram"></use>
                            </svg>
                         </div>
                         <h5 className="Social-medias__text body">Instagram</h5>
                      </div>
                      <div className="Social-medias__wrapper">
                         <div className="Social-medias-logo">
                            <svg className="Social-medias-logo-svg"> 
                                <use href="#linkedin"></use>
                            </svg>
                         </div>
                         <h5 className="Social-medias__text body">Linkedin</h5>
                      </div>
                      <div className="Social-medias__wrapper">
                         <div className="Social-medias-logo">
                            <svg className="Social-medias-logo-svg"> 
                                <use href="#twitter"></use>
                            </svg>
                         </div>
                         <h5 className="Social-medias__text body">Twitter</h5>
                      </div>
                    </div>
                </div>
            </section>

            <Footer2></Footer2>
        </main>

        
    </div>
  )

}
