const SeleccionesJugadores = JSON.parse(localStorage.getItem("seleccionesJugadores"));
const infoContainer = document.getElementById("resumen");

infoContainer.innerHTML = "";

//Mostrar la seleccion de los jugadores
Object.keys(SeleccionesJugadores).forEach(jugadorKey => {
    const jugadorDiv = document.createElement("div");
    jugadorDiv.innerHTML = `<h2>${jugadorKey.toUpperCase()}</h2>`;

    SeleccionesJugadores[jugadorKey].forEach(guerrero => {
        const guerreroDiv = document.createElement("div");
        guerreroDiv.innerHTML = `
        <h2>${guerrero.nombre}</h2>
            <p>id: ${guerrero.id}</p>
            <p>Salud: ${guerrero.salud}</p>
            <p>Ataque: ${guerrero.ataque}</p>
            <p>Defensa: ${guerrero.defensa}</p>
            <img src="${guerrero.imagen}">
            <p>raza: ${guerrero.raza.nombre}</p>
            <p>Tipo Guerrero: ${guerrero.tipoGuerrero.nombre}</p>
            <p>Poderes: ${guerrero.poderes.map(p => p.nombre).join(", ")}</p>
            <i class="fa-solid fa-circle-info"></i>
        `;

        jugadorDiv.appendChild(guerreroDiv)
    });
    infoContainer.appendChild(jugadorDiv);
});