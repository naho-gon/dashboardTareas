let dia = 0;

function agregarTarea(){
    let agregado = prompt("Agregue una tarea para el día");
    return agregado;
}

while(confirm("¿Tiene alguna tarea para realizar hoy?")){
    dia +=1;
    console.log("----------------------------- DÍA " + dia + " -----------------------------");

    let tarea1 = agregarTarea();
    let tarea2 = agregarTarea();
    let tarea3 = agregarTarea();
    let tarea4 = agregarTarea();
    let tarea5 = agregarTarea();

    console.log("Tareas del día:");
    console.log("Tarea 1. " + tarea1);
    console.log("Tarea 2. " + tarea2);
    console.log("Tarea 3. " + tarea3);
    console.log("Tarea 4. " + tarea4);
    console.log("Tarea 5. " + tarea5);
    console.log("-----------------------------------");


    let eliminarTarea = confirm("¿Desea eliminar una tarea?");

    if(eliminarTarea){
        let tareaEliminada = parseInt(prompt("¿Qué tarea desea eliminar? (Ingrese el número de la tarea)"));
        
        switch (tareaEliminada){
            case 1:
                console.log("Tareas del día:");
                console.log(tarea2);
                console.log(tarea3);
                console.log(tarea4);
                console.log(tarea5);
                console.log("-----------------------------------")
                break;
            
            case 2:
                console.log("Tareas del día:");
                console.log(tarea1);
                console.log(tarea3);
                console.log(tarea4);
                console.log(tarea5);
                console.log("-----------------------------------")
                break;

            case 3:
                console.log("Tareas del día:");
                console.log(tarea1);
                console.log(tarea2);
                console.log(tarea4);
                console.log(tarea5);
                console.log("-----------------------------------")
                break;

            case 4:
                console.log("Tareas del día:");
                console.log(tarea1);
                console.log(tarea2);
                console.log(tarea3);
                console.log(tarea5);
                console.log("-----------------------------------")
                break;

            case 5:
                console.log("Tareas del día:");
                console.log(tarea1);
                console.log(tarea2);
                console.log(tarea3);
                console.log(tarea4);
                console.log("-----------------------------------")
                break;
            
            default:
                console.log("No existe esa tarea");
                break;
        }
    }
}