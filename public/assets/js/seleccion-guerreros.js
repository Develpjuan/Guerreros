const jugadores = JSON.parse(localStorage.getItem("jugadores"));
const listaJugadores = document.getElementById("jugadores");

listaJugadores.innerHTML = "";

//Objeto para almacenar las selecciones de guerreros
const seleccionJugadores = {
    jugador1: [],
    jugador2: []
};

//Mostrar la lista de jugadores
jugadores.forEach((jugador, index) => {
    const jugadorP = document.createElement("p");

    jugadorP.innerHTML = `
    <h2>Jugador ${index + 1}</h2>
    <p>Nombre: ${jugador.nombre}</p>
    <p>Usuario: ${jugador.usuario}</p>
    `;

    listaJugadores.appendChild(jugadorP);
});

const renderizarGuerreros = (datoGuerreros) => {
    const container = document.getElementById("warriors-container");
    const container2 = document.getElementById("warriors-container-2");

    container.innerHTML = "";
    container2.innerHTML = "";

    datoGuerreros.forEach(guerrero => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${guerrero.nombre}</h2>
            <p>Salud: ${guerrero.salud}</p>
            <p>Ataque: ${guerrero.ataque}</p>
            <p>Defensa: ${guerrero.defensa}</p>
            <input type="checkbox">
            <i id="btn-info" class="fa-solid fa-circle-info" data-id="${guerrero.id}"></i>
        `;

        // <img src="${guerrero.imagen}">
        //     <p>raza: ${guerrero.raza.nombre}</p>
        //     <p>Tipo Guerrero: ${guerrero.tipoGuerrero.nombre}</p>
        //     <p>Poderes: ${guerrero.poderes.map(p => p.nombre).join(", ")}</p>

        // <input type="checkbox" class="checkbox-jugador-1">
        const div2 = div.cloneNode(true);

        console.log(div);
        console.log(div2);

        //div2.querySelector("input").classList.replace("checkbox-jugador-1", "checkbox-jugador-2");

        container.appendChild(div);
        container2.appendChild(div2);

        document.querySelectorAll("#btn-info").forEach(button => {
            button.addEventListener("click", (event) => {
                const infoGuerreroId = event.target.getAttribute("data-id");
                const infoGuerrero = datoGuerreros.find(g => g.id == infoGuerreroId);
                localStorage.setItem("detalleGuerreros", JSON.stringify(infoGuerrero));
                //console.log(infoGuerrero);

                window.open("../../app/views/detalle-guerrero.html", "_blank");
                
            })
        })

//         esta es la estructura que tengo del html div.innerHTML = `
//             <h2>${guerrero.nombre}</h2>
//             <p>Salud: ${guerrero.salud}</p>
//             <p>Ataque: ${guerrero.ataque}</p>
//             <p>Defensa: ${guerrero.defensa}</p>
//             <input type="checkbox">
//             <i id="btn-info" class="fa-solid fa-circle-info" data-id="${guerrero.id}"></i>
//         `; y este su js document.querySelectorAll("#btn-info").forEach(button => {
//             button.addEventListener("click", (event) => {
//                 const infoGuerrero = event.target.getAttribute("data-id");
//                 localStorage.getItem("detalleGuerreros", JSON.stringify(infoGuerrero));
//                 //console.log(infoGuerrero);

//                 window.open("../../app/views/detalle-guerrero.html", "_blank");
                
//             })
//         }) el dato lo almaceno en localStorage para llevarlo a mostrar en otro archivo js que se llama detalle guerrero en el cual tengo esto para llamar el dato de localstorage const detalleGuerreros = JSON.parse(localStorage.getItem("detalleGuerreros"));

// console.log(detalleGuerreros); pero al mostrar por consola me muestra null no me trae
        
        // document.getElementById("btn-info").addEventListener("click", (event) => {
        //     const infoGuerrero = event.target.value;
        //     console.log(infoGuerrero);
            //localStorage.setItem("infoGuerreros", JSON.stringify())
            //window.open("../../app/views/detalle-guerrero.html", "_blank");
        //})

        //Evento para capturar seleccion de jugador 1
        div.querySelector("input").addEventListener("change", (event) => {
            const isChecked = event.target.checked;

            if(isChecked) {
                seleccionJugadores.jugador1.push(guerrero);
            }
            // } else {
            //     const idx = seleccionJugadores.jugador1.findIndex(g => g.id === guerrero.id);
            //     seleccionJugadores.jugador1.splice(idx, 1);
            // }
        });

        div2.querySelector("input").addEventListener("click", (event) => {
            const isChecked = event.target.checked;

            if(isChecked) {
                seleccionJugadores.jugador2.push(guerrero);
            }
            // } else {
            //     const idx = seleccionJugadores.jugador2.findIndex(g => g.id === guerrero.id);
            //     seleccionJugadores.jugador2.splice(idx, 1);
            // }
        }) 
    });
};

//Clic en confirmar seleccion

document.getElementById("confirmar-seleccion").addEventListener("click", () => {
    //Guardar en localStorage
    localStorage.setItem("seleccionesJugadores", JSON.stringify(seleccionJugadores));

    console.log("selecciones guardada:", seleccionJugadores);

    window.open("../../app/views/game.html", "_blank");
})



crearInstancias().then(guerreros => renderizarGuerreros(guerreros));