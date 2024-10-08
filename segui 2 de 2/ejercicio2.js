// reserva de hotel
reservaciones = []
habitaciones = [
    {1 : "habitacion Individual", personas : 2},
    {2 : "Habitacion Doble", personas : 4},
    {3 : "Habitacion Familiar", personas : 6},
]

usuario = prompt("ingrese nombre completo")
eleccion = parseInt(prompt("que tipo de habitacion va a pedir?"))
individuos = parseInt(prompt("ingrese la cantidad de personas"))
fuma = prompt("eres fumador si / no").toLowerCase();
mascotas = prompt("habra mascotas? si/no").toLowerCase();
periodo = prompt("tiempo de la estadia en dias")
pais = prompt("pais de origen")

switch(eleccion){
    case 1: if (individuos === habitaciones[0].personas && mascotas === "no") {
        reser = (alert(`Reservacion Exitosa, ${usuario} de ${pais}, el numero de personas es ${individuos}, tiempo de estadia programda ${periodo} y mascotas ${mascotas} llevas`))
                reservaciones.push(reser)
            } else {
                alert("lo lamentamos pero los requisitos ingresados no son aptos para el tipo de habitacion")
            }
    break
    case 2: if (individuos === habitaciones[1].personas && mascotas === "no") {
        reser = (alert(`Reservacion Exitosa, ${usuario} de ${pais}, el numero de personas es ${individuos}, tiempo de estadia programda ${periodo} y mascotas ${mascotas} llevas`))
                reservaciones.push(reser)
            } else {
                alert("lo lamentamos pero los requisitos ingresados no son aptos para el tipo de habitacion")
            }
    case 2: if (individuos === habitaciones[1].personas && mascotas === "no") {
         reser = (alert(`Reservacion Exitosa, ${usuario} de ${pais}, el numero de personas es ${individuos}, tiempo de estadia programda ${periodo} y mascotas ${mascotas} llevas`))
                reservaciones.push(reser)
            } else {
                 alert("lo lamentamos pero los requisitos ingresados no son aptos para el tipo de habitacion")
            }       

}
gente += individuos
alert(`el numero de reservasiones total del hotel son ${reservaciones.length} y total de personas son ${gente}`)