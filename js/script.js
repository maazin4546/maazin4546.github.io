let logo = document.querySelector(".logo")
let navbar = document.querySelector(".navbar")
let right_side = document.querySelector(".right_side")
let nav_items = document.querySelector(".nav_items")
let burger = document.querySelector(".burger")

burger.addEventListener("click", () => {
    navbar.classList.toggle("navbar_res")
    nav_items.classList.toggle("v_class_res")
    right_side.classList.toggle("v_class_res")

})