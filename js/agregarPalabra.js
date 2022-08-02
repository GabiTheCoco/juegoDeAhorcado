let ingresarNuevaPalabra = document.querySelector(".ingresarPalabra");
let cuandoHayPalabrasNuevas = [], cuandoNoHayPalabrasNuevas = [];

let sectionAgregarPalabra = document.createElement("section"), opcionAgregarPalabra = document.createElement("opcionAgregarPalabra"), ingresoTexto = document.createElement("input"), zonaBotones = document.createElement("div"), descripcionPalabra = document.createElement("p") , seguirJuego = document.createElement("button"), cancelarJuego = document.createElement("button");

ingresoTexto.setAttribute("placeholder", "Ingrese una palabra");
ingresoTexto.setAttribute("maxlength", "8");

ingresoTexto = agregarClase(ingresoTexto, "ingresoTexto");

zonaBotones = agregarClase(zonaBotones, "zonaBotones");

descripcionPalabra = agregarClase(descripcionPalabra, "descripcionPalabra");
descripcionPalabra.textContent = "Palabras de hasta 8 letras"

seguirJuego = agregarClase(seguirJuego, "seguirJuego");
seguirJuego = agregarClase(seguirJuego, "boton");
seguirJuego.textContent = "Guardar y empezar";

cancelarJuego = agregarClase(cancelarJuego, "cancelarJuego");
cancelarJuego = agregarClase(cancelarJuego, "boton");
cancelarJuego.textContent = "Cancelar";

zonaBotones.appendChild(descripcionPalabra);
zonaBotones.appendChild(seguirJuego);
zonaBotones.appendChild(cancelarJuego);

opcionAgregarPalabra = agregarClase(opcionAgregarPalabra, "opcionAgregarPalabra");
opcionAgregarPalabra.appendChild(ingresoTexto);
opcionAgregarPalabra.appendChild(zonaBotones);

sectionAgregarPalabra = agregarClase(sectionAgregarPalabra, "sectionAgregarPalabra");
sectionAgregarPalabra.appendChild(opcionAgregarPalabra);

cuandoHayPalabrasNuevas.push(sectionAgregarPalabra);

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
    contenidoPrincipal.appendChild(sectionAgregarPalabra);
});

seguirJuego.addEventListener("click", function(){
    alert("En desarrollo (?");
});

cancelarJuego.addEventListener("click", function(){
    invisible(cuandoHayPalabrasNuevas);
    visible(cuandoNoHayPalabrasNuevas);
});
