//seteando los elementos por ID
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const endWorld = '1 jan 2022'; //fecha deseada

//declaramos los Date
function countdown(){
const endWorlDate = new Date(endWorld);
const currentDate = new Date();

//total de segundos 
const totalSeconds = (endWorlDate - currentDate) / 1000;

// sacamos la formula con math.floor//3600 = 1 minuto
const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const minutes = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60; 

//imprimir en el html por id
daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minutesEl.innerHTML = formatTime(minutes);
secondsEl.innerHTML = formatTime(seconds);
}

//agregar 00 formato
function formatTime(time){
    return time <10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);