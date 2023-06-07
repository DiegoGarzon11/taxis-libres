import {Button, Checkbox} from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Footer} from '../layout/footer/Footer';

export function Viajeros() {
	const palabrasApp = [
		'Conoce las tarifas reglamentadas a nivel nacional.',
		'Paga con tarjeta, efectivo o Vales Digitales.',
		'Escoge taxi normal, premium o de lujo.',
		'Accede a la Línea Púrpura (Acompañamiento a mujeres).',
		'Comparte el recorrido.',
		'Conductor capacitado.',
		'Califica al conductor.',
		'Cuenta con centro de ayuda 24/7.',
		'Reserva viajes con tiempo.',
		'Cuenta con un historial detallado de viajes.',
		'Disfruta de descuentos en tus viajes.',
	];
	const palabrasWhatssapp = [
		'	Fácil e intuitivo para todos.',
		'	Cuenta con un taxi 24/7.',
		'Bajo consumo de datos o si el plan de datos incluye WhatsApp, tienes este canal ilimitado.',
		'Envía notas de voz y recibe respuesta de forma acertada.',
		'Reserva viajes con tiempo.',
		'Paga el viaje con efectivo o Vales Digitales.',
	];
	const label = {inputProps: {'aria-label': 'Checkbox demo'}};
	return (
		<>
			<div className=' w-full'>
				<img src='/assets/viajera.png' alt='' className='w-full object-cover aspect-video ' />
			</div>
			<main className='flex items-center justify-center flex-col'>
				<div className='w-5/6 flex flex-col gap-5 my-10'>
					<h3 className='text-7xl font-bold text-secondary'>Viajeros</h3>
					<p>
						Creemos en las nuevas ideas y en el trabajo conjunto para transformar la movilidad en las ciudades. En Taxis Libres le apostamos a
						la innovación y tecnología
					</p>
				</div>
				<section className='flex items-center justify-center col gap-10'>
					<div>
						<img src='/assets/viajeros/captura-viajeros.png' alt='' className='w-[500px]' />
					</div>
					<div>
						<h3 className='text-5xl font-bold text-secondary'>Taxis Libres App</h3>
						<h5 className='text-3xl font-normal text-secondary my-4'>Viaja con libertad y disfruta de rincón de la ciudad</h5>
						<div>
							{palabrasApp.map((el) => (
								<div key={el} className='flex items-center gap-2'>
									<Checkbox
										sx={{
											'&.Mui-checked': {
												color: '#a8be09',
											},
										}}
										{...label}
										disabled
										checked
									/>
									<p className=' text-secondary'>{el}</p>
								</div>
							))}
							<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Descargar App</Button>
						</div>
					</div>
				</section>
				<section className='flex items-center justify-center col gap-10 flex-row-reverse mt-28'>
					<div>
						<img src='/assets/viajeros/Captura-WhatsApp.png' alt='' className='w-[500px]' />
					</div>
					<div>
						<h3 className='text-5xl font-bold text-secondary'>WhatsApp para pedir un taxi</h3>
						<p className='text-secondary font-normal text-xl my-4'>#TaxisNoTeDejaEnVisto</p>
						<h5 className='text-3xl font-normal text-secondary mb-4'>
							Envía tu ubicación y en segundos tendrás la info del taxi que pasará por ti.
						</h5>
						<div>
							{palabrasWhatssapp.map((el) => (
								<div key={el} className='flex items-center gap-2'>
									<Checkbox
										sx={{
											'&.Mui-checked': {
												color: '#a8be09',
											},
										}}
										{...label}
										disabled
										checked
									/>
									<p className=' text-secondary'>{el}</p>
								</div>
							))}
							<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>
								Usar WhatsApp - Chat
							</Button>
						</div>
					</div>
				</section>
				<section className='flex items-center justify-center  gap-10 mt-28'>
					<div className='flex flex-col items-center w-80 gap-3'>
						<img src='/assets/viajeros/Taxis-Libres-taxis-seguros.png' alt='' />
						<h5 className='font-semibold text-xl'>Taxis y viajes seguros</h5>
						<p>Revisamos que los vehículos cuenten con los seguros extra / contractual y revisiones técnico mecánicas.</p>
					</div>
					<div className='flex flex-col items-center w-80 gap-3'>
						<img src='/assets/viajeros/Taxis-Libres-revision-conductores.png' alt='' />
						<h5 className='font-semibold text-xl'>Identidad de conductores</h5>
						<p>Revisamos que los vehículos cuenten con los seguros extra / contractual y revisiones técnico mecánicas.</p>
					</div>
					<div className='flex flex-col items-center w-80 gap-3'>
						<img src='/assets/viajeros/Taxis-Libres-centro-de-ayuda-seguridad.png' alt='' />
						<h5 className='font-semibold text-xl'>Estamos para ayudarte 24/7</h5>
						<p>Cuenta con nuestro centro de ayuda antes, durante y después de cada viaje.</p>
					</div>
					<div className='flex flex-col items-center w-80 gap-3'>
						<img src='/assets/viajeros/Taxis-Libres-oficinas.png' alt='' />
						<h5 className='font-semibold text-xl'>Oficinas para apoyarte</h5>
						<p>Visítanos en nuestras sedes a nivel nacional y recibe ayuda en lo que necesites.</p>
					</div>
				</section>
				<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Leer Mas</Button>
				<section className='flex flex-col items-center bg-[#f5f5f5] py-16 '>
					<div className='w-5/6 flex flex-col gap-3'>
						<h3 className='text-3xl font-bold text-secondary'>Preguntas frecuentes de viajeros</h3>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
								<Typography>Olvidé un objeto en el taxi ¿Qué hago?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography sx={{paddingX: '20px'}}></Typography>
								<b>¡Tranquilo (a)!</b> Si olvidaste un objeto en el taxi, y tienes la placa del vehículo que te prestó el servicio, por favor
								escríbenos lo mas pronto posible, diligenciando el siguiente Formulario de Ayuda Nuestro equipo de Servicio al Cliente ubicará
								el vehículo y a su conductor para realizar la consulta correspondiente con el fin de que puedas recuperar tu pertenencia. Si
								no cuentas con las placas del vehículo, te recomendamos ir al origen o destino del viaje y validar si en algún local cercano
								tienen cámaras disponibles, ya que por medio del video, podremos verificar la placa del taxi y ayudarte de una mejor manera.
								<b>¡Cuentas con nosotros!</b> 🚕 <b>Conoce más en www.taxislibres.com.co</b>
							</AccordionDetails>
						</Accordion>

						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
								<Typography>No estoy de acuerdo con el cobro, creo que me cobraron de más ¿Qué hago?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Si crees que hubo un sobrecosto el cual no es acorde con tu viaje, revisaremos el recorrido y de ser el caso te haremos la
									devolución del dinero. En Taxis Libres no contamos con tarifa dinámica. Queremos que recorras las ciudades pagando cifras
									justas por tu viaje. Si tienes algún comentario sobre las tarifas, escríbenos aquí: Formulario de Ayuda
									<b> !Te daremos respuesta lo más pronto posible!</b> 🚕 <b>Conoce más en www.taxislibres.com.co</b>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
								<Typography>¿Tienen tarifa dinámica?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									En Taxis Libres no contamos con tarifa dinámica. Queremos que recorras las ciudades pagando cifras justas por tu viaje. Si
									tienes algún comentario sobre las tarifas, escríbenos aquí: Formulario de Ayuda 🚕{' '}
									<b>Conoce más en www.taxislibres.com.co</b>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
					<Button sx={{marginTop: 5, color: 'black', backgroundColor: '#f1fb42', paddingX: 5, borderRadius: 2}}>Ver más preguntas</Button>
				</section>
			</main>
			<Footer />
		</>
	);
}
