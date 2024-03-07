interface Producto {
  nombre: string,
  precios: number[],
  detalles: {
    peso: number,
    dimensiones: {
      alto: number,
      ancho: number,
      largo: number
    },
    material: string
  }
}


const miProducto: Producto = {
  nombre: "Mesa de madera",
  precios: [99.99, 149.99, 199.99],
  detalles: {
    peso: 15,
    dimensiones: {
      alto: 80,
      ancho: 120,
      largo: 60
    },
    material: "Madera de roble"
  }
};


function mostrarProducto(producto: Producto): void {
  console.log("Nombre: ", producto.nombre);
  console.log("Precios: ", producto.precios);
  console.log("Detalles:");
  console.log("- Peso: ", producto.detalles.peso);
  console.log("- Dimensiones ");
  console.log("  - Alto: ", producto.detalles.dimensiones.alto);
  console.log("  - Ancho: ", producto.detalles.dimensiones.ancho);
  console.log("  - Largo:", producto.detalles.dimensiones.largo);
  console.log("- Material: ", producto.detalles.material);
}


mostrarProducto(miProducto);

export { }
