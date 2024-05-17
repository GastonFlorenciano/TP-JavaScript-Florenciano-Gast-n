const regex = /^\S+$/;
let tasks = [];

function listarTareas(){

    if(tasks.length > 0){
        alert(tasks);
    }else{
        alert('Todavía no hay materias');
    }
}

function agregarTarea(){
    
    let add = prompt('Ingrese una materia para añadir:');
    
    if(regex.test(add)){
        tasks.push(add.toUpperCase());
        alert('Materia añadida!');
    }else{
        alert('Error');
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

function mostrarMenu(){
    while (true){
        let actions = parseInt(prompt('Ingrese el número de la acción que quiera realizar:' + '\n1-LISTAR MATERIAS' + '\n2-AÑADIR MATERIA' + '\n3-EDITAR MATERIA' + '\n4-ELIMINAR MATERIA'));

        switch (actions) {
            case 1:
                listTask();
                break;
            case 2:
                addTask();
                break;
            case 3:
                editarMateria();
                break;
            case 4:
                eliminarMateria();
                break;
            default:
                break;
        }
    }

}
mostrarMenu();
