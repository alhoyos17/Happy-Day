const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity=0;
    card.style.transform="translateY(60px)";
    card.style.transition=".8s";

    observer.observe(card);

});

document.querySelectorAll(".visible").forEach(()=>{});

const style=document.createElement("style");

style.innerHTML=`

.visible{

opacity:1!important;

transform:translateY(0)!important;

}

`;

document.head.appendChild(style);

document.getElementById("nextPage").onclick=()=>{

    document.body.style.opacity=0;

    document.body.style.transition=".8s";

    setTimeout(()=>{

        location.href="gallery.html";

    },800);

}