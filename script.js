'use strict';

const open_menu = document.getElementById("hmbur");
const close_menu = document.querySelector(".cancel");
const nav_menu = document.querySelector(".mobil");
// let query = window.matchMedia("(max-width: 1024px)")

open_menu.addEventListener('click', function () {
    nav_menu.classList.remove("hidden");
    // open_menu.classList.toggle("hidden");
    open_menu.style.display = "none";
    close_menu.classList.remove("hidden");
})

close_menu.addEventListener('click', function () {
    nav_menu.classList.add("hidden");
    open_menu.style.display = "inline";
    close_menu.classList.add("hidden");
})