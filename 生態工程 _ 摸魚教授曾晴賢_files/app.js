function init() {
    handleMenuDurger();
}

const handleMenuDurger = () => {
    const target = document.querySelector('.menu_burger');

    const handleClick = () => {
        const menuConent = document.querySelector('.menu_content');
        const backgroundWrap = document.querySelector('.background_wrap');
        const isOpen = menuConent.classList.contains('is_open');

        if(isOpen) {
            menuConent.classList.remove('is_open');
            backgroundWrap.classList.remove('is_open');

            backgroundWrap.removeEventListener('click', handleClick);
        }
        else {
            menuConent.classList.add('is_open');
            backgroundWrap.classList.add('is_open');

            backgroundWrap.addEventListener('click', handleClick);
        }
    }

    target.addEventListener('click', handleClick);
}

init();