document.addEventListener('DOMContentLoaded', () => {
    // Usamos 'boton-tema' que es el ID que pusiste en tu HTML
    const toggleButton = document.getElementById('boton-tema');
    const body = document.body;

    const setMode = (mode) => {
        // 1. Limpia las clases para empezar limpio (solo necesitamos dark-mode por ahora)
        body.classList.remove('dark-mode'); 
        
        // 2. Aplica la clase, si es 'dark'
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro ☀️';
        } else {
             // Si mode es 'light' o 'system', no aplicamos la clase dark-mode.
             // El CSS con @media gestionará el tema si el usuario no ha forzado 'light'.
             
             // Determinar el texto del botón basado en el tema actual
             // Si el sistema es oscuro Y el usuario no ha forzado un modo:
             const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
             const isForcedLight = (localStorage.getItem('theme') === 'light');
             
             // Si actualmente estamos en oscuro (por sistema o por forzado), mostrar 'Modo Claro'
             if (systemDark && !isForcedLight) {
                toggleButton.textContent = 'Modo Claro ☀️';
             } else {
                 toggleButton.textContent = 'Modo Oscuro 🌓';
             }
        }
    };

    // --- 1. Inicialización: Cargar la preferencia del usuario ---
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        // Si hay una preferencia guardada (dark o light), la aplica.
        setMode(currentTheme);
    } else {
        // Si no hay preferencia guardada, el CSS con @media gestiona el tema inicial.
        // Solo necesitamos que el botón muestre el texto correcto.
        setMode('system'); 
    }

    // --- 2. Evento de Clic: Cambiar y Guardar la preferencia ---
    toggleButton.addEventListener('click', () => {
        // Comprobar el estado actual: ¿Es oscuro ahora?
        const isCurrentlyDark = body.classList.contains('dark-mode') || 
                                (localStorage.getItem('theme') === null && window.matchMedia('(prefers-color-scheme: dark)').matches);

        // El nuevo modo será el opuesto
        const newMode = isCurrentlyDark ? 'light' : 'dark';
        
        // Aplicar la nueva clase y guardar en localStorage
        setMode(newMode);
        localStorage.setItem('theme', newMode);
    });
});
