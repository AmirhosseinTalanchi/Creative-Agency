import "./Header.css"

function Header(){
    return(
        <div>
            <header>
                <div class="container">
                    <div class="header">
                        <div class="app-logo-wrapper">
                            <svg class="app-logo">
                                <use href="#app-logo"></use>
                            </svg>
                        </div>
                        <ul class="header__menu">
                            <a class="header__menu-item header__menu-item--active h6" href="#"><li >Home</li></a>
                            <a class="header__menu-item h6" href="#"><li >Works</li></a>
                            <a class="header__menu-item h6" href="#"><li >About</li></a>
                        </ul>
                        <a href="#" class="header__btn table-button">Contact us</a>
                        <div class="header__mobile-btn-wrapper">
                            <div class="header__mobile-btn"></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header