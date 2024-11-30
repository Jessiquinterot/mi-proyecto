// Función para redirigir a la página especificada
function openPage(page) {
    // Verifica que se haya pasado un parámetro válido y redirige
    if (page) {
        window.location.href = page;
    } else {
        console.error("No se especificó una página válida.");
    }
}
