import { Component } from "react";
import "./Header.css"
import { Link } from "react-router-dom";


class Header extends Component{

    constructor (props){
        super(props)

        this.state = {
            menuClassName : "",
            btnClassName: "",
            coverClassName: ""
        }

        this.openMenu = this.openMenu.bind(this)
    }

    openMenu(){
            if(this.state.menuClassName == ""){
                this.setState({
                    menuClassName : "header__mobile-menu--open",
                    btnClassName : "close",
                    coverClassName: "cover--show"
                })
            }
            else{
                this.setState({
                    menuClassName : "",
                    btnClassName : "",
                    coverClassName: ""
                })
            }

    }

    

    render(){
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
                                <div onClick={this.props.toggleTheme} id="night-btn" className={this.props.theme === "light" ? "light-btn" : "dark-btn"}>
                                    <div className="night-mode-btn"></div>
                                </div>
                                <Link to="/contact-us" className="header__btn table-button">Contact us</Link>
                            </div>
                    
                            <div className="header__mobile-btn-wrapper" onClick={this.openMenu}>
                                <div className={`header__mobile-btn ${this.state.btnClassName}`}></div>
                            </div>

                        </div>
                    </div>

                    <div className={`header__mobile-menu ${this.state.menuClassName}`}>
                        <div className="header__mobile-menu-top">
                            <div className="header__mobile-menu-head">
                                <div className="app-logo-wrapper-dark">
                                    <svg className="app-logo">
                                        <use href="#app-logo"></use>
                                    </svg>
                                </div>
                                <h2 className="header__mobile-menu-title body2">Creative Agency</h2>
                            </div>
                            <ul className="header__mobile-menu-iteme-wrapper">
                                <Link to="/" className="header__mobile-menu-iteme body2">Home</Link>
                                <Link to="/Work" className="header__mobile-menu-iteme body2">Work</Link>
                                <Link to="/About" className="header__mobile-menu-iteme body2">About</Link>
                                <div onClick={this.props.toggleTheme} className={this.props.theme === "light" ? "light-btn" : "dark-btn"}>Theme</div>
                            </ul>
                            
                        </div>
                        <a href="#" className="header__mobile-menu-btn table-button">Contact us</a>
                    </div>
                    
                    <div className={`cover ${this.state.coverClassName}`} onClick={this.openMenu}></div>
                </header>
            </div>
        )
    }
    
    }
 



export default Header