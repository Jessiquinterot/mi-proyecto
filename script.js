function openMenu(language) {
    switch (language) {
        case 'es':
            window.open('menu_es.html', '_blank');
            break;
        case 'pt':
            window.open('menu_pt.html', '_blank');
            break;
        case 'en':
            window.open('menu_en.html', '_blank');
            break;
        case 'ru':
            window.open('menu_ru.html', '_blank');
            break;
        default:
            alert('Opción no disponible');
    }
}
