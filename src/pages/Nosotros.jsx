import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState} from 'react';
import {Card} from '@mui/material';
import {Footer} from '../layout/footer/Footer';

const images = [
	{
		año: '1980',
		label: 'Taxis en Bogotá: una ventana de oportunidad',
		text: 'Hasta inicios de los ochenta, el taxismo en Colombia no tenía mucha regulación. Además, en el Aeropuerto El Dorado,los taxistas no respetaban el orden de llegada, lo que generaba desorden en el muelle. José Eduardo Hernández,un estudiante de ingeniería, nacido en la Uvita, Boyacá, identificó esta problemática como una gran oportunidad.',
		imgPath: '/assets/nosotros/Aeropuerto-Internacional-El-Dorado.png',
	},
	{
		año: '1982',
		label: '¡Nuevo gobierno, nueva regulación!',
		text: 'En el nuevo mandato de Belisario Betancur se introdujeron varias normas en el servicio público tipo taxi a nivel nacional. Además, se delegó el control de los taxis en El Dorado a la Asociación de Conductores Guías de Turismo, eligiendo como representantes a Uldarico Peña, Pedro Julio Páez, Jose Eduardo Hernández y otros más que trabajaron sin remuneración económica.',
		imgPath: '/assets/nosotros/Asociacion-de-Conductores-Guias-de-Turismo.png',
	},

	{
		año: '2000',
		label: 'Taxis libres de cara a las necesidades del nuevo milenio',
		text: 'Nació una nueva empresa del Grupo Taxis Libres, denominada “Cotech Comunicación, Tech y Transporte S.A.”. En adelante, Cotech pasó a administrar la operación de los radioteléfonos de la empresa y a liderar el desarrollo de nuevas tecnologías para facilitar la experiencia de usuarios, conductores y propietarios.',
		imgPath: '/assets/nosotros/Ingenieros-Cotech.png',
	},
	{
		año: '2021',
		label: 'Hackathon Taxis Libres',
		text: 'Se creó la Hackathon Taxis Libres, un evento gratuito y 100% digital que dio solución a una serie de retos reales sobre movilidad en el país y en el que participaron más de 540 personas de diferentes regiones de Colombia y del mundo. Al final, fueron entregados más de $25.000 USD en beneficios.',
		imgPath: '/assets/nosotros/Logo-hackathon.png',
	},
	{
		año: '2020',
		label: 'Taxis Libres me protege',
		text: 'Para mitigar el riesgo de contagio de Covid-19, desinfectamos más de 20.000 taxis con peróxido de hidrógeno y vapor de agua, instalamos más de 5.000 paneles protectores a taxis y regalamos más de un millón de tapabocas a los conductores que estuvieran vinculados a nuestra compañía o que contaran con Taxis Libres App Conductor.',
		imgPath: '/assets/nosotros/Panel-Protector-de-taxi.png',
	},
	{
		año: '2006',
		label: 'Los seguros, una nueva oportunidad',
		text: 'Para la década de los noventa las compañías de seguros no querían afiliar taxis de forma individual por el alto grado de robo y siniestralidad en el país.En ese contexto nació Innovadora de Seguros, empresa especializada en asesoría de seguros y que hoy en día comercializa pólizas de grandes aseguradoras como Allianz, Liberty, Mapfre, Sura, AXA Colpatria y Previsora. En 2006, la empresa se transformó en Vía Seguros Ltda.',
		imgPath: '/assets/nosotros/Via-Seguros.png',
	},
	{
		año: '2020',
		label: '¿Pedir taxi por WhatsApp? Ahora es posible',
		text: 'Ahora los usuarios pueden solicitar servicios de taxi a través de WhatsApp y ser asistidos por un chatbot que usa aprendizaje automático e inteligencia artificial. Está disponible en Bogotá, Cali, Medellín, Cúcuta, Bucaramanga y Manizales. Para pedir un taxi, solo necesita agregar en sus contactos el número 310 2111111.',
		imgPath: '/assets/nosotros/WhatsApp-para-pedir-taxi.png',
	},
];

