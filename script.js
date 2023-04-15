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
    let opened_menu = document.querySelector('.opened_menu');
    if (opened_menu.style.display !== "block") {
        opened_menu.style.display = "block"
    } else {
        opened_menu.style.display = "none"
    }
   
    
  }