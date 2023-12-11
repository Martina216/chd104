let imageWrapper = document.getElementById('imageWrapper');
let scrollImage = document.getElementById('scrollImage');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY; // 獲取視窗的垂直滾動位置
    let wrapperTop = imageWrapper.offsetTop; // 指定區域頂部位置
    let wrapperHeight = imageWrapper.clientHeight; // 指定區域高度

    if (scrollPosition >= wrapperTop && scrollPosition <= wrapperTop + wrapperHeight) {
        let distanceFromTop = scrollPosition - wrapperTop;
        let borderRadius = (distanceFromTop / wrapperHeight) * 1000 // 根據滾動位置計算圓角值
        scrollImage.style.borderRadius = `${borderRadius}px`;
    } else {
        scrollImage.style.borderRadius = '0'; // 如果滾動超出指定區域，取消圓角效果
    }
});