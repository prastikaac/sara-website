document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const menuTrigger = document.querySelector(".menu-trigger");

    menuTrigger.addEventListener("click", () => {
        header.classList.toggle("clicked-header");
    });
});
