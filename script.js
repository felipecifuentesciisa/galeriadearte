document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de la barra de navegación
    var navLinks = document.querySelectorAll('nav a');

    // Obtener todas las secciones
    var sections = document.querySelectorAll('section');

    // Agregar evento de clic a cada enlace de la barra de navegación
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            // Obtener la sección correspondiente al enlace
            var targetSection = document.getElementById(this.getAttribute('data-section'));

            // Ocultar todas las secciones
            sections.forEach(function(section) {
                section.classList.remove('active');
            });

            // Mostrar la sección seleccionada
            targetSection.classList.add('active');
        });
    });
});