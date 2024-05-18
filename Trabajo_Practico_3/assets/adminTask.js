const regex = /^\S+$/;
let tasks = [];

function listarTareas() {

    if (tasks.length > 0) {
        alert(tasks);
    } else {
        alert('Todavía no hay tareas');
    }
}

function agregarTarea() {

    let add = prompt('Ingrese una Tarea para añadir:');

    if (regex.test(add)) {
        tasks.push(add.toUpperCase());
        alert('Tarea añadida!');
    } else {
        alert('No puede estar vacío o contener espacios al principio/final');
    }
}

function editarTarea() {

    if (tasks.length > 0) {

        let tarea = prompt('Ingrese la Tarea que quiera editar:');
        let nuevo = prompt('Ingrese la nueva Tarea:')
        
        if(regex.test(nuevo)){

            if (tasks.includes(tarea.toUpperCase())) {
    
                let index = tasks.indexOf(tarea);
    
                tasks.splice(index, 1, nuevo.toUpperCase())
    
                alert('Tarea editada!');
    
            } else {
                alert('Tarea no encontrada');
            }
        }else{
            alert('No puede estar vacío o contener espacios al principio/final');
        }

    } else {
        alert('Todavía no hay Tareas');
    }
}

function eliminarTarea() {
    if (tasks.length > 0) {

        let tarea = prompt('Ingrese la Tarea que quiera eliminar:');

        if(regex.test(tarea)){

            if (tasks.includes(tarea.toUpperCase())) {
                let index = tasks.indexOf(tarea.toUpperCase());
                tasks.splice(index, 1);
                alert('Tarea eliminada!');
            }else {
                alert('Tarea no encontrada');
            }
        } else {
            alert('No puede estar vacío o contener espacios al principio/final');
        }
    } else {
        alert('Todavía no hay Tareas');
    }
}

function mostrarMenu() {
    while (true) {
        let actions = parseInt(prompt('Ingrese el número de la acción que quiera realizar:' + '\n1-LISTAR Tareas' + '\n2-AÑADIR Tarea' + '\n3-EDITAR Tarea' + '\n4-ELIMINAR Tarea' + '\n5-SALIR: Se eliminarán las tareas existentes.'));

        switch (actions) {
            case 1:
                listarTareas();
                break;
            case 2:
                agregarTarea();
                break;
            case 3:
                editarTarea();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
                alert('Saliendo del sistema...');
                tasks = [];
                break;
            default:
                alert('Ingrese un numero que corresponda a las opciones');
                break;
        }
    }

}
mostrarMenu();
