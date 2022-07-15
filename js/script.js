function openMenu() {
    document.querySelector('.menu-container .menu-list').style.top = '0';
    document.querySelector('.menu-container .menu-xmark').style.display = 'block';
}

function closeMenu() {
    document.querySelector('.menu-container .menu-list').style.top = '-100%';
    document.querySelector('.menu-container .menu-xmark').style.display = 'none';
}


