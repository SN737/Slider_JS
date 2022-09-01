const image = document.querySelector('.slider-images');
const leftArrow = document.querySelector('.nav-arrow__left');
const rightArrow = document.querySelector('.nav-arrow__right');
const city = document.querySelector('.squares__city');
const apart = document.querySelector('.squares__apart');
const repairTime = document.querySelector('.squares__rep-time');
const costTime = document.querySelector('.squares__rep-cost');
const point1 = document.querySelector('.nav-point__one');
const point2 = document.querySelector('.nav-point__two');
const point3 = document.querySelector('.nav-point__three');
const linkTitle1 = document.querySelector('.image__title1');
const linkTitle2 = document.querySelector('.image__title2');
const linkTitle3 = document.querySelector('.image__title3');
let pos=0;

//старутуем с первого слайда сразу. 
document.addEventListener('DOMContentLoaded', ()=>{
    imgRender(pos);     
});

//слушаем клики на точки, пункты меню в навигации слайдера
point1.addEventListener('click', ()=>{
    imgRender(0)});
point2.addEventListener('click', ()=>{
    imgRender(1)});
point3.addEventListener('click', ()=>{
    imgRender(2)});
linkTitle1.addEventListener('click', ()=>{
    imgRender(0)});
linkTitle2.addEventListener('click', ()=>{
    imgRender(1)});
linkTitle3.addEventListener('click', ()=>{
    imgRender(2);
});    
    

//массив слайдов и описаний
const sliderArray = [
{image:'./img/img1.png',
city: 'Rostov-on-Don ',
cityPlace:'LCD Admiral',
area: '81',
time: '3.5 months', 
cost: 'upon request'},
{image:'./img/img2.png',
city: 'Sochi',
cityPlace: 'Thieves',
area: '105',
time: '4 months', 
cost: 'upon request'},
{image:'./img/img3.png',
city: 'Rostov-on-Don',
cityPlace: 'Patriotic',
area: '93',
time: '3 months', 
cost: 'upon request'}];

//слушаем стрелку вправо 
rightArrow.addEventListener('click', ()=>{    
    if(sliderArray.length-1 > pos){    
    pos++;
    imgRender(pos);}
    else{pos = 0;
        imgRender(pos);}    
});

//слушаем стрелку влево 
leftArrow.addEventListener('click', ()=>{
    if(pos > 0){   
    pos--;
    imgRender(pos);}
    else{pos = sliderArray.length-1;
        imgRender(pos);}
});

// отрисовываем изменения - саму картинку + описания
function imgRender(pos){       
    image.innerHTML = `<img src="${sliderArray[pos].image}" alt="картинки слайдера"></img>`;
    city.innerHTML = `<h3 class="orange-text">City:</h3><span>${sliderArray[pos].city}<br>${sliderArray[pos].cityPlace}</span>`;
    apart.innerHTML = `<h3 class="orange-text">apartment area:</h3><span>${sliderArray[pos].area} m2</span></div>`;
    repairTime.innerHTML = `<h3 class="orange-text">Repair time:</h3><span>${sliderArray[pos].time}</span>`;
    costTime.innerHTML = `<h3 class="orange-text">Repair Cost:</h3><span>Upon request</span>`;
    makeActive(pos);
}

// подсвечиваем точки и пункты меню активного слайда.
function makeActive(pos){
    point1.classList.remove('active');
    point2.classList.remove('active');
    point3.classList.remove('active');
    linkTitle1.classList.remove('active-nav');
    linkTitle2.classList.remove('active-nav');
    linkTitle3.classList.remove('active-nav');
    
    if (pos+1 == 1){
        point1.classList.toggle('active');
        linkTitle1.classList.toggle('active-nav');        
    }else if ((pos+1) == 2){
        point2.classList.toggle('active'); 
        linkTitle2.classList.toggle('active-nav');               
    }else{point3.classList.toggle('active');
    linkTitle3.classList.toggle('active-nav');
 }
}