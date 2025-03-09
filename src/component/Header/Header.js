import "./Header.css"
import { Link } from "react-router-dom";


function Header({ theme,toggleTheme}){
    return(
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="app-logo-wrapper">
                            <svg className="app-logo">
                                <use href="#app-logo"></use>
                            </svg>
                        </div>

                        <ul className="header__menu">
                            <Link to="/" className="header__menu-item header__menu-item--active h6">Home</Link>
                            <Link to="/Work" className="header__menu-item h6">Work</Link>
                            <Link to="/About" className="header__menu-item h6">About</Link>
                        </ul>

                        <div className="header-right">
                            <div onClick={toggleTheme} id="night-btn" className={theme === "light" ? "light-btn" : "dark-btn"}>
                                <div className="night-mode-btn"></div>
                            </div>
                            <a href="#" className="header__btn table-button">Contact us</a>
                        </div>
                
                        <div className="header__mobile-btn-wrapper" id="nav-btn">
                            <div className="header__mobile-btn"></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}




export default Header