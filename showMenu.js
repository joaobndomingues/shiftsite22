function showMenu(){
var menu= document.getElementById("menu_nav");
var tigre = document.getElementById("tigre_mobile");
var img = document.getElementById("menu_icon");


       if (window.getComputedStyle(menu).display === "none" ){
        menu.style.display="block";
        menu.style.backgroundImage="url(images/fundo-mobile-menu.jpg)"
        img.src= "images/close.svg"
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
}
      else {
      menu.style.display="none";
      img.src= "images/menu.png"
      document.body.style.position = '';
      document.body.style.top = '';


   }}
