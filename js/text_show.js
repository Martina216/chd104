/*banner文字漸入*/
const h1Element = document.getElementById('fade-in-text');
const spans = h1Element.getElementsByTagName('span');

const a = h1Element.querySelector('#banner-btn');

function fadeInTexts() {
    for (let i = 0; i < spans.length; i++) {
        setTimeout(() => {
            spans[i].style.opacity = '1';
        }, i * 600); 
    }
    setTimeout(() => {
        a.style.opacity = '1';
    }, spans.length * 400);
}

window.onload = fadeInTexts;