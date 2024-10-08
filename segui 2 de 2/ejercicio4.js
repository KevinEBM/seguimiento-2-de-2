let usuario = [
    {
        cliente1: "johan liebert",
        identificaion1: 123456789 ,
        turno1: 0
    },
    {
        cliente2: "kenzo tenma",
        identificaion2: 987654321 ,
        turno2: 0
    
    },
    {
        cliente3: "dieter",
        identificaion3: 234567890,
        turno3: 0
    },
    ]


ingresodeusuario = prompt("ingrese su nombre de usuario")
ingresoidentificaion = (prompt("ingrese su idenficicaion"))


if (ingresodeusuario == cliente1 && ingresoidentificaion == 123456789) {
    alert("bienvenido")
     turno = parseInt(prompt("ingrese el turno que desea tomar entre 1 y 3 "))

     switch(turno){
        case "1":
            alert("su numero de turno sera el 1")
            break

            case "2":
                alert("su numero de truno sera el 2")
                break

                case"3":
                alert("su numero de turno sera el 3")
                break

                
     }

} else {
    alert("usuario no reconocido")
    
}

if (ingresodeusuario == cliente2 && ingresoidentificaion == 987654321) {
    alert("bienvenido")
     turno = parseInt(prompt("ingrese el turno que desea tomar entre 1 y 3 "))

     switch(turno){
        case "1":
            alert("su numero de turno sera el 1")
            break

            case "2":
                alert("su numero de truno sera el 2")
                break

                case"3":
                alert("su numero de turno sera el 3")
                break

                
     }

} else {
    alert("usuario no reconocido")
    
}

if (ingresodeusuario == cliente3 && ingresoidentificaion == 234567890 ) {
    alert("bienvenido")
     turno = parseInt(prompt("ingrese el turno que desea tomar entre 1 y 3 "))

     switch(turno){
        case "1":
            alert("su numero de turno sera el 1")
            break

            case "2":
                alert("su numero de truno sera el 2")
                break

                case"3":
                alert("su numero de turno sera el 3")
                break

                
     }

} else {
    alert("usuario no reconocido")
    
}

function llamarturnos (cliente1) {
    turno.push(cliente1)
    alert(`turno agregado para ${cliente1}`)
    mostrarturnos()
    
}

function llamarturnos (cliente2) {
    turno.push(cliente2)
    alert(`turno agregado para ${cliente2}`)
    mostrarturnos()
}

function llamarturnos (cliente3) {
    turno.push(cliente3)
    alert(`turno agregado para ${cliente2}`)
    mostrarturnos()
}

function mostrarturnos (){
alert("turnos actuales")
turnos.forEach((turno, array) => {
    console.log(`${array + 1}. ${turno}`);
});
}