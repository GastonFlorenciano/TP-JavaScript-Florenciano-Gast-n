let dia = prompt('Ingrese un número del 1 al 7:')

switch (dia) {
    case '1':
        alert('Es DOMINGO');
        window.location.reload();
        break;
    case '2':
        alert('Es LUNES')
        window.location.reload();
        break;
    case '3':
        alert('Es MARTES')
        window.location.reload();
        break;
    case '4':
        alert('Es MIÉRCOLES')
        window.location.reload();
        break;
    case '5':
        alert('Es JUEVES')
        window.location.reload();
        break;
    case '6':
        alert('Es VIERNES')
        window.location.reload();
        break;
    case '7':
        alert('Es SÁBADO')
        window.location.reload();
        break;

    default:
        alert('Ingrese un numero en el rango previamente dicho')
        window.location.reload();
        break;
}