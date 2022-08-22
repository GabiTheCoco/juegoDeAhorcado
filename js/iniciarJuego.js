let iniciarJuego = document.querySelector(".iniciarJuego"), juegoIniciado = []
, juegoFinalizado = [];


var palabraElegida = "";

let sectionIniciarJuego = document.createElement("section"), 
opcionIniciarJuego = document.createElement("div"),
zonaHorca = document.createElement("div"),
zonaBoxes = document.createElement("div"),
zonaFallos = document.createElement("div"),
zonaInput = document.createElement ("input"),
nuevoJuego = document.createElement("button"),
desistir = document.createElement("button");


sectionIniciarJuego.classList.add("sectionIniciarJuego");
opcionIniciarJuego.classList.add("opcionIniciarJuego");

zonaHorca.classList.add("zonaHorca");
zonaBoxes.classList.add("zonaBoxes");
zonaFallos.classList.add("zonaFallos");

zonaInput.classList.add("zonaInput");
zonaInput.setAttribute("placeholder", "Ingrese las letras deseadas")

nuevoJuego.classList.add("nuevoJuego");
nuevoJuego.textContent = "Nuevo juego";
nuevoJuego.classList.add("boton");

desistir.classList.add("desistir");
desistir.textContent = "Desistir";
desistir.classList.add("boton");

nuevoJuego.setAttribute("type", "button");
desistir.classList.add("type", "button");

opcionIniciarJuego.appendChild(zonaHorca);
opcionIniciarJuego.appendChild(zonaBoxes);
opcionIniciarJuego.appendChild(zonaFallos);
opcionIniciarJuego.appendChild(zonaInput);
opcionIniciarJuego.appendChild(nuevoJuego);
opcionIniciarJuego.appendChild(desistir);

sectionIniciarJuego.appendChild(opcionIniciarJuego);

juegoIniciado.push(sectionIniciarJuego);

invisible(juegoIniciado);

function crearBoxes(palabra, zonaBoxes){
    let box = "";

    for(let i=0; i<palabra.length; i++){
        box = document.createElement("p");
        box.classList.add("boxP");
        // box.textContent = "";
        zonaBoxes.appendChild(box);
    }
}

function quitarNodos(node) {
    while (node.hasChildNodes()) {
        clear(node.firstChild);
    }
}
  
function clear(node) {
    node.parentNode.removeChild(node);
}

iniciarJuego.addEventListener("click", function(){
    palabraElegida = palabrasMobile[aleatorioMobile()];
    crearBoxes(palabraElegida, zonaBoxes);


    obtenerElementos(juegoFinalizado);
    invisible(juegoFinalizado);
    visible(juegoIniciado);

    contenidoPrincipal.appendChild(sectionIniciarJuego);
    
});

desistir.addEventListener("click", function(){
    invisible(juegoIniciado);
    visible(juegoFinalizado);
    quitarNodos(zonaBoxes);
});