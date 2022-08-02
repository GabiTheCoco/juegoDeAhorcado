let contenidoPrincipal = document.querySelector(".contenidoPrincipal");
let verReglas = document.querySelector(".verReglas");
let iniciarJuego = document.querySelector(".iniciarJuego");

let cuandoNoHayReglas = [], cuandoHayReglas = [];

let reglas = ["Las letras ingresadas pueden ser minúsculas o mayúsculas", 
"Las palabras ingresadas por el usuario deben tener un máximo de 8 carácteres", 
"Sin cáracteres especiales, acentos y números (@, #, /, 1, 2, 3, etc.)", 
"Las reglas del juego son las de un ahorcado tradicional", 
"Las palabras están relacionadas al ámbito de la informática"];

let lista = document.createElement("ul");
lista.classList.add("listaReglas");
cuandoHayReglas.push(lista);

let boton = document.createElement("button");


crearLista(reglas, cuandoHayReglas, lista, contenidoPrincipal);
let botonVolver = crearBotonVolver();
cuandoHayReglas.push(botonVolver);

function agregarClase(elemento, clase){
    elemento.classList.add(clase);

    return elemento;
}

function quitarClase(elemento, clase){
    elemento.classList.remove(clase);

    return elemento;
}

function obtenerElementos(arreglo){
    let iniciarJuego = document.querySelector(".iniciarJuego");
    let ingresarPalabra = document.querySelector(".ingresarPalabra");

    arreglo.push(iniciarJuego);
    arreglo.push(ingresarPalabra);
    arreglo.push(verReglas);
}

function invisible (arreglo){
    arreglo.forEach(function(elementos){
        elementos = agregarClase(elementos, "invisible");
    });
}

function visible (arreglo){
    arreglo.forEach(function(elementos){
        elementos = quitarClase(elementos, "invisible");
    });
}

function crearLista(arreglo, arreglito, lista){

    arreglo.forEach(function(elemento){
        let item = document.createElement("li");

        // let atributo = document.createAttribute("type");
        // item.setAttributeNode(atributo);
        // item.setAttribute("type", "circle");

        item = agregarClase(item, "item");

        item.textContent = elemento;
        lista.appendChild(item);

        arreglito.push(item);
    });

}

function crearBotonVolver(){

    boton.setAttribute("type", "button");

    boton = agregarClase(boton, "botonVolver");
    boton = agregarClase(boton, "boton");

    boton.textContent = "Volver al menu anterior"

    return boton;
}

iniciarJuego.addEventListener("click", function(){
    alert("En desarrollo (?")
});

verReglas.addEventListener("click", function(){
    obtenerElementos(cuandoNoHayReglas);
    invisible(cuandoNoHayReglas);
    visible(cuandoHayReglas);
    contenidoPrincipal.appendChild(lista);
    contenidoPrincipal.appendChild(boton);
});



botonVolver.addEventListener("click", function(){
    invisible(cuandoHayReglas);
    visible(cuandoNoHayReglas);
});
