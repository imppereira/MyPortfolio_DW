const $bigBall = document.querySelector('.cursor');

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

var cor_background = '#FFFFFF';

//RAINBOW ESCURO
//VERMELHO
document.getElementById('vermelho_1_').addEventListener('mouseover',function(){
    document.getElementById('rainbow_x5F_escuro').style.display = 'none';
    document.getElementById('rainbow_x5F_claro').style.display = 'block';
    document.body.style.backgroundColor = '#F27272';
    cor_background = '#F27272';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//LARANJA
document.getElementById('laranja_1_').addEventListener('mouseover',function(){
    document.getElementById('rainbow_x5F_escuro').style.display = 'none';
    document.getElementById('rainbow_x5F_claro').style.display = 'block';
    document.body.style.backgroundColor = '#F2C472';
    cor_background = '#F2C472';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//AMARELO
document.getElementById('amarelo_1_').addEventListener('mouseover',function(){
    document.getElementById('rainbow_x5F_escuro').style.display = 'none';
    document.getElementById('rainbow_x5F_claro').style.display = 'block';
    document.body.style.backgroundColor = '#fae580';
    cor_background = '#fae580';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//VERDE
document.getElementById('verde_1_').addEventListener('mouseover',function(){
    document.getElementById('rainbow_x5F_escuro').style.display = 'none';
    document.getElementById('rainbow_x5F_claro').style.display = 'block';
    document.body.style.backgroundColor = '#72B272';
    cor_background = '#72B272';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//AZUL
document.getElementById('azul_1_').addEventListener('mouseover',function(){
    document.getElementById('rainbow_x5F_escuro').style.display = 'none';
    document.getElementById('rainbow_x5F_claro').style.display = 'block';
    document.body.style.backgroundColor = '#7272F2';
    cor_background = '#7272F2';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//ROXO
document.getElementById('roxo_1_').addEventListener('mouseover',function(){
    document.getElementById('rainbow_x5F_escuro').style.display = 'none';
    document.getElementById('rainbow_x5F_claro').style.display = 'block';
    document.body.style.backgroundColor = '#9772B3';
    cor_background = '#9772B3';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//ROSA
document.getElementById('rosa_1_').addEventListener('mouseover',function(){
    document.getElementById('rainbow_x5F_escuro').style.display = 'none';
    document.getElementById('rainbow_x5F_claro').style.display = 'block';
    document.body.style.backgroundColor = '#E9B3E9';
    cor_background = '#E9B3E9';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//RAINBOW CLARO
//VERMELHO
document.getElementById('vermelho').addEventListener('mouseover',function(){
    document.body.style.backgroundColor = '#F27272';
    cor_background = '#F27272';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//LARANJA
document.getElementById('laranja').addEventListener('mouseover',function(){
    document.body.style.backgroundColor = '#F2C472';
    cor_background = '#F2C472';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//AMARELO
document.getElementById('amarelo').addEventListener('mouseover',function(){
    document.body.style.backgroundColor = '#fae580';
    cor_background = '#fae580';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//VERDE
document.getElementById('verde').addEventListener('mouseover',function(){
    document.body.style.backgroundColor = '#72B272';
    cor_background = '#72B272';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//AZUL
document.getElementById('azul').addEventListener('mouseover',function(){
    document.body.style.backgroundColor = '#7272F2';
    cor_background = '#7272F2';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//ROXO
document.getElementById('roxo').addEventListener('mouseover',function(){
    document.body.style.backgroundColor = '#9772B3';
    cor_background = '#9772B3';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//ROSA
document.getElementById('rosa').addEventListener('mouseover',function(){
    document.body.style.backgroundColor = '#E9B3E9';
    cor_background = '#E9B3E9';
    sessionStorage.setItem("corBackground", cor_background);
    document.getElementById('titulo').style.color = '#FFFFFF';
})

//CLICAR
document.body.addEventListener('click',function() {
    location.replace("homepage.php");
})

