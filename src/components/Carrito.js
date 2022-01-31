import React from 'react';
import styled from 'styled-components';

const Carrito = ({ carrito }) => {
	return (
		<>
			<h1>Carrito de compras</h1>
			{carrito.length > 0 ? (
				carrito.map((producto,index) => {
					return (
						<Producto key={index}>
							<NombreProducto>{producto.nombre}</NombreProducto>
							<p>cantidad: {producto.cantidad}</p>
						</Producto>
					);
				})
			) : (
				<p>Todavia no hay productos agregados</p>
			)}
		</>
	);
};
const Producto = styled.div`
	padding: 10px;
	border-bottom: 1px solid #ebebf3;
	font-size: 15px;
`;
const NombreProducto = styled.p`
	font-weight: bold;
	font-size: 20px;
	margin-bottom: 0px;
	color: #000;
`;
export default Carrito;
