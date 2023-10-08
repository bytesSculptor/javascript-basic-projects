// classList - shows/gets all classes
const links = document.querySelector(".links");
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
    links.classList.toggle("show-links")
})