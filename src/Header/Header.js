import { click } from "@testing-library/user-event/dist/click"
import "./Header.css"


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
                            <a className="header__menu-item header__menu-item--active h6" href="#"><li >Home</li></a>
                            <a className="header__menu-item h6" href="#"><li >Works</li></a>
                            <a className="header__menu-item h6" href="#"><li >About</li></a>
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