export function Nosotros() {
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevStep) => prevStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevStep) => prevStep - 1);
	};

	// const handleStepChange = (step) => {
	// 	setActiveStep(step);
	// };

	return (
		<>
			<div>
				<img src='/assets/nosotros/sede-cucuta.png' alt='' className='w-full object-cover aspect-video ' />
			</div>
			<div className='flex flex-col items-center justify-center w-full'>
				<Box sx={{maxWidth: 400, flexGrow: 1, marginTop: '20px', height: '750px'}}>
					<Paper
						square
						elevation={0}
						sx={{
							display: 'flex',
							alignItems: 'center',
							height: 70,
							pl: 2,
						}}>
						<Typography variant='h5' sx={{textAlign: 'center', flexGrow: 1}}>
							{images[activeStep].año}
						</Typography>
					</Paper>
					<div className='flex flex-col items-center justify-center w-full '>
						<Card
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<img src={images[activeStep].imgPath} alt={images[activeStep].label} className='aspect-video object-contain' />

							<Typography variant='h5' align='center' sx={{marginY: '20px'}}>
								{images[activeStep].label}
							</Typography>
							<Typography align='center'>{images[activeStep].text}</Typography>
							<MobileStepper
								steps={maxSteps}
								position='static'
								activeStep={activeStep}
								nextButton={
									<Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
										Next
									</Button>
								}
								backButton={
									<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
										Back
									</Button>
								}
							/>
						</Card>
					</div>
				</Box>
			</div>
			<section className='w-full bg-secondary text-terciary flex justify-evenly gap-5 py-16'>
				<div className='flex flex-col items-center gap-3 w-3/5 text-center'>
					<img src='/assets/nosotros/ico-pic1.png' alt='' />
					<p className='font-extrabold text-3xl'>1.573.283</p>
					<p>Descargas de taxis libres app</p>
				</div>
				<div className='flex flex-col items-center gap-3 w-3/5 text-center'>
					<img src='/assets/nosotros/ico-pic2.png' alt='' />
					<p className='font-extrabold text-3xl'>100.000 +</p>
					<p>viajes diarios</p>
				</div>
				<div className='flex flex-col items-center gap-3 w-3/5 text-center'>
					<img src='/assets/nosotros/ico-pic3.png' alt='' />
					<p className='font-extrabold text-3xl'>500+</p>
					<p>Personas forman nuestro equipo de trabajo ¡El 66% son mujeres!</p>
				</div>
				<div className='flex flex-col items-center gap-3 w-3/5 text-center'>
					<img src='/assets/nosotros/ico-pic4.png' alt='' />
					<p className='font-extrabold text-3xl'>10+</p>
					<p>Cursos virtuales y presenciales para conductores</p>
				</div>
				<div className='flex flex-col items-center gap-3 w-3/5 text-center'>
					<img src='/assets/nosotros/ico-pic5.png' alt='' />
					<p className='font-extrabold text-3xl'>36</p>
					<p>Años en Colombia</p>
				</div>
				<div className='flex flex-col items-center gap-3 w-3/5 text-center'>
					<img src='/assets/nosotros/ico-pic6.png' alt='' />
					<p className='font-extrabold text-3xl'>6</p>
					<p>Años en Colombia</p>
				</div>
			</section>
			<div className='flex flex-col items-center justify-center gap-24 w-full px-52 '>
				<div className='flex flex-row-reverse justify-around items-center'>
					<div className='flex flex-col items-center gap-3 ml-20 text-left'>
						<h3 className='font-bold text-3xl mb-5'>Seguridad</h3>
						<p>Incorporamos tecnología para hacer cada viaje más seguro. Además, tomamos acciones para mitigar el contagio de Covid-19.</p>
						<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Conocer Mas</Button>
					</div>
					<div>
						<img src='/assets/nosotros/seguridad.png' alt='' />
					</div>
				</div>
				<div className='flex justify-around items-center'>
					<div className='flex flex-col items-center gap-3 ml-20 text-left'>
						<h3 className='font-bold text-3xl mb-5'>Medio ambiente</h3>
						<p>Tomamos medidas para reducir las emisiones de CO2 y contribuir a mejorar la calidad del aire en las ciudades.</p>
						<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Conocer Mas</Button>
					</div>
					<div>
						<img src='/assets/nosotros/medio-ambiente.png' alt='' />
					</div>
				</div>
				<div className='flex flex-row-reverse justify-around items-center'>
					<div className='flex flex-col items-center gap-3 ml-20 text-left'>
						<h3 className='font-bold text-3xl mb-5'>Equidad de género</h3>
						<p>
							Te apoyamos en cualquier eventualidad que se presente en tu viaje. Te escuchamos y actuamos frente a cualquier acto incorrecto.
						</p>
						<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Conocer Mas</Button>
					</div>
					<div>
						<img src='/assets/nosotros/equidad-genero.png' alt='' />
					</div>
				</div>
				<div className='flex justify-around items-center'>
					<div className='flex flex-col items-center gap-3 ml-20 text-left'>
						<h3 className='font-bold text-3xl mb-5'>Compromiso con conductores</h3>
						<p>Le apostamos a la formación profesional y el constante crecimiento de nuestros aliados conductores.</p>
						<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Conocer Mas</Button>
					</div>
					<div>
						<img src='/assets/nosotros/compromiso-conductores.png' alt='' />
					</div>
				</div>
				<div className='flex flex-row-reverse justify-around items-center mb-16'>
					<div className='flex flex-col items-center gap-3 ml-20 text-left'>
						<h3 className='font-bold text-3xl mb-5'>Cuenta con nosotros en distintas ciudades</h3>
						<p>Somos la mejor opción de viaje, disfruta de la App en las principales ciudades del país.</p>
						<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Conocer Mas</Button>
					</div>
					<div>
						<img src='/assets/nosotros/compromiso-ciudades.png' alt='' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
