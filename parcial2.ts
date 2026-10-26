
/*
Nombre: Raul Alexandeer Muñoz Sosa
Evaluación: Lab4 - Reservaciones
*/

// 1. Interfaz y datos iniciales
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Ana", personas: 2, zona: "Interior" },
    { id: 2, cliente: "Carlos", personas: 5, zona: "Terraza" },
    { id: 3, cliente: "María", personas: 6, zona: "Interior" },
    { id: 4, cliente: "José", personas: 4, zona: "Terraza" }
];

console.log("1. RESERVACIONES INICIALES");
console.log(reservaciones);

// 2. Registrar nuevas reservaciones
const normal: Reservacion = {
    id: 5,
    cliente: "Lucía",
    personas: 3,
    zona: "Interior"
};

const prioritaria: Reservacion = {
    id: 6,
    cliente: "Pedro",
    personas: 5,
    zona: "Terraza"
};

reservaciones.push(normal);
reservaciones.unshift(prioritaria);

console.log("2. LISTA ANTES DE ATENDER");
console.log(reservaciones);

// 3. Función tipada para atender reservaciones
function atenderReservacion(
    lista: Reservacion[]
): Reservacion | undefined {
    return lista.shift();
}

// Primera llamada: atiende una reservación
const atendida = atenderReservacion(reservaciones);

if (atendida !== undefined) {
    console.log("3. RESERVACIÓN ATENDIDA");
    console.log("Cliente:", atendida.cliente);
    console.log("Personas:", atendida.personas);
} else {
    console.log("No hay reservaciones pendientes.");
}

// Segunda llamada: prueba con una lista vacía
const listaVacia: Reservacion[] = [];
const atendidaVacia = atenderReservacion(listaVacia);

if (atendidaVacia !== undefined) {
    console.log("Cliente atendido:", atendidaVacia.cliente);
} else {
    console.log("Prueba: la lista está vacía.");
}

// 4. Buscar por identificador
const buscada: Reservacion | undefined =
    reservaciones.find((r: Reservacion): boolean => r.id === 2);

if (buscada !== undefined) {
    console.log("4. RESERVACIÓN ENCONTRADA");
    console.log(buscada);
} else {
    console.log("No existe la reservación con ID 2.");
}

// Demostrar un identificador inexistente
const inexistente: Reservacion | undefined =
    reservaciones.find((r: Reservacion): boolean => r.id === 99);

if (inexistente !== undefined) {
    console.log(inexistente);
} else {
    console.log("No existe la reservación con ID 99.");
}

// 5. Filtrar terraza con cinco o más personas
const cantidadAntes: number = reservaciones.length;

const filtradas: Reservacion[] = reservaciones.filter(
    (r: Reservacion): boolean =>
        r.zona === "Terraza" && r.personas >= 5
);

const cantidadDespues: number = reservaciones.length;

console.log("5. RESERVACIONES FILTRADAS");
console.log(filtradas);

if (filtradas.length === 0) {
    console.log("No hay coincidencias en el filtro.");
}

// 6. Verificación final
console.log("6. RESERVACIONES PENDIENTES");
console.log(reservaciones);

console.log("Cantidad de reservaciones pendientes:", reservaciones.length);
console.log("Cantidad de coincidencias del filtro:", filtradas.length);

console.log("Cantidad original antes del filtro:", cantidadAntes);
console.log("Cantidad original después del filtro:", cantidadDespues);

console.log(
    "¿El filtro conservó el arreglo original?",
    cantidadAntes === cantidadDespues
);
