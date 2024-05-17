const regex = /^\S+$/;
let tasks = [];

function listTask(){

    if(tasks.length > 0){
        alert(tasks);
    }else{
        alert('Todavía no hay materias');
    }
}

function addTask(){
    
    let add = prompt('Ingrese una materia para añadir:');
    
    if(regex.test(add)){
        tasks.push(add.toUpperCase());
        alert('Materia añadida!');
    }else{
        alert('Error');
    }
}

function editTask(actual, nuevo){

    actual = prompt('Ingrese la materia que quiera editar:');
    nuevo = prompt('Ingrese el nuevo nombre:');

    
    
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
                editTask();
                break;
            
            default:
                break;
        }
    }

}
mostrarMenu();
