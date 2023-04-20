let intProducto = parseInt(prompt("Seleccione un producto a comprar:"));

let precioProducto;

/* Precio según código */
switch (intProducto) {
    case 1:
        precioProducto = 70.99;
        break;
    case 2:
        precioProducto = 78.99;
        break;
    case 3:
        precioProducto = 100.99;
        break;
    case 4:
        precioProducto = 58.50;
        break;
    case 5:
        precioProducto = 35.00;
        break;
     default:
        precioProducto = 0;
        alert("Debe ingresar un código correcto.");
        break;
}
/* Pedir cantidad SI seleccionó el producto */
let intCantidad;
let decDescuento;
if(precioProducto>0){
    intCantidad = parseInt(prompt("Ingrese la cantidad de juguetes: "));
    
    /* descuento según la cantidad ingresada */
    if(intCantidad <10){
        decDescuento = 0.035;
    }else if(intCantidad >=10 && intCantidad <=20){
        decDescuento = 0.07;
    }else if(intCantidad>20){
        decDescuento = 0.095;
    }

    let importeCompras = (precioProducto*intCantidad).toFixed(2);
    let importeDescuento = ((precioProducto*intCantidad)*decDescuento).toFixed(2);
    let importePagar = (importeCompras - importeDescuento).toFixed(2);

    document.write("<p>DETALLE DE LA VENTA</p>");
    document.write("<span>Precio Unitario :</span> "+ precioProducto+"<br>");
    document.write("<span>Cantidad de Juguetes :</span> "+ intCantidad+"<br>");
    document.write("<span>Importe de compras(S/) : </span> "+ importeCompras+"<br>" );
    document.write("<span>Importe de descuento(S/) : </span> "+ importeDescuento+"<br>");
    document.write("<span>Importe a pagar(S/) :</span> "+ importePagar);

}