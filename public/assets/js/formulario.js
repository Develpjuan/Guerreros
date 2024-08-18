const formulario = document.getElementById("jugadoresForm");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const jugador1 = document.getElementById("jugador-1").value;
    const user1 = document.getElementById("user-1").value;

    const jugador2 = document.getElementById("jugador-2").value;
    const user2 = document.getElementById("user-2").value;

    const jugadores = [
        {nombre: jugador1, usuario: user1},
        {nombre: jugador2, usuario: user2}
    ];

    //Almacenar los datos en localStorage
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
    alert("jugadores registrados exitosamente");

    //Limpia el formulario
    formulario.reset(); 

    //Redirige a otra pagian
    //window.location.href = "../../app/views/lista-guerreros.html"
    window.open("../../app/views/lista-guerreros.html", "_blank");
});