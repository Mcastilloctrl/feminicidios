// Espera a que el documento se cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    // Busca el boton de menu movil en el documento
    const mobileToggle = document.querySelector('.mobile-toggle');
    // Busca el contenedor de navegacion en el documento
    const navPill = document.querySelector('.nav-pill');

    // Verifica si ambos elementos existen en la pagina
    if (mobileToggle && navPill) {
        // Agrega un escuchador de clic al boton de menu
        mobileToggle.addEventListener('click', () => {
            // Alterna la visibilidad del menu de navegacion
            navPill.classList.toggle('show');
        });
    }

    // Agrega un escuchador de clic a todo el documento
    document.addEventListener('click', (e) => {
        // Cierra el menu si se hace clic fuera de el y del boton
        if (navPill && !navPill.contains(e.target) && !mobileToggle.contains(e.target)) {
            // Remueve la clase que muestra el menu
            navPill.classList.remove('show');
        }
    });
});
