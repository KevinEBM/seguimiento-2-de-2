let usuarioP = [
    {
        usuario : "Jhon Buitrago",  
        contraseña : 1010,
        cedula : 1095178355,
        cuentatotal : 0 
    },
    {
        usuario : "Elver garlarga",  
        contraseña : 2020,
        cedula : 1095178455,
        cuentatotal  : 5000000
    }
    ]
    IngresoDeUsuario = parseInt(prompt("ingrese No. de cedula"))
    IngresoDecontraseña = parseInt(prompt("Ingrese contraseña de cuenta"))
    
    
    if (IngresoDeUsuario === usuarioP[0].cedula && IngresoDecontraseña === usuarioP[0].contraseña){
        alert("usuario reconocido")
         deposito = parseInt(prompt(`si desea depositar digite 1\n, si desea retirar digite 2\n si desea tranferir 3\n 4 consulta de saldo`))
        
        switch(deposito){
    
            case 1:
            deposito2 = parseInt(prompt("ingrese cantidad de deposito"))
            tipoIngreso = prompt("en efectivo pon 1 y si es cheque 2")
            usuarioP[0].cuentatotal += deposito2
            alert(`Su saldo total es de ${usuarioP[0].cuentatotal} por medio de ${tipoIngreso}`)
            break
            case 2 : 
            deposito2 = parseInt(prompt("ingrese cuanto desea retirar debe ser multiploss de $50.000 o mayores"))
            if (deposito2 >= 50000) {
                usuarioP[0].cuentatotal -= deposito2
                alert(`retiro exitoso, puede tomar los ${deposito2} de la bandeja principal, saldo rstante ${usuarioP[0].cuentatotal}`)
            } else {
                alert("Lo siento pero no se puede retirar con montos menores a $50.000")
            }
            break
            case 3 : transferir = parseInt(prompt(" cuanto deseas tranferir"))
            IngresoDeUsuario = parseInt(prompt("ingrese No. de cedula de la cuenta que quiere tranferir"))
            if (usuarioP[1].IngresoDeUsuario === usuarioP[1].cedula) {
                usuarioP[1].cuentatotal += transferir
                alert(`el usuario encontrado ${usuarioP[1].usuario}, le fue transferido con exito ${tranferir}`)
                
            } else {
                alert("usuario no encontrado")
            }
            break
            case 4 : confirmacion = prompt("deseas consultar tu saldo si/no").toLowerCase()
            if (confirmacion === "si") {
                alert(`tu saldo es ${usuarioP[0].cuentatotal} `)
            } else {
                
            }
        } 
    }else {
        alert("ususario no reconocido")}
        for(let i = 0; i == 3; i++){
            if (i === 3) {
                alert("lo lamento pero demasiado intentos, si se le olvido la contraseña te sugerimos ir a atencion al cliente")
            }

    }

