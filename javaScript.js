let hambuergerMenu = document.querySelector(".hamburger-menu")
let navContainer = document.querySelector(".nav-list-container")

let activeNav = document.querySelectorAll(".nav-links")

hambuergerMenu.addEventListener("click", () =>{
    navContainer.classList.toggle("hide")
    hambuergerMenu.classList.toggle("opacity")
})
