const estadoInicial = {
	productos: [
		{ id: 1, nombre: 'Producto #1' },
		{ id: 2, nombre: 'Producto #2' },
		{ id: 3, nombre: 'Producto #3' },
		{ id: 4, nombre: 'Producto #4' },
	],
	carrito: [],
};

const reducer = (estado = estadoInicial, accion) => {
	switch (accion.type) {
		// case para agregar productos al carrito
		case 'Agregar_Producto_Al_Carrito':
			// clonamos el array del carrito
			var nuevoCarrito = [...estado.carrito];

			// devolvemos un valor booleano de acuerdo si se repite el producto
			var yaEstaCarrito =
				nuevoCarrito.filter((producto) => {
					return producto.id === accion.id;
				}).length > 0;
			// si ya esta, actualizamos el valor
			if (yaEstaCarrito) {
				nuevoCarrito.forEach((producto, index) => {
					if (producto.id === accion.id) {
						// obtenemos la cantidad inicial del producto
						let cantidad = nuevoCarrito[index].cantidad;
						// incrementamos la cantidad
						nuevoCarrito[index] = {
							id: accion.id,
							nombre: accion.nombre,
							cantidad: cantidad + 1,
						};
					}
				});
			} else {
				// insertamos el nuevo producto al carrito
				nuevoCarrito.push({
					id: accion.id,
					nombre: accion.nombre,
					cantidad: 1,
				});
			}
			// devolvemos el estado del carrito actualizado
			return { ...estado, carrito: nuevoCarrito };
		default:
			return estado;
	}
};

export default reducer;
