import {Divider} from '@mui/material';

export function Inicio() {
	return (
		<>
			<main className='bg-gradient-to-b from-40% from-secondary to-neutral-950 flex items-center gap-10 px-10 pt-32 h-full pb-52 justify-between'>
				<div className='flex flex-col gap-5  items-center '>
					<div className='flex items-start flex-col w-4/6 justify-start gap-5'>
						<p className='text-primary text-4xl '>Taxis Libres, transporte seguro en tu ciudad.</p>
						<p className='text-white text-2xl'>Movemos los sueños de los colombianos.</p>
						<button
							className='drop-shadow-md
							hover:shadow-red-500 '>
							<img src='/src/assets/logo-whatsapp.png' alt='' className='w-24 '></img>
						</button>
					</div>
				</div>
				<div className='flex justify-end'>
					<img src='/src/assets/viajera.png' alt='' className='aspect-auto bg-cover opacity-80' />
				</div>
			</main>
			<Divider />
			<section className='bg-gradient-to-b from-40% from-neutral-950 to-secondary text-white'>
				<div>
					<h3 className='text-white'>Transporte para tu empresa</h3>
					<p>Moviliza a los colaboradores de tu compañía mientras llevas un control de todos los gastos.</p>
				</div>
			</section>
		</>
	);
}
