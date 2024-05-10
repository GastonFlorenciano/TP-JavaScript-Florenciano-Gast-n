let productos = parseInt(prompt('Ingrese la cantidad de productos:'));
let precio = parseInt(prompt('Ingrese el precio total:'));

if(isNaN(productos) || isNaN(precio)){
    alert('Solo se admiten números')
}else if(productos <= 0){
    alert('No existen productos')
}else if(productos >= 10 && precio > 20000){
    let porcentaje = precio * 0.15;
    let descuento = precio - porcentaje;
    alert('La compra con descuento es de: $' + descuento)
}else{
    alert('Necesita 10 productos o más y mas de $20.000 para acceder al descuento: $' + precio)
}