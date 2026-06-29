const photos=document.querySelectorAll(".photo");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(120px)"

},

{

opacity:1,

transform:getComputedStyle(entry.target).transform

}

],{

duration:900,

fill:"forwards"

});

}

});

},{threshold:.2});

photos.forEach(photo=>{

observer.observe(photo);

});

document.getElementById("nextGallery").onclick=()=>{

document.body.style.opacity=0;

document.body.style.transition=".8s";

setTimeout(()=>{

location.href="projects.html";

},800);

}