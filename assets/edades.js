let edad = prompt('Ingrese una edad:')


if(edad % 1 != 0 || edad < 0){
    alert('Ingrese una edad válida')
    window.location.reload();
}
else if(edad >= 0 && edad <= 12){
    alert('Es un NIÑO');
    window.location.reload();
}
else if(edad >= 13 && edad <= 19){
    alert('Es un ADOLESCENTE');
    window.location.reload();
}
else if(edad >= 20 && edad <= 59){
    alert('Es un ADULTO');
    window.location.reload();
}
else{
    alert('Es un ADULTO MAYOR');
    window.location.reload();
}