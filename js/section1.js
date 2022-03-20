// section1
// about 사진 fadeIn & fadeOut
const imgWrap = document.querySelector('body .about .img-wrap');
const slides = document.querySelectorAll('.about img');
// console.log(imgWrap);
// console.log(slides);

window.addEventListener('scroll', ()=>{
    if(scrollY >= 500){
        let num = 0;
        setInterval(()=>{
            if(num < slides.length) {
                slides[num].style.opacity = "1";
                num += 1;
              } 
              else {
                num = 0;
                for (let i = 0; i < slides.length; i++) {
                  slides[i].style.opacity = "0";
                }
              }
        }, 2000)
    }
});

// 스크롤 시 aboutTxt 등장
const aboutTxt = document.querySelector('body .aboutTxt');

window.addEventListener('scroll', ()=>{
    if(scrollY > 500){
        aboutTxt.style.opacity = '1';
        aboutTxt.style.marginTop = '0';
    }
}); 

// 랜덤 동그라미
function createCircle(){
    const aboutSection = document.querySelector('body .about');
    const circle = document.createElement('span');
    
    let size = Math.random() * 40;
    
    circle.style.width = 2 + size + 'px';
    circle.style.height = 2 + size + 'px';
    circle.style.borderRadius = 50 + 'px';


    circle.style.top = Math.random() * innerHeight + 'px';
    circle.style.left = Math.random() * innerWidth + 'px';

    aboutSection.appendChild(circle);

    setTimeout(()=>{
        circle.remove()
    }, 5000);
}

setInterval(createCircle, 150);
