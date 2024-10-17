
    });

    console.log("\n--- Sistema de Gestión de Citas Médicas ---");
    console.log("1. Programar Cita");
    console.log("2. Ver Citas Programadas");
    console.log("3. Cancelar Cita");
    console.log("4. Salir");

    readline.question("Selecciona una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                readline.question("Nombre del paciente: ", (nombrePaciente) => {
                    readline.question("Fecha (YYYY-MM-DD): ", (fecha) => {
                        readline.question("Hora (HH:MM): ", (hora) => {
                            readline.question("Médico: ", (medico) => {
                                programarCita(nombrePaciente, fecha, hora, medico);
                                menu(); 
                            });
                        });
                    });
                });
                break;
            case '2':
                verCitas();
                menu(); 
                break;
            case '3':
                readline.question("Índice de la cita a cancelar: ", (indice) => {
                    cancelarCita(parseInt(indice));
                    menu(); 
                break;
            case '4':
                console.log("Saliendo del sistema...");
                readline.close();
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
                menu(); 
                break;
        }
    });
}


menu();
