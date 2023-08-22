import pet1 from '../../assets/img/dog1.webp';

const Footer = () => {
	return (
		<>
			<footer
				className='flex justify-center w-full bg-primary-dark text-white relative'
				id='contact'>
				<div className='flex justify-between w-full lg:max-w-[1300px] py-4'>
					<article className='bg-white-light hover:shadow-md m-2 w-[96%] md:w-[350px] lg:w-[350px]'>
						<div className='text-center'>
							<span className='text-base'>Faqs about dog bredeer registration</span>
						</div>
						<div className='text-center p-3'>
							<div>
								<a className='text-[12px]'>Terminos y Condiciones</a>
							</div>
							<div>
								<a className='text-[12px]'>Politicas de Privacidad</a>
							</div>
						</div>
					</article>
					<article className='bg-white-light hover:shadow-md m-2 w-[96%] md:w-[350px] lg:w-[350px]'>
						<div className='text-center'>
							<span className='text-base'>Nosotros</span>
							<div className='text-center p-3'>
								<div>
									<a className='text-[12px]'>Blog</a>
								</div>
								<div>
									<a className='text-[12px]'>Trabaja con nosotros</a>
								</div>
							</div>
						</div>
					</article>
					<div className='flex justify-center gap-2 self-end'>
						<a>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-white hover:fill-secondary transition-all cursor-pointer'>
								<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
							</svg>
						</a>
						<a>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-white hover:fill-secondary transition-all cursor-pointer'>
								<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
							</svg>
						</a>
						<a>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-white hover:fill-secondary transition-all cursor-pointer'>
								<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
							</svg>
						</a>
						<a>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='27'
								height='27'
								viewBox='0 0 448 512'
								className='fill-white hover:fill-secondary transition-all cursor-pointer'>
								<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
							</svg>
						</a>
					</div>
					<img
						src={pet1}
						alt='pet'
						className='w-[320px] absolute -top-[78%] right-0'
					/>
				</div>
			</footer>
		</>
	);
};

export default Footer;
