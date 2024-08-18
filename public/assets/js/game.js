const renderizarGuerreros = (datoGuerreros) => {
    console.log(datoGuerreros);
    const container = document.getElementById("warriors-container-principal");

    container.innerHTML = "";

    datoGuerreros.forEach(guerrero => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${guerrero.nombre}</h2>
            <p>id: ${guerrero.id}</p>
            <p>Salud: ${guerrero.salud}</p>
            <p>Ataque: ${guerrero.ataque}</p>
            <p>Defensa: ${guerrero.defensa}</p>
            <img src="${guerrero.imagen}">
            <p>raza: ${guerrero.raza.nombre}</p>
            <p>Tipo Guerrero: ${guerrero.tipoGuerrero.nombre}</p>
            <p>Poderes: ${guerrero.poderes.map(p => p.nombre).join(", ")}</p>
        `;

        container.appendChild(div);
    });
};





crearInstancias().then(guerreros => renderizarGuerreros(guerreros));
