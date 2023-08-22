const FindPet = () => {
	return (
		<section className=' flex justify-evenly items-center relative'>
			<img
				src='https://cdn.pixabay.com/photo/2018/05/30/19/29/cat-3442258_1280.jpg'
				className='w-full lg:h-[500px] object-cover'
				alt='catHero'
			/>
			<div className='absolute w-full h-full bg-black opacity-50'></div>
			<div className='absolute'>
				<div className='flex flex-col gap-4 items-center'>
					<h3 className='text-white lg:text-4xl block'>
						Find a match for your pet!
					</h3>
					<p className='text-white text-lg'>
						El sitio web perfecto para encontrar el alma gemela de tu mascota
					</p>
					<button className='text-lg border px-3 py-2 rounded-xl bg-gradient-to-tl from-real to-noreal text-white hover:bg-real'>
						Buscar !
					</button>
				</div>
			</div>
		</section>
	);
};

export default FindPet;
