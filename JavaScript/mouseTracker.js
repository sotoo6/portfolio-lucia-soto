document.addEventListener('DOMContentLoaded', () => {
    const follower = document.getElementById('cursor-follower');
    
    if (!follower) return; // Salir si el elemento no existe

    // Ocultar al inicio y mostrar solo al moverse el ratón
    follower.style.opacity = '0'; 

    document.addEventListener('mousemove', (e) => {
        // La posición debe compensar la mitad del tamaño del div (60px/2 = 30px)
        const x = e.clientX - 150; 
        const y = e.clientY - 150; 
        
        // Mover el elemento usando CSS transform para mejor rendimiento
        follower.style.transform = `translate(${x}px, ${y}px) scale(1)`; 
        follower.style.opacity = '1';
    });

    // Opcional: Ocultar si el ratón abandona la ventana
    document.addEventListener('mouseleave', () => {
        follower.style.opacity = '0';
        // Puedes cambiar scale(1) a scale(0) si quieres que se encoja al salir
    });
});