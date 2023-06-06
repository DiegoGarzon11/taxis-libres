import {Link} from 'react-router-dom';

export function Footer() {
	return (
		<footer className='bg-secondary text-terciary  w-full p-10 gap-10 grid grid-cols-2'>
			<div className='  w-full grid grid-cols-2 '>
				<div className='flex flex-col gap-2'>
					<p className='text-xl font-bold py-5'>Servicios</p>
					<Link href='#' className='hover:text-primary hover:underline'>
						Viajeros
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Conductores
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Propietarios
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Empresas
					</Link>
				</div>

				<div className='flex flex-col gap-2'>
					<p className='text-xl font-bold py-5'>Contáctanos</p>
					<p className='w-3/6 py-5'>Sede principal Av. de las Américas #50-15 Centro Comercial Carrera (601) 420 2600 Bogotá D.C. Colombia</p>
					<Link href='#' className='hover:text-primary hover:underline'>
						Lineas de atención
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Ciudades
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Ayuda
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Correo de notificaciones y asuntos judiciales
					</Link>
				</div>
				<div className='flex flex-col gap-2'>
					<p className='text-xl font-bold py-5'>Conócenos</p>
					<Link href='#' className='hover:text-primary hover:underline'>
						Quiénes somos
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Blog
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Trabaja con nosotros
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Preguntas frecuentes
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Portal Colaborador
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Fondo de empleados
					</Link>
				</div>

				<div className='flex flex-col gap-2'>
					<p className='text-xl font-bold mt-5  py-5'>Otros Links</p>
					<Link href='#' className='hover:text-primary hover:underline'>
						Normatovidad
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Política anticorrupción, antisoborno y antifraude
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Transparencia y acceso a la información
					</Link>
					<div className='flex flex-col w-auto '>
						<p className='mt-5 text-xl '>App Conductor</p>
						<div className='flex flex-row gap-3'>
							<img src='/src/assets/img-store-googleplay.png' alt='' className='w-40 cursor-pointer' />
							<img src='/src/assets/img-store-appgallery.png' alt='' className='w-40 cursor-pointer' />
						</div>
						<p className='mt-5 text-xl '>App Viajero</p>
						<div className='flex flex-row gap-3 flex-wrap'>
							<img src='/src/assets/img-store-googleplay.png' alt='' className='w-40 cursor-pointer' />
							<img src='/src/assets/img-store-appgallery.png' alt='' className='w-40 cursor-pointer' />
							<img src='/src/assets/img-store-appstore.png' alt='' className='w-40 cursor-pointer' />
						</div>
					</div>
				</div>
			</div>
			<section className=' w-full pb-20 flex items-center flex-col justify-center gap-5 border-l border-primary ml-10'>
				<div className='flex items-center gap-3 '>
					<img src='/src/assets/logo-mintransporte.png' alt='' className='w-32 aspect-auto object-contain' />
					<img src='/src/assets/footerImages/logo-secmovilidad.png' alt='' className='w-32 aspect-auto object-contain' />
				</div>
				<div className='flex items-center gap-3'>
					<img src='/src/assets/footerImages/logo-ansv.png' alt='' className='w-32 aspect-auto object-contain' />

					<img src='/src/assets/footerImages/logo-superindycom.png' alt='' className='w-32 aspect-auto object-contain' />
					<img src='/src/assets/footerImages/logo-supertransporte.png' alt='' className='w-32 aspect-auto object-contain' />
				</div>
			</section>
		</footer>
	);
}
