let nota1 = parseInt(prompt('Ingrese la nota del primer trimestre (1-10):'));
let nota2 = parseInt(prompt('Ingrese la nota del segundo trimestre (1-10):'));
let nota3 = parseInt(prompt('Ingrese la nota del tercer trimestre (1-10):'));

if(nota1 > 10 || nota1 < 1 || nota2 > 10 || nota2 < 1 || nota3 > 10 || nota3 < 1 ){
    alert('El rango de notas es del 1 al 10')
}else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    alert ('Ingrese solamente números')
}
else{

let promedio = Math.round((nota1 + nota2 + nota3) / 3);

switch (true) {
    case promedio >= 1 && promedio <= 3:
        alert('Nota insuficiente');
        break;
    case promedio >= 4 && promedio <= 5:
        alert('Nota regular');
        break;
    case promedio >= 6 && promedio <= 7:
        alert('Nota buena');
        break;
    case promedio >= 8 && promedio <= 9:
        alert('Nota muy buena'); 
        break;
    default:
        alert('Nota sobresaliente');
        break;
}
}   
