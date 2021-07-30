let prevTopScroll;
let prevLeftScroll;

grid.addEventListener("scroll",(e)=>{

    let currTopScroll = e.currentTarget.ScrollTop; // vertical
    let currLeftScroll = e.currentTarget.ScrollLeft; // horizontal
    
    // if(currTopScroll!=prevTopScroll){

    // }else if(currLeftScroll!=prevLeftScroll){

    // }

    columnTag.style.transform = translateX('');
});
