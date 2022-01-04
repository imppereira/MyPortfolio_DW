const $bigBall = document.querySelector('.cursor');

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

//BACKGROUND COLOR
var cor_background = sessionStorage.getItem("corBackground");
console.log(cor_background);
document.body.style.backgroundColor = cor_background;

document.getElementById('about_x5F_cor').style.fill = cor_background;

document.getElementById('index').addEventListener('mouseover', function () {
    document.getElementsByClassName('cursor')[0].style.width = '40px';
    document.getElementsByClassName('cursor')[0].style.height = '40px';
})
document.getElementById('index').addEventListener('mouseleave', function () {
    document.getElementsByClassName('cursor')[0].style.width = '20px';
    document.getElementsByClassName('cursor')[0].style.height = '20px';
})

document.getElementById('menu').addEventListener('mouseover', function () {
    document.getElementsByClassName('cursor')[0].style.width = '40px';
    document.getElementsByClassName('cursor')[0].style.height = '40px';
})
document.getElementById('menu').addEventListener('mouseleave', function () {
    document.getElementsByClassName('cursor')[0].style.width = '20px';
    document.getElementsByClassName('cursor')[0].style.height = '20px';
})

document.getElementById('behance').addEventListener('mouseover', function () {
    document.getElementsByClassName('cursor')[0].style.display = 'none';
})
document.getElementById('behance').addEventListener('mouseleave', function () {
    document.getElementsByClassName('cursor')[0].style.display = 'block';
})

document.getElementById('email').addEventListener('mouseover', function () {
    document.getElementsByClassName('cursor')[0].style.display = 'none';
})
document.getElementById('email').addEventListener('mouseleave', function () {
    document.getElementsByClassName('cursor')[0].style.display = 'block';
})

document.getElementById('linkedin').addEventListener('mouseover', function () {
    document.getElementsByClassName('cursor')[0].style.display = 'none';
})
document.getElementById('linkedin').addEventListener('mouseleave', function () {
    document.getElementsByClassName('cursor')[0].style.display = 'block';
})