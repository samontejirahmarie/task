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
// window.addEventListener('scroll', function () {
//     var verticalScroll = window.scrollY;
//     if (verticalScroll > 2910){
//         document.querySelector('.bg-container').classList.remove('sticky');
//     }
//     else{
//         this.document.querySelector('.bg-container').classList.add('sticky')
//     }
//     // console.log('Vertical Scroll Position: ' + verticalScroll + 'px');
//     // console.log('Horizontal Scroll Position: ' + horizontalScroll + 'px');
// });