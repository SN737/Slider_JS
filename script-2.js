const image = document.querySelector('.slider-images');
const leftBtn = document.querySelector('.nav-arrow__left');
const rightBtn = document.querySelector('.nav-arrow__right');
const city = document.querySelector('.squares__city');
const apart = document.querySelector('.squares__apart');
const repaitTime = document.querySelector('.squares__rep-time');
const costTime = document.querySelector('.squares__rep-cost');
let pos = -1;
document.addEventListener('DOMContentLoaded', ()=>{
    imgRender(0);    
});

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

rightBtn.addEventListener('click', ()=>{
    
    if(sliderArray.length-1 > pos){    
    pos++;
    imgRender(pos);}
    else{pos = 0;
        imgRender(pos);}    
});

leftBtn.addEventListener('click', ()=>{
    if(pos > 0){   
    pos--;
    imgRender(pos);}
    else{pos = sliderArray.length-1;
        imgRender(pos);}
});


function imgRender(pos){
    // start.remove();      
    image.innerHTML = `<img src="${sliderArray[pos].image}" alt="тут должен быть картинке"></img>`;
    city.innerHTML = `<h3 class="orange-text">City:</h3><span>${sliderArray[pos].city}<br>${sliderArray[pos].cityPlace}</span>`;
    apart.innerHTML = `<h3 class="orange-text">apartment area:</h3><span>${sliderArray[pos].area} m2</span></div>`;
    repaitTime.innerHTML = `<h3 class="orange-text">Repair time:</h3><span>${sliderArray[pos].time}</span>`;
    costTime.innerHTML = `<h3 class="orange-text">Repair Cost:</h3><span>Upon request</span>`;

}