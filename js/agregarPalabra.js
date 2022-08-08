let ingresarNuevaPalabra = document.querySelector(".ingresarPalabra");
let cuandoHayPalabrasNuevas = [], cuandoNoHayPalabrasNuevas = [];

let sectionAgregarPalabra = document.createElement("section"), opcionAgregarPalabra = document.createElement("opcionAgregarPalabra"), ingresoTexto = document.createElement("input"), zonaBotones = document.createElement("div"), descripcionPalabra = document.createElement("p") , seguirJuego = document.createElement("button"), cancelarJuego = document.createElement("button");

ingresoTexto.setAttribute("placeholder", "Ingrese una palabra");
ingresoTexto.setAttribute("maxlength", "8");

ingresoTexto.classList.add("ingresoTexto");

zonaBotones.classList.add("zonaBotones");

descripcionPalabra.classList.add("descripcionPalabra");
descripcionPalabra.textContent = "Palabras de hasta 8 letras";

seguirJuego.classList.add("seguirJuego");
seguirJuego.classList.add("boton");
seguirJuego.textContent = "Guardar y empezar";

cancelarJuego.classList.add("cancelarJuego");
cancelarJuego.classList.add("boton");
cancelarJuego.textContent = "Cancelar";

zonaBotones.appendChild(descripcionPalabra);
zonaBotones.appendChild(seguirJuego);
zonaBotones.appendChild(cancelarJuego);

opcionAgregarPalabra.classList.add("opcionAgregarPalabra");
opcionAgregarPalabra.appendChild(ingresoTexto);
opcionAgregarPalabra.appendChild(zonaBotones);

sectionAgregarPalabra.classList.add("sectionAgregarPalabra");
sectionAgregarPalabra.appendChild(opcionAgregarPalabra);

cuandoHayPalabrasNuevas.push(sectionAgregarPalabra);

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
