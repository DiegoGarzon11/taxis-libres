import {Link} from 'react-router-dom';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
	const fecha = new Date().getFullYear();
	return (
		<footer className='bg-secondary text-terciary  w-full  gap-10 '>
			<div className='grid grid-cols-2 p-10'>
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
								<img src='/assets/img-store-googleplay.png' alt='' className='w-40 cursor-pointer' />
								<img src='/assets/img-store-appgallery.png' alt='' className='w-40 cursor-pointer' />
							</div>
							<p className='mt-5 text-xl '>App Viajero</p>
							<div className='flex flex-row gap-3 flex-wrap'>
								<img src='/assets/img-store-googleplay.png' alt='' className='w-40 cursor-pointer' />
								<img src='/assets/img-store-appgallery.png' alt='' className='w-40 cursor-pointer' />
								<img src='/assets/img-store-appstore.png' alt='' className='w-40 cursor-pointer' />
							</div>
						</div>
					</div>
				</div>
				<section className=' w-full pb-20 flex items-center flex-col justify-center gap-5 border-l border-primary ml-10'>
					<div className='flex items-center gap-3 '>
						<img src='/assets/logo-mintransporte.png' alt='' className='w-32 aspect-auto object-contain' />
						<img src='/assets/footerImages/logo-secmovilidad.png' alt='' className='w-32 aspect-auto object-contain' />
					</div>
					<div className='flex items-center gap-3'>
						<img src='/assets/footerImages/logo-ansv.png' alt='' className='w-32 aspect-auto object-contain' />

						<img src='/assets/footerImages/logo-superindycom.png' alt='' className='w-32 aspect-auto object-contain' />
						<img src='/assets/footerImages/logo-supertransporte.png' alt='' className='w-32 aspect-auto object-contain' />
					</div>
				</section>
			</div>

			<section className='bg-[#3a3a3a] w-full grid grid-cols-2'>
				<div className='flex flex-row justify-between items-center p-10 gap-10'>
					<img src='/assets/logo-taxislibres.png' alt='' className='w-32 aspect-auto object-contain' />
					<Link href='#' className='hover:text-primary hover:underline'>
						Aviso legal página web
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Política de Tratamiento de Datos
					</Link>
					<Link href='#' className='hover:text-primary hover:underline'>
						Política de Tratamiento de Datos
					</Link>
				</div>
				<div className='flex flex-row justify-end items-center p-10 '>
					<div className='flex flex-row gap-10'>
						<FacebookSharpIcon className='cursor-pointer' />
						<LinkedInIcon className='cursor-pointer' />
						<TwitterIcon className='cursor-pointer' />
						<YouTubeIcon className='cursor-pointer' />

						<InstagramIcon className='cursor-pointer' />
					</div>
				</div>
			</section>
			<div className='bg-terciary w-full text-secondary'>
				<p className='text-center'>
					<span>{fecha}</span> Derechos.
				</p>
			</div>
		</footer>
	);
}
