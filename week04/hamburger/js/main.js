const menuOpenEl = document.getElementById("btn__open")
const menuCloseEl = document.getElementById("btn__close")
const sidemenuE1 = document.getElementById("side__menu")

menuOpenEl.addEventListener("click", function(){
    menuOpenEl.style.display ='none'
    menuCloseEl.style.display = 'block'
    sidemenuE1.style.transform = 'translateX(0%)'
})

menuCloseEl.addEventListener("click", function(){
    menuOpenEl.style.display ='block'
    menuCloseEl.style.display = 'none'
    sidemenuE1.style.transform = 'translateX(-100%)'
})