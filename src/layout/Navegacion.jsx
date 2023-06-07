import {Box, Tabs, Tab, Button, Divider, MenuItem, Menu} from '@mui/material';
import {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {styled, alpha} from '@mui/material/styles';

export function Navegacion() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const StyledMenu = styled((props) => (
		<Menu
			elevation={0}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			{...props}
		/>
	))(({theme}) => ({
		'& .MuiPaper-root': {
			borderRadius: 6,
			marginTop: theme.spacing(1),
			minWidth: 180,
			color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
			boxShadow:
				'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
			'& .MuiMenu-list': {
				padding: '4px 0',
			},
			'& .MuiMenuItem-root': {
				'& .MuiSvgIcon-root': {
					fontSize: 18,
					color: theme.palette.text.secondary,
					marginRight: theme.spacing(1.5),
				},
				'&:active': {
					backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
				},
			},
		},
	}));
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

							<Button
								aria-controls={open ? 'demo-customized-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}
								disableElevation
								sx={{color: 'white'}}
								onClick={handleClick}>
								Ciudades
							</Button>
							<StyledMenu
								id='demo-customized-menu'
								MenuListProps={{
									'aria-labelledby': 'demo-customized-button',
								}}
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}>
								<MenuItem onClick={handleClose} disableRipple>
									Bogotá
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose} disableRipple>
									Cali
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose} disableRipple>
									Bucaramanga
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose} disableRipple>
									Medellin
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose} disableRipple>
									Cúcuta
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose} disableRipple>
									Manizales
								</MenuItem>
							</StyledMenu>
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
