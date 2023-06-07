import {Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, Divider, TextField, Typography} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';
import {styled} from '@mui/system';
import {Footer} from '../layout/Footer';
export function Empresas() {
	const [checkedValues, setCheckedValues] = useState({
		terms: false,
		dataPolicy: false,
	});

	const handleChangeCheck = (name) => (event) => {
		setCheckedValues({...checkedValues, [name]: event.target.checked});
	};

	const [age, setAge] = useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const recomendaciones = [
		{
			img: '/assets/logo-compensar.png',
			text: 'Estamos muy felices de que compañías como ustedes hagan parte de nuestros aliados estratégicos, un buen servicio a nuestros colaboradores es lo que los caracteriza.',
		},
		{
			img: '/assets/logo-capilla-fe.png',
			text: 'El servicio por parte de los aliados conductores es bastante satisfactorio. A los usuarios de Capillas de la Fé les gusta el servicio.',
		},
		{
			img: '/assets/davivienda-logo.png',
			text: 'Como empresa proporciona buen servicio y el personal es altamente capacitado.',
		},
	];
	const blue = {
		100: '#DAECFF',
		200: '#b6daff',
		400: '#3399FF',
		500: '#007FFF',
		600: '#0072E5',
		900: '#003A75',
	};

	const grey = {
		50: '#f6f8fa',
		100: '#eaeef2',
		200: '#d0d7de',
		300: '#afb8c1',
		400: '#8c959f',
		500: '#6e7781',
		600: '#57606a',
		700: '#424a53',
		800: '#32383f',
		900: '#24292f',
	};

	const StyledTextarea = styled(TextareaAutosize)(
		({theme}) => `
	
		font-family: IBM Plex Sans, sans-serif;
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.5;
		padding: 12px;
		border-radius: 12px 12px 0 12px;
		color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
		background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
		border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
		box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
	 
		&:hover {
		  border-color: ${blue[400]};
		}
	 
		&:focus {
		  border-color: ${blue[400]};
		  box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
		}
	 
		// firefox
		&:focus-visible {
		  outline: 0;
		}
	 `
	);
	return (
		<>
			<div className='bg-primary py-16 flex items-center justify-center '>
				<h2>Si ya cuentas con nuestros Vales Digitales</h2>
				<Button>Inciar Sesión</Button>
			</div>
			<div className="grid grid-cols-2 gap-4 items-center justify-center bg-[url('/assets/bogota.png')] bg-cover aspect-auto bg-no-repeat brightness-75 ">
				<div className='flex justify-center'>
					<div className='w-2/3'>
						<h3 className='text-white text-4xl font-bold shadow-md p-4 bg-black bg-opacity-50'>
							Taxis Libres es la mejor opción para el transporte en taxi de tu personal.
						</h3>
						<p className='text-black text-4xl font-bold shadow-md p-4 bg-terciary bg-opacity-50'>
							Movilizamos a los colaboradores de tu empresa de forma fácil y segura. Gestiona el presupuesto por tu Centro de costo, descarga
							reportes, obtén asistencia 24/7 y mucho más.
						</p>
					</div>
				</div>

				<div className='w-full p-10'>
					<form className='flex flex-col gap-4  bg-terciary p-5 w-[450px] rounded-lg'>
						<h3 className='text-2xl font-bold mb-5'>Tenemos la solución para el transporte de tu empresa.</h3>
						<div className='flex flex-col gap-4'>
							<TextField label='Nombre' variant='filled' />
							<TextField label='Apellido' variant='filled' />
							<TextField label='Celular' variant='filled' type='number' />
							<TextField label='Nombre de la empresa' variant='filled' type='text' />
							<TextField label='Área dentro de la empresa' variant='filled' type='text' />
							<TextField label='Correo Empresarial' variant='filled' type='text' />
							<FormControl variant='standard' sx={{m: 1, minWidth: 120}}>
								<InputLabel id='demo-simple-select-standard-label'>Age</InputLabel>
								<Select
									labelId='demo-simple-select-standard-label'
									id='demo-simple-select-standard'
									value={age}
									onChange={handleChange}
									label='Cantidad de empleados'>
									<MenuItem value=''>
										<em>Cantidad de empleados</em>
									</MenuItem>

									<MenuItem value={20}>1-10</MenuItem>
									<MenuItem value={30}>11-100</MenuItem>
									<MenuItem value={30}>101-500</MenuItem>
									<MenuItem value={30}>Mas de 500</MenuItem>
								</Select>
							</FormControl>
							<StyledTextarea maxRows={4} aria-label='maximum height' className='w-full' placeholder='Cuéntanos qué te gustaria saber.' />
							<TextField label='Digite código de seguridad' variant='filled' type='text' />
						</div>
						<div className='flex items-center '>
							<Checkbox checked={checkedValues.terms} onChange={handleChangeCheck('terms')} inputProps={{'aria-label': 'controlled'}} />

							<p className='hover:text-blue-500 hover:cursor-pointer'>Acepto términos y condiciones</p>
						</div>
						<div className='flex items-center '>
							<Checkbox
								checked={checkedValues.dataPolicy}
								onChange={handleChangeCheck('dataPolicy')}
								inputProps={{'aria-label': 'controlled'}}
							/>

							<p className='hover:text-blue-500 hover:cursor-pointer'>Acepto política de tratamiento de datos</p>
						</div>
						<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Enviar</Button>
					</form>
				</div>
			</div>
			<section className='bg-primary py-16 flex  items-center justify-center'>
				<p className='text-black text-2xl font-bold text-center w-2/5'>
					Registra tu empresa en Vales Digitales y empieza a viajar ahora con la modalidad prepago.
				</p>
				<Button sx={{color: 'black', backgroundColor: 'white', paddingX: 5, borderRadius: 2}}>Registrarse</Button>
			</section>
			<section className='my-10 flex  flex-wrap  justify-center'>
				<div className='w-4/5 flex justify-between'>
					<Button sx={{color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Caracteristicas</Button>
					<Button sx={{color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Cobertura</Button>
					<Button sx={{color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Beneficios</Button>
					<Button sx={{color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Clientes Actuales</Button>
					<Button sx={{color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Comentarios</Button>
				</div>
				<Divider />
			</section>
			<section className='bg-quaternary w-full flex justify-evenly'>
				<div className='flex  items-center justify-center w-full bg-quaternary py-10 mt-12'>
					<div className='flex flex-col items-center gap-10'>
						<img src='/assets/icono-ciudades-empresas.png' alt='' className='w-56' />
						<p className='text-secondary text-4xl font-bold w-1/3'>
							Taxis Libres presta el servicio de transporte para empresas en las principales ciudades de Colombia.
						</p>
					</div>
					<img src='/assets/mapa.png' alt='' className='w-[650px]' />
				</div>
			</section>
			<section className='bg-[#1b1f3b] py-16 flex  items-center justify-center'>
				<p className='text-white text-2xl font-bold text-center w-2/5'>Transporta tu personal en taxi empresarial</p>
				<Button
					sx={{
						color: 'black',
						backgroundColor: '#f1fb42',
						paddingX: 5,

						borderRadius: 2,
						'&:hover': {
							background: 'white',
						},
					}}>
					Mas información
				</Button>
			</section>
			<section className='flex justify-center gap-10 my-16'>
				{recomendaciones.map((recomendacion) => (
					<Card key={recomendacion.text} sx={{maxWidth: 345, boxShadow: '0 1px 5px 0 gray'}}>
						<CardActionArea>
							<CardMedia component='img' height='140' image={recomendacion.img} alt='green iguana' />
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'></Typography>
								<Typography variant='body2' color='text.secondary'>
									{recomendacion.text}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</section>
			<section className='bg-primary py-16 flex  items-center justify-center'>
				<p className='text-black text-2xl font-bold text-center w-2/5'>Servicio de transporte empresarial</p>
				<Button
					sx={{
						color: 'white',
						backgroundColor: '#1b1f3b',
						paddingX: 5,
						borderRadius: 2,
						'&:hover': {
							color: 'black',
							background: 'white',
						},
					}}>
					Contactar con ventas
				</Button>
			</section>
			<Footer />
		</>
	);
}
