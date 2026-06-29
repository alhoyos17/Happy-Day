const title = "Todo gran diseño comienza con una idea.";

const text =
"La mejor idea de mi vida fue conocerte. Desde entonces cada recuerdo, cada sonrisa y cada momento juntos hacen parte del proyecto más bonito que he tenido: nosotros.";

let i = 0;

let j = 0;

const titleElement = document.getElementById("typingTitle");
const textElement = document.getElementById("typingText");

function typeTitle(){

    if(i < title.length){

        titleElement.innerHTML += title.charAt(i);

        i++;

        setTimeout(typeTitle,55);

    }else{

        setTimeout(typeText,500);

    }

}

function typeText(){

    if(j < text.length){

        textElement.innerHTML += text.charAt(j);

        j++;

        setTimeout(typeText,20);

    }

}

typeTitle();

document.getElementById("nextButton").onclick=()=>{

    document.body.style.transition=".8s";

    document.body.style.opacity=0;

    setTimeout(()=>{

        location.href="timeline.html";

    },800);

};