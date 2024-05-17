let insert = prompt('Ingrese una asignatura para insertar a la lista:');
const regex = /^\S+$/;

let list = [];

function addTask(){

    if(regex.test(insert)){
        list.push(insert)
        alert(list)
    }else{
        alert('ERROR')
    }

}

while (insert != 0) {
    alert('1-Añadir')
    switch (key) {
        case 0:
            console.log('terminado');
            break;
    
        default:
            break;
    } 
}


