let dia = 0;
const tareas = [];
class Tarea{
    constructor(t1, t2, t3, t4, t5){
        this.tarea1 = t1;
        this.tarea2 = t2;
        this.tarea3 = t3;
        this.tarea4 = t4;
        this.tarea5 = t5;
    }
};

function agregarTarea(){
    let agregado = prompt("Agregue una tarea para el día");
    return agregado;
};

function nuevaTarea(){
    const nuevaTarea = new Tarea(agregarTarea(), agregarTarea(), agregarTarea(), agregarTarea(), agregarTarea());
    return nuevaTarea;
};

function tareasDelDia(){
    console.log("Tareas del día:");
    console.table(tareas[dia]);
    console.log("-----------------------------------");
}


while(confirm("¿Tiene alguna tarea para realizar hoy?")){
    console.log("--------------------------- DÍA " + (dia + 1) + " ---------------------------");

    tareas.push(nuevaTarea());

    tareasDelDia();
    
    let eliminarTarea;

    while(eliminarTarea = confirm("¿Desea eliminar una tarea?")){
        if(tareas[dia] = ""){
            console.log("No tiene tareas para hoy")
        } else{
            let tareaEliminada = parseInt(prompt("¿Qué tarea desea eliminar? (Ingrese el número de la tarea)"));
        
            switch (tareaEliminada){
                case 1:
                    tareaEliminada = "tarea1";

                    delete tareas[dia][tareaEliminada];
                    tareasDelDia();
                    break;
            
                case 2:
                    tareaEliminada = "tarea2";
                    delete tareas[dia][tareaEliminada];
                    tareasDelDia();
                    break;

                case 3:
                    tareaEliminada = "tarea3";
                    delete tareas[dia][tareaEliminada];
                    tareasDelDia();
                    break;

                case 4:
                    tareaEliminada = "tarea4";
                    delete tareas[dia][tareaEliminada];
                    tareasDelDia();
                    break;

                case 5:
                    tareaEliminada = "tarea5";
                    delete tareas[dia][tareaEliminada];
                    tareasDelDia();
                    break;
            
                default:
                    console.log("No existe esa tarea");
                    break;
            };
        };
    };

    // while(confirm("¿Quieres buscar alguna tarea?")){
    //     for(const tarea in tareas[dia]){
    //         const buscarTarea = tareas[dia].find((x) => x.tarea === prompt("Palabra que contenga la tarea"));
    //     };
    // };


    // filtrarDia = tareas.filter((x) => x[tareaBuscar]);
    // console.log(filtrarDia);


    dia += 1;
};

while(confirm("Filtrar por N° de tareas")){
    
    let tareaBuscar = parseInt(prompt("¿Qué N° de tareas deseas buscar? (Ingrese el número de las tareas)"));

    let filtrarDia;

    switch (tareaBuscar){
        case 1:
            tareaBuscar = "tarea1";

            filtrarDia = tareas.map((x) => x.tareaBuscar);
            console.log(filtrarDia);
            break;

        case 2:
            tareaBuscar = "tarea2";

            filtrarDia = tareas.map((x) => x.tareaBuscar);
            console.log(filtrarDia);
            break;

        case 3:
            tareaBuscar = "tarea3";

            filtrarDia = tareas.map((x) => x.tareaBuscar);
            console.log(filtrarDia);
            break;

        case 4:
            tareaBuscar = "tarea4";

            filtrarDia = tareas.map((x) => x.tareaBuscar);
            console.log(filtrarDia);
            break;
        
        case 5:
            tareaBuscar = "tarea5";

            filtrarDia = tareas.map((x) => x.tareaBuscar);
            console.log(filtrarDia);
            break;
        
        default:
            console.log("No existe esa tarea");
            break;
    };
    

    
};