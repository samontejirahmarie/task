function openSideMenu() {
    var openSide = document.getElementById("btn-menu");
    
    if (openSide.style.display === "block") {
        openSide.style.display = "none";
        document.querySelector('.menu').classList.remove('openSidemenu');
        } 
    else {
        openSide.style.display = "block";
        document.querySelector('.menu').classList.add ('openSidemenu');
            }
    
}