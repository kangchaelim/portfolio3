// section3 
// 책 이미지 height 효과 & record animate
const bookLeft = document.querySelector('body .book-left');
const bookRight = document.querySelector('body .book-right');
const record = document.querySelector('body .record');

window.addEventListener('scroll', ()=>{
    if(scrollY >= 1900){
        setInterval(()=>{
            bookLeft.style.height = '100%';
            bookRight.style.height = '100%';
        }, 1000);
        record.animate(
            [
               {transform: 'rotate(0)'},
               {transform: 'rotate(-5deg)'},
               {transform: 'rotate(0)'},
             ],
            {
               duration :1000,
             });
    }
});