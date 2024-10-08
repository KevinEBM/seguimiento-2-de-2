let cantidadAtendidos = 0;
let cantidadEstudinate = 0;
let cantidadDirectivos = 0;
let cantidadTelefonica = 0;
let cantidadAsesoria = 0;
usuario = [
    {
        nombre : "Penelope",
        cedula : 1234567890
    }
]
ingreso = parseInt(prompt("ingrese No. cedula"))
son = prompt("Estudiante o Directivo").toLocaleUpperCase()
if (ingreso === usuario[0].cedula) {
    tipoAtencion = prompt("Tipo de atención:\n1. Llamada telefónica\n2. Asesoría");
    switch(tipoAtencion){
        case 1 : alert("Espera un momento para ser atendido por via telefonica")
        cantidadTelefonica++;
        if (son === "estudiante") {
            cantidadEstudinate++;
        } else if (son === "directivos") {
            cantidadDirectivos++;
        } else {
        }
        break
        case 2 : alert("Espera un momento para la asesoria")
        cantidadAsesoria++;
        if (son === "estudiante") {
            cantidadEstudinate++;
        } else if (son === "directivos") {
            cantidadDirectivos++;
        } else {
        }
        break
    }
} else {
    alert("no valido")
    
}
transferencia = parseInt(prompt("si quieres tranferir\n 1. asesoria \n 2.telefonica "))
switch(transferencia){
    case 1 : alert("Espera un momento para ser atendido por via telefonica")
        cantidadTelefonica++;
        if (son === "estudiante") {
            cantidadEstudinate++;
        } else if (son === "directivos") {
            cantidadDirectivos++;
        } else {
        }
        break
        case 2 : alert("Espera un momento para la asesoria")
        cantidadAsesoria++;
        if (son === "estudiante") {
            cantidadEstudinate++;
        } else if (son === "directivos") {
            cantidadDirectivos++;
        } else {
        }
        break
}
function mostrarEstadisticas() {
    console.log("Estadísticas de atención:");
    console.log(`Cantidad total de usuarios atendidos: ${cantidadUsuariosAtendidos}`);
    console.log(`Cantidad de atenciones telefónicas: ${cantidadTelefonica}`);
    console.log(`Cantidad de asesorías: ${cantidadAsesoria}`);
    console.log(`Asesorías a estudiantes: ${cantidadEstudiantes}`);
    console.log(`Asesorías a directivos: ${cantidadDirectivos}`);
}