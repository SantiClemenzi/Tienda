import React from 'react';
// componente
import Productos from './Productos';

const Tienda = ({ productos, agregarProductos }) => {
	return (
		<div>
			<h1>Tienda</h1>
			<Productos productos={productos} agregarProductos={agregarProductos} />
		</div>
	);
};

export default Tienda;
