const cards=document.querySelectorAll(".project-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(100px)"

},

{

opacity:1,

transform:"translateY(0px)"

}

],{

duration:800,

fill:"forwards"

});

}

});

},{threshold:.15});

cards.forEach(card=>{

observer.observe(card);

});

document.getElementById("nextProjects").onclick=()=>{

document.body.style.transition=".8s";

document.body.style.opacity=0;

setTimeout(()=>{

location.href="counter.html";

},800);

}