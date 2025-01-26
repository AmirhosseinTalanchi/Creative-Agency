const menuBtnWrapper = document.querySelector(".header__mobile-btn-wrapper")
const menuBtn = document.querySelector(".header__mobile-btn")
const headerMenu = document.querySelector(".header__menu")
const cover = document.querySelector(".cover")


function openmenu(){
    menuBtn.classList.toggle("close")
    headerMenu.classList.toggle("open")
    cover.classList.toggle("cover--show")
}

menuBtnWrapper.addEventListener("click",openmenu)
cover.addEventListener("click",openmenu)

