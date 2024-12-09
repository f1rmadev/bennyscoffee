/* Lógica de Programação 
    [X] Saber quando o usuário clicou no botão
    [X] Mudar o posicionamento do modal
    [X] Fazer a máscara ficar visível  
    [X] Quando clicar na máscara, fechar o modal
*/
const modal = document.querySelector(".modal");
const iframe = document.querySelector("iframe");
const mask = document.querySelector(".mask-modal");
const title = document.querySelector("h3");

function showModal(){
    modal.style.left = '50%'; //Function to put the address in the center.
    mask.style.visibility = "visible";
}

function showOffModal(){
    modal.style.left = "-50%";
    mask.style.visibility = "hidden";
}