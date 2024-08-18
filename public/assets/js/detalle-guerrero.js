const detalleGuerreros = JSON.parse(localStorage.getItem("detalleGuerreros"));

console.log(detalleGuerreros);
console.log(detalleGuerreros.nombre);
console.log(detalleGuerreros.poderes);

const infoDetalleGuerrero = document.getElementById("detalleGuerrero");

infoDetalleGuerrero.innerHTML = "";

const detalle = document.createElement("div");
detalle.innerHTML = `
    <img src="${detalleGuerreros.imagen}">
    <h2>Nombre del guerrero:</h2>
    <p>${detalleGuerreros.nombre}</p>
    <h2>Salud:</h2>
    <p>${detalleGuerreros.salud}</p>
    <h2>Ataque:</h2>
    <p>${detalleGuerreros.ataque}</p>
    <h2>Defensa:</h2>
    <p>${detalleGuerreros.defensa}</p>
    <h2>Nombre de la raza:</h2>
    <p>${detalleGuerreros.raza.nombre}</p>
    <h2>Bonificacion de salud:</h2>
    <p>${detalleGuerreros.raza.bonificadorSalud}</p>
    <h2>Bonificacion de ataque:</h2>
    <p>${detalleGuerreros.raza.bonificadorAtaque}</p>
    <h2>Bonificacion de defensa</h2>
    <p>${detalleGuerreros.raza.bonificadorDefensa}</p>
    <h2>Nombre del tipo de guerrero:</h2>
    <p>${detalleGuerreros.tipoGuerrero.nombre}</p>
    <h2>Bonificacion de salud:</h2>
    <p>${detalleGuerreros.tipoGuerrero.bonificadorSalud}</p>
    <h2>Bonificacion de ataque</h2>
    <p>${detalleGuerreros.tipoGuerrero.bonificadorAtaque}</p>
    <h2>Bonificacion de defensa:</h2>
    <p>${detalleGuerreros.tipoGuerrero.bonificadorDefensa}</p>
    <p>${detalleGuerreros.poderes.map(p => `
        <h2>Nombre del poder:</h2>
        <p>${p.nombre}</p>
        <h2>Daño del poder:</h2>
        <p>${p.daño}</p>
        <h2>Efecto del poder</h2>
        <p>${p.efecto}</p>
        `).join('')}
    </p>
`;

infoDetalleGuerrero.appendChild(detalle);




