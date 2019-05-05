function toggleMenu() {

    var burger = document.getElementsByClassName('logo__burger')[0],
        menuItem = document.getElementsByClassName('menu-item'),
        menuWrapper = document.getElementsByClassName('menu')[0];

    if (!menuWrapper.classList.contains('active')) {
        menuWrapper.classList.add('active');
        burger.classList.add('active');
        for (i = 0; i < 4; i++) {
            menuItem[i].classList.add('active');
        }
    }
    else {
        menuWrapper.classList.remove('active');
        burger.classList.remove('active');
        for (i = 0; i < 4; i++) {
            menuItem[i].classList.remove('active');
        }
    }
}


var oldScrollY = 0;

window.onscroll = function () {

    var burger = document.getElementsByClassName('logo__burger')[0],
        menuItem = document.getElementsByClassName('menu-item'),
        menuWrapper = document.getElementsByClassName('menu')[0],
        menu = document.getElementsByClassName('logo')[0],
        scrolled = window.pageYOffset || document.documentElement.scrollTop,
        dY = scrolled - oldScrollY;

    if (dY > 0) {
        if (menuWrapper.classList.contains('active')) {
            menuWrapper.classList.remove('active');
            burger.classList.remove('active');
            for (i = 0; i < 4; i++) {
                menuItem[i].classList.remove('active');
            }
        }
        menu.classList.add('hide-menu');
    }
    else {
        menu.classList.remove('hide-menu');
    }
    oldScrollY = scrolled;
};