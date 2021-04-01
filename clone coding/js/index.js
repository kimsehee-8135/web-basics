const menuOpenEl = document.getElementById('btn--open')
const menuCloseEl = document.getElementById('btn--close')
const sideMenuEl = document.getElementById('side__menu')

menuOpenEl.addEventListener("click", function(){
    sideMenuEl.style.transform = 'translateX(0%)'
})

menuCloseEl.addEventListener("click", function(){
    sideMenuEl.style.transform = 'translateX(-100%)'
})