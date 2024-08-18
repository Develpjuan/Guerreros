class Warrior {
    constructor(id,nombre,salud,ataque,defensa,imagen,raza,tipoGuerrero,poderes) {
        //Inicializacion de atributos
        this.id = id;
        this.nombre = nombre;
        this.salud = salud;
        this.ataque = ataque;
        this.defensa = defensa;
        this.imagen = imagen;
        this.raza = raza;
        this.tipoGuerrero = tipoGuerrero;
        this.poderes = poderes;
    }
    Golpear() {
        console.log("El guerrero ha dado un golpe")
    }
    Correr() {
        console.log("El guerrero ha empezado a correr")
    }
    Morir() {
        console.log("El guerrero ha muerto")
    }
    Brincar() {
        console.log("El guerrero dio un brinco")
    }
    Esquivar() {
        console.log("El guerrero esquivo un ataque")
    }
    Nadar() {
        console.log("El guerrero esta nadando")
    }

}

class Race {
    constructor(nombre,bonificadorSalud,bonificadorAtaque,bonificadorDefensa) {
        //Inicializacion de atributos
        this.nombre = nombre;
        this.bonificadorSalud = bonificadorSalud;
        this.bonificadorAtaque = bonificadorAtaque;
        this.bonificadorDefensa = bonificadorDefensa;
    }
}

class WarriorType {

    constructor(nombre,bonificadorSalud,bonificadorAtaque,bonificadorDefensa) {
        //Inicializacion de atributos
        this.nombre = nombre;
        this.bonificadorSalud = bonificadorSalud;
        this.bonificadorAtaque = bonificadorAtaque;
        this.bonificadorDefensa = bonificadorDefensa;
    }
}

class Power {
    constructor(nombre,daño,efecto) {
        //Inicializacion de atributos
        this.nombre = nombre;
        this.daño = daño;
        this.efecto = efecto;
    }
}

const fetchData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
};

const crearInstancias = async () => {
    try {
        //Cargar datos desde los archivos JSON
        const [guerrerosData, razasData, tiposGuerreroData, poderesData] = await Promise.all([
            fetchData("../../../public/json/guerrero.json"),
            fetchData("../../../public/json/raza.json"),
            fetchData("../../../public/json/tipoGuerrero.json"),
            fetchData("../../../public/json/poderes.json")
        ]);

        const arrayGuerreroData = guerrerosData.guerrero;
        const guerreros = [];

        arrayGuerreroData.forEach( guerreroData => {
            //Inicio tipo Guerrero
        const arrayTipoGuerrero = tiposGuerreroData.tipoGuerrero;

        let tipoGuerreroAleatorio = [];
        for (let i = 0; i < 1; i++) {
            const indiceAleatorio = Math.floor(Math.random() * arrayTipoGuerrero.length)
            tipoGuerreroAleatorio.push(indiceAleatorio);
        }
        
        //Crear instancia de WarriorType
        const tipoGuerrero = new WarriorType(
            arrayTipoGuerrero[tipoGuerreroAleatorio].nombre,
            arrayTipoGuerrero[tipoGuerreroAleatorio].bonificadorSalud,
            arrayTipoGuerrero[tipoGuerreroAleatorio].bonificadorAtaque,
            arrayTipoGuerrero[tipoGuerreroAleatorio].bonificadorDefensa
        );

        //fin tipo guerrero

        //Inicio tipo Guerrero
        const arrayRazas = razasData.raza;

        let razaAleatoria = [];
        for (let i = 0; i < 1; i++) {
            const indiceAleatorio = Math.floor(Math.random() * arrayRazas.length);
            razaAleatoria.push(indiceAleatorio);
        }

        //Crear instancias de Race
        const raza = new Race(
            arrayRazas[razaAleatoria].nombre,
            arrayRazas[razaAleatoria].bonificadorSalud,
            arrayRazas[razaAleatoria].bonificadorAtaque,
            arrayRazas[razaAleatoria].bonificadorDefensa
        );
        //Fin razas

        //Inicio Poderes
        const arrayPoderes = poderesData.poderes;

        let indicePoderesAleatorios = [];
        let poderesAleatorios = [];

        for (let i = 0; i < 3; i++) {
            const indiceAleatorio = Math.floor(Math.random() * arrayPoderes.length);
            indicePoderesAleatorios.push(indiceAleatorio);
        }

        //Crear instancias de Power
        indicePoderesAleatorios.forEach(indice => {
            poderesAleatorios.push(new Power(
                arrayPoderes[indice].nombre,
                arrayPoderes[indice].daño,
                arrayPoderes[indice].efecto
            ))
        })

        //Inicio guerrero
        const guerrero = new Warrior(
            guerreroData.id,
            guerreroData.nombre,
            guerreroData.salud,
            guerreroData.ataque,
            guerreroData.defensa,
            guerreroData.imagen,
            tipoGuerrero,
            raza,
            poderesAleatorios
        )
        guerreros.push(guerrero);
        
        });
        console.log(guerreros);
        return guerreros;
        
    } catch (error) {
        console.log("Error al crear instancias:", error);
    }
}

crearInstancias();
