document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('boton-tema');
    const body = document.body;

    const setMode = (mode) => {
        // 1. Aplicar/Quitar la clase CSS
        if (mode === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }

        // 2. Guardar la preferencia del usuario
        localStorage.setItem('theme', mode);

        // 3. Establecer el texto del botón
        // Si el modo aplicado es 'dark', el botón debe ofrecer cambiar a 'light'.
        if (mode === 'dark') {
            toggleButton.textContent = 'Modo Claro ☀️';
        } else {
            toggleButton.textContent = 'Modo Oscuro 🌓';
        }
    };

    const initializeTheme = () => {
        let savedTheme = localStorage.getItem('theme');
        let systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            // Si el usuario ya eligió, se aplica esa elección
            setMode(savedTheme);
        } else if (systemPrefersDark) {
            // Si no eligió y el sistema es oscuro, se aplica 'dark' (y se guarda)
            setMode('dark');
        } else {
            // Si no eligió y el sistema es claro, se aplica 'light' (y se guarda)
            setMode('light');
        }
    };

    // --- 1. Inicialización: Cargar el tema al inicio ---
    initializeTheme();

    // --- 2. Evento de Clic: Alternar modo ---
    toggleButton.addEventListener('click', () => {
        // Leemos el modo actual (que ya debería ser el que está en localStorage)
        let currentMode = localStorage.getItem('theme');
        
        // El nuevo modo será el opuesto
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        
        // Aplicar y guardar el nuevo modo
        setMode(newMode);
    });
    
    // Opcional: Escuchar los cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Si el usuario no ha forzado un tema, se aplica el nuevo tema del sistema
        if (localStorage.getItem('theme') === null) {
            const newMode = e.matches ? 'dark' : 'light';
            setMode(newMode);
        }
    });
});