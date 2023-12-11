/*點擊漢堡秀目錄，並停止滑動*/
function showMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');

    document.body.classList.toggle('unscroll');
}