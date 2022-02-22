// section4
// sticker2 animate
const stickerTwo = document.querySelector('body .sticker2');

window.addEventListener('scroll', ()=>{
    if(scrollY >= 2000){
        stickerTwo.animate(
            [
               {transform: 'rotate(0)'},
               {transform: 'rotate(-10deg)'},
               {transform: 'rotate(0)'},
             ],
            {
               duration :1000,
             }); 
    }
});

// scroll 시 exhibitionTxt 등장
const exhibitionTxt = document.querySelector('body .exhibitionTxt');

window.addEventListener('scroll', ()=>{
  if(scrollY > 2700){
    exhibitionTxt.style.opacity = '1';
    exhibitionTxt.style.marginTop = '0';
  }
}); 