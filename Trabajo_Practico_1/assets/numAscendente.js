let num1 = prompt('Ingrese el primer número:')
let num2 = prompt('Ingrese el segundo número:')
let num3 = prompt('Ingrese el tercer número:')

if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    alert('Ingrese solamente números');
    window.location.reload();
}
else if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        alert('Los números ordenados de manera ascendente son: ' + num3 + ', ' + num2 + ', ' + num1);
        window.location.reload();
    }
    else{
        alert('Los números ordenados de manera ascendente son: ' + num2 + ', ' + num3 + ', ' + num1);
        window.location.reload();
    }

}
else if(num2 > num3){
    if(num1 > num3){
        alert('Los números ordenados de manera ascendente son: ' + num3 + ', ' + num1 + ', ' + num2);
        window.location.reload();
    }
    else{
        alert('Los números ordenados de manera ascendente son: ' + num1 + ', ' + num3 + ', ' + num2);
        window.location.reload();
    }
}
else{
    if(num1 > num2){
        alert('Los números ordenados de manera ascendente son: ' + num2 + ', ' + num1 + ', ' + num3);
        window.location.reload();
    }
    else{
        alert('Los números ordenados de manera ascendente son: ' + num1 + ', ' + num2 + ', ' + num3);
        window.location.reload();
    }
}