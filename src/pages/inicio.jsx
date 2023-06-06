import {useState} from 'react';
import {Button, Pagination, Stack} from '@mui/material';
import {RecipeReviewCard} from '../components/CardBeneficios';
import DownloadIcon from '@mui/icons-material/Download';
import {Footer} from '../layout/Footer';

function chunk(arr, size) {
	return Array.from({length: Math.ceil(arr.length / size)}, (_, index) => {
		const start = index * size;
		const end = start + size;
		return arr.slice(start, end);
	});
}

const groups = chunk(
	[
		'/src/assets/celular-comparte-informacion.png',
		'/src/assets/celular-revisa-historia.png',
		'/src/assets/celular-elige-taxi.png',
		'/src/assets/tarifas-controladas.png',
		'/src/assets/personaliza-tu-viaje.png',
		'/src/assets/contigo-en-los-viajes.png',
		'/src/assets/escoge-metodo-de-pago.png',
		'/src/assets/tu-seguridad-es-primero.png',
	],
	3
);

const infoCards = [
	'Comparte información del viaje',
	'Revisa el historial de viajes',
	'Elige entre distintos tipos de taxi',
	'Cuenta con tarifas controladas',
	'Personaliza tu viaje',
	'Contigo en los viajes',
	'Escoge un método de pago',
	'Tu seguridad es primero',
];
const textoCards = [
	'Comparte tu recorrido en tiempo real con las personas que tú quieras.',
	'Cuenta con un historial de todos los viajes que realices. Además, encuentras información detallada de cada recorrido.',
	'Dependiendo de la ciudad donde estés, puedes acceder a estos tipos de servicio: Normal, premium, de lujo, equidad de género e Icontec.',
	'Puedes ver un valor mínimo y máximo de la carrera que se establece según el tiempo y la distancia de tu viaje.',
	'Viaja con tu mascota o con conductores certificados, pide un taxi con baúl grande, cargador para cel y más.',
	'Nuestro Centro de Ayuda está para apoyarte en todos tus viajes 24/7.',
	'Paga tus viajes con efectivo, tarjetas Débito o Crédito, códigos QR o Vales Digitales.',
	'Revisamos los documentos de los aliados conductores y verificamos sus antecedentes judiciales.',
];

export function Inicio() {
	const [currentPage, setCurrentPage] = useState(0);
	const currentGroup = groups[currentPage];

	return (
		<>
			<header className='bg-gradient-to-b from-40% from-secondary to-neutral-950 flex items-center gap-10 px-10 pt-32 h-full pb-52 justify-between z-0'>
				<div className='flex flex-col gap-5 items-center'>
					<div className='flex items-start flex-col w-4/6 justify-start gap-5'>
						<p className='text-primary text-4xl'>Taxis Libres, transporte seguro en tu ciudad.</p>
						<p className='text-white text-2xl'>Movemos los sueños de los colombianos.</p>

						<button className='rounded-full hover:scale-105'>
							<img src='/src/assets/logo-whatsapp.png' alt='' className='w-24' />
						</button>
					</div>
				</div>
				<div className='border-[30px] border-primary absolute top-16 right-10 rounded-l-full'>
					<div className='flex  justify-center rounded-md gap-10 w-full'>
						<img src='src/assets/celular-en-app.png' alt='' className='aspect-auto bg-cover opacity-80 w-52' />
						<img src='/src/assets/viajera.png' alt='' className='aspect-auto bg-cover opacity-80 rounded-md w-fit' />
					</div>
				</div>
			</header>

			<section className='my-28'>
				<h2 className='text-secondary text-4xl font-bold text-center py-5'>Beneficios</h2>
				<div className='flex justify-evenly flex-wrap gap-10'>
					{currentGroup.map((imagen, index) => (
						<RecipeReviewCard
							key={index}
							imagen={imagen}
							info={infoCards[currentPage * 3 + index]}
							texto={textoCards[currentPage * 3 + index]}
						/>
					))}
				</div>
				<div className='flex justify-center mt-10'>
					<Stack>
						<Pagination count={groups.length} page={currentPage + 1} onChange={(event, page) => setCurrentPage(page - 1)} />
					</Stack>
				</div>
			</section>
			<div className='flex justify-center gap-10 w-full bg-primary py-10 mt-12'>
				<div className='flex  flex-row items-center justify-between gap-10'>
					<p className='text-secondary text-4xl font-bold'>Viaja seguro en cada rincón de tu ciudad</p>
					<Button variant='outlined' sx={{borderRadius: '50px', width: 'auto', height: '50px', backgroundColor: '#ffffff', color: '#181818'}}>
						<DownloadIcon /> Descárgala ahora
					</Button>
				</div>
			</div>
			<section className='flex flex-col items-center justify-center gap-10 w-full bg-terciary py-10 mt-12'>
				<p className='text-secondary text-4xl font-bold'>¿Qué es la app de taxis libres?</p>
				<p className=' text-2xl'>Te explicamos como funciona la app de taxis libres</p>
				<img src='https://www.taxislibres.com.co/public/imagesNew/landing-viajeros/animacion-landing-viajero.gif' alt='' />
			</section>
			<section className='bg-quaternary w-full'>
				<h2 className='text-secondary font-bold text-4xl text-center mt-5'>Cobertura Taxis Libres App Viajeros</h2>
				<div className='flex  items-center justify-center gap-10 w-full bg-quaternary py-10 mt-12'>
					<p className='text-secondary text-4xl font-bold w-1/3'>
						Cuenta con Taxis Libres en las principales ciudades del país para transportarte de forma segura.
					</p>
					<img src='/src/assets/mapa.png' alt='' className='w-96' />
				</div>
			</section>
			<section className='flex justify-center gap-10 w-full bg-primary py-10 '>
				<div className='flex  flex-col items-center justify-between gap-10'>
					<p className='text-secondary text-4xl font-bold'>¡En Taxis Libres transportamos los sueños de millones de colombianos!</p>
					<Button variant='outlined' sx={{borderRadius: '50px', width: 'auto', height: '50px', backgroundColor: '#ffffff', color: '#181818'}}>
						<DownloadIcon /> ¡Descárgala ahora!
					</Button>
				</div>
			</section>
			<section className=' bg-quaternary pb-20'>
				<h3 className='text-center font-bold text-3xl py-6 '>Regulados por</h3>
				<div className='flex justify-evenly gap-10 '>
					<img src='/src/assets/logo-supertransporte.png' alt='' className='w-36 aspect-auto object-contain' />
					<img src='/src/assets/logo-superintendencia.png' alt='' className='w-36 aspect-auto object-contain' />
					<img src='/src/assets/logo-secretaria-movilidad.png' alt='' className='w-36 aspect-auto object-contain' />
					<img src='/src/assets/logo-mintransporte.png' alt='' className='w-36 aspect-auto object-contain' />
					<img src='/src/assets/logo-ansv.png' alt='' className='w-36 aspect-auto object-contain' />
				</div>
			</section>
			<Footer />
		</>
	);
}
