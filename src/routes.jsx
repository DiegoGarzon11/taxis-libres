import {useRoutes} from 'react-router-dom';

import {Navegacion} from './layout/navegacion/Navegacion';
import {Nosotros} from './pages/Nosotros';
import {Inicio} from './pages/inicio/inicio';
import {Viajeros} from './pages/Viajeros';
import {Empresas} from './pages/Empresas';

export function Router() {
	const routes = useRoutes([
		{
			path: '',
			element: <Navegacion />,
			children: [
				{
					path: '',
					element: <Inicio />,
				},

				{
					path: '/nosotros',
					element: <Nosotros />,
				},

				{
					path: '/viajeros',
					element: <Viajeros />,
				},
				{
					path: '/empresas',
					element: <Empresas />,
				},
			],
		},
	]);

	return routes;
}
