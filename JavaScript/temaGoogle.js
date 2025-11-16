document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const btnTemaPC    = document.getElementById("boton-tema");
    const btnTemaMovil = document.getElementById("boton-tema-movil");

    function actualizarTextoBotones() {
        const esDark = body.classList.contains("dark-mode");
        const texto  = esDark ? "Modo claro ☀️" : "Modo oscuro 🌙";

        if (btnTemaPC)    btnTemaPC.textContent    = texto;
        if (btnTemaMovil) btnTemaMovil.textContent = texto;
    }

    function cambiarTema() {
        body.classList.toggle("dark-mode");
        actualizarTextoBotones();
    }

    if (btnTemaPC) {
        btnTemaPC.addEventListener("click", cambiarTema);
    }

    if (btnTemaMovil) {
        btnTemaMovil.addEventListener("click", cambiarTema);
    }

    // Ajusta el texto inicial según el tema actual
    actualizarTextoBotones();
});