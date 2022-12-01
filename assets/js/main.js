const navMenu=document.querySelector("#nav-menu"),
      navToggle = document.querySelector("#nav-toggle"),
      navClose=document.querySelector("#nav-close")


if(navToggle){
     navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
})
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))