//js for hamburger menu
const toggler = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
const navButtons = document.querySelector(".nav-buttons")
toggler.addEventListener("click", function(){
    if (navList.style.display === "none" && navButtons.style.display === "none")
    {
        navList.style.display = "block";
        navButtons.style.display = "flex"
    }
    else
    {
        navList.style.display = "none";
        navButtons.style.display = "none"
    }
})