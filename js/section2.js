// section2
// selectionTitle 왼 -> 오 
const selectionTitle = document.querySelector('.selectionTitle');
console.log(selectionTitle);

window.addEventListener('scroll', ()=>{
    if(scrollY >= 1200){
        setInterval(()=>{
            selectionTitle.style.opacity = '1';
            selectionTitle.style.marginLeft = '25vw';
            selectionTitle.style.marginTop = '3vw';
        }, 100);
    }
});

// img hover 시 아이콘과 검정투명박스 등장
const cover = document.querySelectorAll('body .cover');
const icon = document.querySelectorAll('body i');
const selections = document.querySelectorAll('body .selectionBox a');

for(let j = 0; j < selections.length ; j++){
    selections[j].addEventListener('mouseenter', function(){
      icon[j].classList.replace('opa-0','opa-1');
      cover[j].classList.replace('opa-0', 'opa-1')
    });
  }
  
for(let j = 0; j < selections.length ; j++){
  selections[j].addEventListener('mouseleave', function(){
    icon[j].classList.replace('opa-1','opa-0');
    cover[j].classList.replace('opa-1', 'opa-0')
  }); 
}