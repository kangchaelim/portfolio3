// main
// 책 이미지 height 효과
const bookHeight = document.querySelectorAll('body .bookHeight');
console.log(bookHeight);

window.addEventListener('load', ()=>{
        for(let i = 0; i < bookHeight.length ; i++){
            bookHeight[i].style.height = '100%';
            }
    // for(let i = 0; i < bookHeight.length ; i++){
    //     bookHeight[i].style.transform = 'rotate(-180deg)';
    //     }   
})
