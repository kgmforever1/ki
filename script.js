// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});