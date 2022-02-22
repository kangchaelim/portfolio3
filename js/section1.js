// section1
// about 사진 애니메이션
const imgWrap = document.querySelector('body .about .img-wrap');
console.log(imgWrap);

window.addEventListener('scroll', ()=>{
    if(scrollY >= 500){
        setInterval(()=>{
            imgWrap.style.left = '-100vw';
        }, 100)
    }
});

// window.addEventListener('scroll', ()=>{
//     if(scrollY >= 600){
//         setInterval(()=>{
//             for(let k = 0; k < imgWrap.length; k++){
//                 if(imgWrap[k].style.left === '100vw'){
//                     imgWrap[k].style.left = '-100vw';
//                 }
//                 else if (imgWrap[k].style.left === '-100vw'){
//                     imgWrap[k].style.left = '100vw';
//                 }
                   
//             }
//         }, 100)
//     }
// });

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
