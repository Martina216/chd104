/*點擊card_content打開燈箱*/
document.getElementById('openLightbox').addEventListener('click', function() {
    document.getElementById('lightbox').classList.remove('hidden');
    /*停止滾動*/
    document.body.classList.add('unscroll');
    });

/*點擊任一處關閉燈箱*/
document.getElementById('lightbox').addEventListener('click', function(e) {
if (e.target.id === 'lightbox') {
    document.getElementById('lightbox').classList.add('hidden');
    /*可以滾動*/
    document.body.classList.remove('unscroll');
}
});    