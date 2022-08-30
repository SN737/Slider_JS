const image = document.querySelector('.slider-images');
const leftBtn = document.querySelector('.nav-arrow__left');
const rightBtn = document.querySelector('.nav-arrow__right'); 
let pos = -1;
document.addEventListener('DOMContentLoaded', ()=>{
    image.innerHTML =  `<img src="./img/img1.png" alt="тут был картинке"></img>`;
    
});

const sliderArray = [
{image:'./img/img1.png',
city: 'Rostov-on-Don LCD Admiral',
area: '81 m2',
time: '3.5 months', 
cost: 'upon request'},
{image:'./img/img2.png',
city: 'Sochi Thieves',
area: '105 m2',
time: '4 months', 
cost: 'upon request'},
{image:'./img/img1.png',
city: 'Rostov-on-Don Patriotic',
area: '93m2',
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
    image.innerHTML = `<img src="${sliderArray[pos].image}" alt="тут был картинке"></img>`;
}