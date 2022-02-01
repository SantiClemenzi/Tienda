import React from 'react';
// componente
import Productos from './Productos';

const Tienda = ({ agregarProductos }) => {
	return (
		<div>
			<h1>Tienda</h1>
			<Productos agregarProductos={agregarProductos} />
		</div>
	);
};

export default Tienda;
