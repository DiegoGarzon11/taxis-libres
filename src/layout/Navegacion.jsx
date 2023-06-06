import {Box, Tabs, Tab, Button} from '@mui/material';
import {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';

export function Navegacion() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<nav className='w-full fixed z-10'>
				<div className='flex h-16 items-center justify-around backdrop-blur-3xl' style={{backgroundColor: '#181818', opacity: '0.8'}}>
					<div>
						<img src='src/assets/logo.png' alt='' className='w-32' />
					</div>
					<Box>
						<Tabs value={value} onChange={handleChange} aria-label='nav tabs example'>
							<Tab label='Inicio' component={Link} to='/' sx={{color: 'white'}} />
							<Tab label='Nosotros' component={Link} to='/nosotros' sx={{color: 'white'}} />
							<Tab label='Viajeros' component={Link} to='/viajeros' sx={{color: 'white'}} />
							<Tab label='Empresas' component={Link} to='/empresas' sx={{color: 'white'}} />
							<Tab label='Ciudades' component={Link} to='/ciudades' sx={{color: 'white'}} />
						</Tabs>
					</Box>
					<Button sx={{border: 'solid', color: 'white', borderColor: '#f1fb42'}}>App</Button>
				</div>
			</nav>

			<Outlet />
			<button className='fixed right-5 border-2 border-primary text-terciary bg-secondary p-5 rounded-full bottom-5'> Soporte</button>
		</>
	);
}
