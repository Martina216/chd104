/*點擊下拉式選單*/
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementById("myDropdown");
        for (var i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}

document.querySelector('.dropbtn').addEventListener('click',function(){
    document.querySelector('.i').classList.toggle('rotate');
})