import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
      <section>
        <div className="container">
            <div className='footer1'>
                <div className='footer1__box'>
                    <p className="footer1__box-text menu">Are You Ready For</p>
                    <h3 className="footer1__box-title h3">Start a New Project</h3>
                    <a href="#" className="main-top__btn btn table-button">
                        Get Started
                        <svg>
                            <use href="#arrow-right"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="footer2__box">
                    <p className="footer2__box-text menu">Get Notified About Project</p>
                    <h3 className="footer2__box-title h3">Subscribe Now</h3>
                    <input type="email" className="footer__box-input body" placeholder="Email"/>   
                    {/* <svg className="footer__box-send">
                        <use href="#send"></use>
                    </svg> */}
            </div>
        </div>
      </section>

      <section className="footer2-section">
        <div className="container">
            <div className="footer2">
                <div className="footer__main">
                    <div className="footer__main-left">
                        <div className="app-logo-wrapper">
                            <svg className="app-logo">
                                <use href="#app-logo"></use>
                            </svg>
                            
                        </div>
                        <p className="footer-text menu">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="footer__main-mid">
                        <h4 className="footer-title h6">Our Office</h4>
                        <img src="project-imgae/home-page-img/img/map.png" className="footer-img"/>
                    </div>
                    <div className="footer__main-right">
                        <h4 className="footer-title h6">Contact</h4>
                        <div className="footer-content-wrapper">
                            <div className="footer-content menu">Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</div>
                            <div className="footer-content menu">info@yourdomain<br/>.com</div>
                            <div className="footer-content menu">+62 (0) 000 0000 00</div>
                        </div>
                    </div>
                </div>
                <div className="footer__end">
                    <div className="footer-id menu">© 2021 Creative Agency</div>
                    <ul className="footer-menu"> 
                        <Link to="/" className="footer-menu-itemes menu">Home</Link>
                        <Link to="/Work" className="footer-menu-itemes menu">Work</Link>
                        <Link to="/About" className="footer-menu-itemes menu">About</Link>
                        <a className="footer-menu-itemes menu">Pricing </a>
                        <a className="footer-menu-itemes menu">contact us</a>
                    </ul>
                    <div className="foooter-logo-wrapper">
                        <div className="footer-logo">
                            <svg className="footer-logo-svg"> 
                                <use href="#facebook"></use>
                            </svg>
                        </div>
                        <div className="footer-logo">
                            <svg className="footer-logo-svg">
                                <use href="#instagram"></use>
                            </svg>
                        </div>
                        <div className="footer-logo">
                            <svg className="footer-logo-svg">
                                <use href="#linkedin"></use>
                            </svg>
                        </div>
                        <div className="footer-logo">
                            <svg className="footer-logo-svg">
                                <use href="#twitter"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  )
}

function Footer2() {
  return (
    <div>
         <section>
            <div className="container">
                <div className="footer2__box">
                        <p className="footer2__box-text menu">Get Notified About Project</p>
                        <h3 className="footer2__box-title h3">Subscribe Now</h3>
                        <input type="email" className="footer__box-input body" placeholder="Email"/>   
                        {/* <svg className="footer__box-send">
                            <use href="#send"></use>
                        </svg> */}
                </div>
            </div>
        </section>

      <section className="footer2-section">
        <div className="container">
            <div className="footer2">
                <div className="footer__main">
                    <div className="footer__main-left">
                        <div className="app-logo-wrapper">
                            <svg className="app-logo">
                                <use href="#app-logo"></use>
                            </svg>
                            
                        </div>
                        <p className="footer-text menu">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="footer__main-mid">
                        <h4 className="footer-title h6">Our Office</h4>
                        <img src="Project-imgae/home-page-img/img/map.png" className="footer-img"/>
                    </div>
                    <div className="footer__main-right">
                        <h4 className="footer-title h6">Contact</h4>
                        <div className="footer-content-wrapper">
                            <div className="footer-content menu">Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</div>
                            <div className="footer-content menu">info@yourdomain<br/>.com</div>
                            <div className="footer-content menu">+62 (0) 000 0000 00</div>
                        </div>
                    </div>
                </div>
                <div className="footer__end">
                    <div className="footer-id menu">© 2021 Creative Agency</div>
                    <ul className="footer-menu"> 
                        <Link to="/" className="footer-menu-itemes menu">Home</Link>
                        <Link to="/Work" className="footer-menu-itemes menu">Work</Link>
                        <Link to="/About" className="footer-menu-itemes menu">About</Link>
                        <a className="footer-menu-itemes menu">Pricing </a>
                        <a className="footer-menu-itemes menu">contact us</a>
                    </ul>
                    <div className="foooter-logo-wrapper">
                        <div className="footer-logo">
                            <svg className="footer-logo-svg"> 
                                <use href="#facebook"></use>
                            </svg>
                        </div>
                        <div className="footer-logo">
                            <svg className="footer-logo-svg">
                                <use href="#instagram"></use>
                            </svg>
                        </div>
                        <div className="footer-logo">
                            <svg className="footer-logo-svg">
                                <use href="#linkedin"></use>
                            </svg>
                        </div>
                        <div className="footer-logo">
                            <svg className="footer-logo-svg">
                                <use href="#twitter"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  )
}

export { Footer, Footer2 };


