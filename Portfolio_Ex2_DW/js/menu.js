const $bigBall = document.querySelector('.cursor');

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

var cor_background = sessionStorage.getItem("corBackground");
document.body.style.backgroundColor = cor_background;

document.getElementById('about2').style.fill = cor_background;
document.getElementById('behance2').style.fill = cor_background;
document.getElementById('linkedin2').style.fill = cor_background;
document.getElementById('email2').style.fill = cor_background;

document.getElementById('about').addEventListener('click', function () {
    location.replace("homepage.php");
})

document.getElementById('about').addEventListener('mouseover', function () {
    document.getElementsByClassName('st1')[0].style.fill = cor_background;
    document.getElementsByClassName('st4'[0]).style.fill = '#FFFFFF';
})
document.getElementById('about').addEventListener('mouseleave', function () {
    document.getElementsByClassName('st1')[0].style.fill = '#FFFFFF';
    document.getElementsByClassName('st4'[0]).style.fill = cor_background;
})

document.getElementById('behance').addEventListener('mouseover', function () {
    document.getElementsByClassName('st1')[2].style.fill = cor_background;
    document.getElementsByClassName('st4'[2]).style.fill = '#FFFFFF';
})
document.getElementById('behance').addEventListener('mouseleave', function () {
    document.getElementsByClassName('st1')[2].style.fill = '#FFFFFF';
    document.getElementsByClassName('st4'[2]).style.fill = cor_background;
})

document.getElementById('linkedin').addEventListener('mouseover', function () {
    document.getElementsByClassName('st1')[4].style.fill = cor_background;
    document.getElementsByClassName('st4'[4]).style.fill = '#FFFFFF';
})
document.getElementById('linkedin').addEventListener('mouseleave', function () {
    document.getElementsByClassName('st1')[4].style.fill = '#FFFFFF';
    document.getElementsByClassName('st4'[4]).style.fill = cor_background;
})

document.getElementById('email').addEventListener('mouseover', function () {
    document.getElementsByClassName('st1')[6].style.fill = cor_background;
    document.getElementsByClassName('st4'[6]).style.fill = '#FFFFFF';
})
document.getElementById('email').addEventListener('mouseleave', function () {
    document.getElementsByClassName('st1')[6].style.fill = '#FFFFFF';
    document.getElementsByClassName('st4'[6]).style.fill = cor_background;
})