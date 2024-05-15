/*Função para abrir o menu*/
function openMenu(){
    document.getElementById("menu_mobile").style.width = "50%";
}

/*Função para fechar o menu*/
function closeMenu(){
    document.getElementById("menu_mobile").style.width = "0%";
}

var copiarSlide = document.querySelector(".slide-items").cloneNode(true);
document.querySelector('.slide__container').appendChild(copiarSlide);