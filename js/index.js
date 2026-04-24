const imagenesMascotas = document.getElementsByClassName("mascotas-img");
const ventanaMascotas = document.getElementById("ventana-mascotas");
const imgVentana = document.getElementById("imgventana");
const cerrar = document.getElementsByClassName("cerrar")[0];
const anterior = document.getElementsByClassName("anterior")[0];
const siguiente = document.getElementsByClassName("siguiente")[0]; // 0 pq getElementsByClassName siempre devuelve una lista//

// como yo sé que imagenesMacotas tiene 2 nada mas empieza desde 0 y termina el 1 //
let indActual = 0;


// la var indice es una que creé yo temporalmente para la posición de la imagen que quiero mostrar//
function mostrarImagen(indice) {
    let imagen = imagenesMascotas[indice].getElementsByTagName("img")[0];
    imgVentana.src = imagen.src; // aqui copio la ruta de la imagen pequeña a la imagen grande del modal //
    indActual = indice; // aqui guardo la posicion de la imagen que se abrió//
    ventanaMascotas.style.display = "flex"; // como en el css display es none, aqui se cambia a flex para que se muestre//
    flechas(indActual);
}

for (let i = 0; i < imagenesMascotas.length; i++) { // i representa la posicion actual, i recorre la lista, y i < 2 solo se cumple si 
    // i es menor a 2 osea el ciclo solo se repite para 0 y 1, le estamos poniendo un rango que 
    // cuando llegue a 2 se rompe el bucle //
    imagenesMascotas[i].addEventListener("click", function () {
        mostrarImagen(i);
    })
}

cerrar.addEventListener("click", function () {
    ventanaMascotas.style.display = "none"; // lo mismo, al darle a la x se oculta, osea se pone en css display none//
})

siguiente.addEventListener("click", function () {
    indActual = (indActual + 1) % imagenesMascotas.length; // formula: (0 + 1) % 2 = 1, 1 es la segunda imagen con la posición 1 dentro de imagenesMascotas //
    mostrarImagen(indActual);
    flechas(indActual);
})

anterior.addEventListener("click", function () {
    indActual = (indActual - 1 + imagenesMascotas.length) % imagenesMascotas.length; // formula: ((1 - 1) + 2) % 2 = 0, aqui indActual seria de 1, por eso restamos 1 - 1 
    // pero para que no de un numero negativo le sumo 2, el residuo seria 0 pq 2 si cabe en 2//
    mostrarImagen(indActual);
    flechas(indActual);
})


function flechas(indActual) {
    if (indActual === 0) {
        anterior.style.display = "none";
    } else {
        anterior.style.display = "flex"
    }

    if (indActual === imagenesMascotas.length - 1) {
        siguiente.style.display = "none";
    } else {
        siguiente.style.display = "flex"
    }
}


// sidebar//
function showSidebar() {
    const sidebar = document.querySelector(".sidebar-nav");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar-nav");
    sidebar.style.display = "none";
}

// cuando se haga clic en cualquier parte de la página, guarda la información del clic en clicks //
document.addEventListener("click", function(clicks){
    const sidebar = document.querySelector(".sidebar-nav"); // la clase //
    const menuBoton = document.querySelector(".menu-sidebar"); // el svg de menu //

    const clickDentrosb = sidebar.contains(clicks.target); // target me da el elemento donde se hizo click, el container 
    // me debe dar un valor booleano, sidebar.contains es si ese elemento donde se hizo click está en el sidebar, guardda la informacion dentro de la variable//
    const clickenBoton = menuBoton.contains(clicks.target);

    if(!clickDentrosb && !clickenBoton) { // si el click No fue dentro del sidebar y tmapoco fue dentro del boton, osea si fue fuera de ambos que se cierre el sidebar //
        hideSidebar();
    }
})