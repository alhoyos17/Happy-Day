const message = `

Hoy es el dia del diseñador

Pero para mi es todos los dias,

Admiro tu creatividad en solucionar cosas, y en hacer las cosas bonitas

En fijarte en los detalles.

Amo tu inteligencia y que seas tan profesional

Nunca dudes de ti, porque eres mas grandiosa que lo que cualquiera podria imaginar

Te amo tanto y espero que nuestra relacion sea un proyecto en constante construccion


`;

const container = document.getElementById("letterText");

let index = 0;

function type(){

    if(index < message.length){

        container.textContent += message.charAt(index);

        index++;

        setTimeout(type,22);

    }

}

type();

document.getElementById("finish").onclick=()=>{

    document.body.style.transition=".8s";
    document.body.style.opacity="0";

    setTimeout(()=>{

        location.href="surprise.html";

    },800);

}