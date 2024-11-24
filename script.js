function openMenu(language) {
    switch (language) {
        case 'es':
            window.location.href = 'menu-espanol.html'; // Aquí cambiamos 'window.open' por 'window.location.href'
            break;
        case 'pt':
            window.location.href = 'menu-portugues.html'; // Asegúrate de tener este archivo
            break;
        case 'en':
            window.location.href = 'menu-english.html'; // Asegúrate de tener este archivo
            break;
        case 'ru':
            window.location.href = 'menu-ruso.html'; // Asegúrate de tener este archivo
            break;
        default:
            alert('Opción no disponible');
    }
}
