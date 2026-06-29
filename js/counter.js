//-----------------------------------------
// CONFIGURACIÓN
//-----------------------------------------

const relationshipDate = new Date("2025-039-25");

// Cambia estos valores por los reales
const totalPhotos = 266;
const totalTrips = 1000;
const totalCoffee = 100;

//-----------------------------------------

const daysCounter = document.getElementById("daysCounter");

const diff = new Date() - relationshipDate;

const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

animate(daysCounter,totalDays);

animate(document.getElementById("photoCounter"),totalPhotos);

animate(document.getElementById("travelCounter"),totalTrips);

animate(document.getElementById("coffeeCounter"),totalCoffee);

function animate(element,target){

let value=0;

const speed=Math.max(15,1500/target);

const interval=setInterval(()=>{

value++;

element.innerHTML=value;

if(value>=target){

clearInterval(interval);

}

},speed);

}

document.getElementById("nextCounter").onclick=()=>{

document.body.style.opacity=0;

document.body.style.transition=".8s";

setTimeout(()=>{

location.href="letter.html";

},800);

}