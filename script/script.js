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
//     if (verticalScroll >= 1280){
//         document.querySelector('.hero-greeting').classList.add('blur');
//     }
//     else{
//         this.document.querySelector('.hero-greeting').classList.remove('blur')
//     }
//     // console.log('Vertical Scroll Position: ' + verticalScroll + 'px');
//     // console.log('Horizontal Scroll Position: ' + horizontalScroll + 'px');
// });
const blurElement = document.querySelector('.hero-greeting');
const startBlur = 1280; 

window.addEventListener('scroll', () => {
     const scrollY = window.scrollY;

    if (scrollY >= startBlur) {
        const maxBlur = 12; 
        const blurAmount = Math.min(maxBlur, (scrollY - startBlur) / 10); 

       
        blurElement.style.filter = `blur(${blurAmount}px)`;
    }
    else{
        blurAmount = 0;
        blurElement.style.filter = `blur(${blurAmount}px)`;
    }
});

