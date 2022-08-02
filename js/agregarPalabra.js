let ingresarNuevaPalabra = document.querySelector(".ingresarPalabra");
let cuandoHayPalabrasNuevas = [], cuandoNoHayPalabrasNuevas = [];

let ingresoTexto = document.createElement("input"), zonaBotones = document.createElement("div"), descripcionPalabra = document.createElement("p") , seguirJuego = document.createElement("button"), cancelarJuego = document.createElement("button");

ingresoTexto.setAttribute("placeholder", "Ingrese una palabra");

ingresoTexto = agregarClase(ingresoTexto, "ingresoTexto");

zonaBotones = agregarClase(zonaBotones, "zonaBotones");

descripcionPalabra = agregarClase(descripcionPalabra, "descripcionPalabra");
descripcionPalabra.textContent = "Palabras de hasta 8 letras"

seguirJuego = agregarClase(seguirJuego, "seguirJuego");
seguirJuego = agregarClase(seguirJuego, "boton");
seguirJuego.textContent = "Guardar y jugar";

cancelarJuego = agregarClase(cancelarJuego, "cancelarJuego");
cancelarJuego = agregarClase(cancelarJuego, "boton");
cancelarJuego.textContent = "Cancelar";

cuandoHayPalabrasNuevas.push(ingresoTexto);
cuandoHayPalabrasNuevas.push(descripcionPalabra);
cuandoHayPalabrasNuevas.push(seguirJuego);
cuandoHayPalabrasNuevas.push(cancelarJuego);

zonaBotones.appendChild(descripcionPalabra);
zonaBotones.appendChild(seguirJuego);
zonaBotones.appendChild(cancelarJuego);


invisible(cuandoHayPalabrasNuevas);

function agregarAcontenidoPrincipal(){
    
}

function agregarClase(elemento, clase){
    elemento.classList.add(clase);

    return elemento;
}

function quitarClase(elemento, clase){
    elemento.classList.remove(clase);

    return elemento;
}

ingresarNuevaPalabra.addEventListener("click", function(){
    obtenerElementos(cuandoNoHayPalabrasNuevas);
    invisible(cuandoNoHayPalabrasNuevas);
    visible(cuandoHayPalabrasNuevas);
    contenidoPrincipal.appendChild(ingresoTexto);
    contenidoPrincipal.appendChild(zonaBotones);
});

seguirJuego.addEventListener("click", function(){
    alert("En desarrollo (?");
});

cancelarJuego.addEventListener("click", function(){
    invisible(cuandoHayPalabrasNuevas);
    visible(cuandoNoHayPalabrasNuevas);
});
