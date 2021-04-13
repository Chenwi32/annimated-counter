const counterDisplay = document.querySelector('.counter');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');

increment.addEventListener('click', increase);
decrement.addEventListener('click', decrease);
let num = 0;
let colors = ['yellow', 'green', 'blue', '#583', 'cyan']
function increase(){
    num += 1;
    counterDisplay.innerHTML = num;
    randomNumber = Math.floor(Math.random()*colors.length)
    if(counterDisplay.innerHTML == 0){
        counterDisplay.style.color = 'white'
    }
    else if(counterDisplay.innerHTML < 0){
        counterDisplay.style.color = 'red';
    }
    else{
        counterDisplay.style.color = colors[randomNumber]
    };

    // This below is to apply a fading animation to the counterDisplay

    counterDisplay.animate([{opacity: '0.3'}, {opacity: '1'}], 
    {duration: 900, fill: 'forwards'});
};

function decrease(){
    num -= 1;
    counterDisplay.innerHTML = num;
    randomNumber = Math.floor(Math.random()*colors.length)
    if(counterDisplay.innerHTML == 0){
        counterDisplay.style.color = 'white'
    }else if(counterDisplay.innerHTML < 0){
        counterDisplay.style.color = 'red';
    }
    else{
        counterDisplay.style.color = colors[randomNumber]
    };

    // This below is to apply a fading animation to the counterDisplay

    counterDisplay.animate([{opacity: '0.3'}, {opacity: '1'}], 
    {duration: 900, fill: 'forwards'});
};














