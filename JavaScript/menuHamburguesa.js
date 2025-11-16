document.addEventListener("DOMContentLoaded", () => {
    const btnHamburguesa = document.getElementById("hamburguesa");
    const menuMovil = document.getElementById("menu-movil");

    if (btnHamburguesa && menuMovil) {
        btnHamburguesa.addEventListener("click", () => {
            menuMovil.classList.toggle("menu-movil-oculto");
        });
    }
});