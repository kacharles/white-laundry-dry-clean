const menu = document.querySelector("#menu"); 
const navMenu = document.querySelector(".navMenu"); 

menu.addEventListener("click", () => { 
    navMenu.classList.toggle("show"); 
    menu.classList.toggle("show");
});