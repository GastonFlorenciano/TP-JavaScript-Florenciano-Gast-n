let tasks = [];

function listarMaterias() {
    if (tasks.length === 0) {
        alert('No hay materias disponibles.');
    } else {
        alert('Materias: ' + tasks.join(', '));
    }
}

function añadirMateria() {
    let addTask = prompt('Ingrese la materia que quiera añadir:');
    if (addTask) {
        tasks.push(addTask.toUpperCase());
        alert('Materia añadida!');
    } else {
        alert('No se añadió ninguna materia.');
    }
}

function editarMateria() { 
    let editTask = prompt('Ingrese la materia que quiera editar:');
    if (editTask) {
        let index = tasks.indexOf(editTask.toUpperCase());
        if (index !== -1) {
            let newTask = prompt('Ingrese el nuevo nombre para la materia:');
            if (newTask) {
                tasks[index] = newTask.toUpperCase();
                alert('Materia editada!');
            } else {
                alert('No se editó la materia.');
            }
        } else {
            alert('Error: Materia no encontrada.');
        }
    } else {
        alert('Error: Información incompleta.');
    }
}

function eliminarMateria() {
    let deleteTask = prompt('Ingrese la materia que quiera eliminar:');
    if (deleteTask) {
        let index = tasks.indexOf(deleteTask.toUpperCase());
        if (index !== -1) {
            tasks.splice(index, 1);
            alert('Materia eliminada!');
        } else {
            alert('Error: Materia no encontrada.');
        }
    } else {
        alert('No se eliminó ninguna materia.');
    }
}

function mostrarMenu() {
    while (true) {
        let actions = parseInt(prompt('Ingrese el número de la acción que quiera realizar:\n1-LISTAR MATERIAS\n2-AÑADIR MATERIA\n3-EDITAR MATERIA\n4-ELIMINAR MATERIA\n5-SALIR'));

        switch (actions) {
            case 1:
                listarMaterias();
                break;
            case 2:
                añadirMateria();
                break;
            case 3:
                editarMateria();
                break;
            case 4:
                eliminarMateria();
                break;
            case 5:
                alert('Saliendo del programa.');
                return;
            default:
                alert('Opción no válida. Por favor, intente de nuevo.');
                break;
        }
    }
}

mostrarMenu();
