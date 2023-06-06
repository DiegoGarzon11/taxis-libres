import {useRoutes} from 'react-router-dom';

import {Navegacion} from './layout/Navegacion';
import {Nosotros} from './pages/Nosotros';
import {Inicio} from './pages/inicio';
import {Viajeros} from './pages/Viajeros';
import {Empresas} from './pages/Empresas';
import {Ciudades} from './pages/Ciudades';

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
				{
					path: '/ciudades',
					element: <Ciudades />,
				},
			],
		},
	]);

	return routes;
}
