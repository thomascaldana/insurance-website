/* function showMenu() {
    let titleModification = document.querySelector('.main_title').innerHTML = "NOVO TITULOO"
    let menuButton = document.querySelector('.img_menu')
    let bodyColor = document.getElementsByTagName('body')
    menuButton.
    bodyColor.style.color = "red"
    titleModification.innerHTML = "NOVO TITULO"
}

addEventListener("click", showMenu)

let titleModification = document.querySelector('.main_title')
titleModification.innerHTML = "NOVO TITULO"

document.querySelector('.main_title').innerHTML = "NOVO TITULOO"
 */

function mudarConteudo() {
    let menu_itens = document.querySelector('.menu_itens')
    let opened_menu = document.querySelector('.opened_menu')
    document.querySelector('.main_title').style.color = "red";
    if (menu_itens.style.display === "flex") {
        menu_itens.style.display = "none"
        opened_menu.style.display = "none"
        document.querySelector('.main_title').style.color = "blue";
    } else {
        menu_itens.style.display = "flex"
        opened_menu.style.display = "block"
        document.querySelector('.main_title').style.color = "green";
    }
   
    
  }