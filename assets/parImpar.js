let numero = prompt('Ingrese un número:')


if(isNaN(numero)){
    alert('Ingrese un NÚMERO');
    window.location.reload();
}
else if(numero % 2 === 0){
    alert('El número es PAR');
    window.location.reload();
}
else{
    alert('El número es IMPAR');
    window.location.reload();
}   