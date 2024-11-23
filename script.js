function openMenu(language) {
    let url;
    switch (language) {
        case 'es':
            url = 'menu_es.html';
            break;
        case 'pt':
            url = 'menu_pt.html';
            break;
        case 'en':
            url = 'menu_en.html';
            break;
        case 'ru':
            url = 'menu_ru.html';
            break;
        default:
            alert('Opción no disponible');
            return; // Exit the function if the option is not available
    }
    window.open(url, '_blank');
    alert('Redirigiendo al menú en ' + language.toUpperCase()); // Confirmation message
}
