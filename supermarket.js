//3)

//3.1) Dado el siguiente objeto

//let carrito = {
// montoTotal: 10,
//productos: ["Leche"]
//}

 //Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
 
//3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal

//agregarProducto(nombre, precio, unidades) {
  // Completar aca...
//}
//Ej: agregarProducto("Azucar", 5, 2);
//Resultado esperado

//carrito = {
//  montoTotal: 20,
//    productos: ["Leche", "Azucar"]
//}

//3.3Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe "ya existe el producto xxx"


class _carrito_ {
constructor() {
this.montoTotal = 0;
this.productos = [];
}

agregarProducto(nombre, precio, unidades) {
    let mensaje;
    const productoAdquirido = this.productos.some((producto) => producto.nombre === nombre);
  
    if (productoAdquirido){
      mensaje = "El producto " + nombre + " ya existe en el carrito.";
    } else {
      const producto = {
        nombre,
        precio,
        unidades,
      }      
  
      this.montoTotal += precio * unidades;
      this.productos.push(producto);
    
    }
    
    console.log(mensaje);
  }
  
}
   const carritoSUPER = new _carrito_();
 carritoSUPER.agregarProducto("Leche", 3, 1);
 carritoSUPER.agregarProducto("Azucar", 5, 2);   
 carritoSUPER.agregarProducto("Leche", 3, 1);
 carritoSUPER.agregarProducto("Azucar", 5, 2);  
 carritoSUPER.agregarProducto("Arroz", 1, 10);
 carritoSUPER.agregarProducto("Tomates", 6, 20);  
  
 console.log(carritoSUPER);