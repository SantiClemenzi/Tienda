import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// reducer que creamos
import reducer from './reducer/tiendaReducer';
// componentes
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Tienda from './components/Tienda';
import Error404 from './components/Error404';
import Carrito from './components/Carrito';

const App = () => {
	// creamos el store que va almacenar los datos
	const store = createStore(reducer);
	return (
		<Provider store={store}>
			<Contenedor>
				<Menu>
					<NavLink to="/">Inicio</NavLink>
					<NavLink to="/blog">Blog</NavLink>
					<NavLink to="/tienda">Tienda</NavLink>
				</Menu>
				<main>
					<Routes>
						<Route path="/" element={<Inicio />}></Route>
						<Route path="/blog" element={<Blog />}></Route>
						<Route path="/tienda" element={<Tienda />}></Route>
						<Route path="*" element={<Error404 />}></Route>
					</Routes>
				</main>
				<aside>
					<Carrito />
				</aside>
			</Contenedor>
		</Provider>
	);
};
const Contenedor = styled.div`
	max-width: 1000px;
	padding: 40px;
	width: 90%;
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	background: #fff;
	margin: 40px 0;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
	width: 100%;
	text-align: center;
	background: #092c4c;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
		text-decoration: none;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
		// border-top: 2px solid #fff;
	}
`;
export default App;
