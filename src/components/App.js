import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Usuarios';
import Publicaciones from './Publicaciones';
import Tareas from './Tareas';
import TareasGuardar from './Tareas/guardar';

const App = (props) => (
	<BrowserRouter>
		<Menu />
		<div id="margen">
			<Route exact path='/' component={Usuarios} />
			<Route exact path='/tareas' component={Tareas} />
			<Route exact path='/tareas/guardar' component={TareasGuardar} />
			<Route exact path='/tareas/guardar/:usu_id/:tar_id' component={TareasGuardar} />
			<Route exact path='/publicaciones/:key' component={Publicaciones} />
		</div>
	</BrowserRouter>
);

export default App;