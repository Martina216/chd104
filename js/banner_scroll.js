/*banner圓角滑動*/
const imageWrapper = document.getElementById('imageWrapper');
const scrollImage = document.getElementById('scrollImage');

function onScroll() {
    const scrollPosition = window.scrollY; // 獲取視窗的垂直滾動位置
    const wrapperTop = imageWrapper.offsetTop; // 指定區域頂部位置
    const wrapperHeight = imageWrapper.clientHeight; // 指定區域高度

    if (scrollPosition >= wrapperTop && scrollPosition <= wrapperTop + wrapperHeight) {
        const distanceFromTop = scrollPosition - wrapperTop;
        const borderRadius = (distanceFromTop / wrapperHeight) * 85; // 根據滾動位置計算圓角值
        scrollImage.style.borderRadius = `${borderRadius}px`;
    } else {
        scrollImage.style.borderRadius = '0'; // 如果滾動超出指定區域，取消圓角效果
    }
}

window.addEventListener('scroll', function() {
    if (window.innerWidth > 768) {
        onScroll();
    }
});

