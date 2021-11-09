const menu = document.querySelector("#mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const mobileMenu = document.querySelector("#mobile-menu")
const navLinks = document.querySelectorAll(".nav-menu .nav-links a")

menu.addEventListener("click", () => { 
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
    console.log(navLinks)

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade .3s ease forwards ${index / 7 }s`
        }
    })
})

window.addEventListener("resize", () =>{
    if(window.innerWidth > 768){
        navMenu.classList.remove("active");
        mobileMenu.classList.remove("is-active");
        navLinks.forEach(link => {
            link.style.animation = "";
        })
    }
})
