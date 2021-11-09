const menu = document.querySelector("#mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const mobileMenu = document.querySelector("#mobile-menu")
const navLinks = document.querySelectorAll(".nav-menu li a")

menu.addEventListener("click", () => { 
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 2s ease forwards ${index / 7 }s`
        }
    })
})
