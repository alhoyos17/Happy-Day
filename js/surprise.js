const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Crear partículas

for(let i=0;i<500;i++){

    particles.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        tx:0,
        ty:0,

        size:2+Math.random()*2

    });

}

// Crear corazón

function heart(t){

    const x = 16*Math.pow(Math.sin(t),3);

    const y =
    13*Math.cos(t)
    -5*Math.cos(2*t)
    -2*Math.cos(3*t)
    -Math.cos(4*t);

    return{

        x:centerX+x*18,

        y:centerY-y*18

    }

}

const points=[];

for(let a=0;a<Math.PI*2;a+=0.012){

    points.push(heart(a));

}

// Asignar destino

particles.forEach((p,i)=>{

    const point=points[i%points.length];

    p.tx=point.x;

    p.ty=point.y;

});

let frame=0;

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.x+=(p.tx-p.x)*0.04;
        p.y+=(p.ty-p.y)*0.04;

        ctx.beginPath();

        ctx.fillStyle="#B28DFF";

        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

        ctx.fill();

    });

    frame++;

    if(frame<500){

        requestAnimationFrame(animate);

    }else{

        showMessages();

    }

}

animate();

// Mensajes

const message=document.getElementById("message");

const container=document.getElementById("messageContainer");

const restart=document.getElementById("restart");

function showMessages(){

    container.style.opacity=1;

    let texts=[

        "Gracias por diseñar la mejor versión de mí.",

        "Feliz Día del Diseñador Industrial ❤️",

        "Te amo muchísimo."

    ];

    let index=0;

    function change(){

        if(index<texts.length){

            message.style.opacity=0;

            setTimeout(()=>{

                message.innerHTML=texts[index];

                message.style.opacity=1;

                index++;

                setTimeout(change,3000);

            },700);

        }else{

            restart.style.opacity=1;

        }

    }

    change();

}

restart.onclick=()=>{

    location.href="index.html";

}

window.onresize=()=>{

    canvas.width=innerWidth;

    canvas.height=innerHeight;

}