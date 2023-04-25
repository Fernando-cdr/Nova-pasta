function Pag1(){
    document.querySelectorAll('.pagina')[0].classList.add('active')
    document.querySelectorAll('.pagina')[1].classList.remove('active')
    document.querySelectorAll('.pagina')[2].classList.remove('active')
}

function Pag2(){
    document.querySelectorAll('.pagina')[0].classList.remove('active')
    document.querySelectorAll('.pagina')[1].classList.add('active')
    document.querySelectorAll('.pagina')[2].classList.remove('active')
}

function Pag3(){
    document.querySelectorAll('.pagina')[0].classList.remove('active')
    document.querySelectorAll('.pagina')[1].classList.remove('active')
    document.querySelectorAll('.pagina')[2].classList.add('active')
}