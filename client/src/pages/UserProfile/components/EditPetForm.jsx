import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as yup from 'yup';
import { useUpdatePetMutation } from '../../../store/api/apiSlice';

const schema = yup
	.object({
		full_name: yup.string().required('Por favor complete el campo requerido'),
		description: yup
			.string()
			.max(150)
			.required('Por favor complete el campo requerido'),
		breed: yup.string().required('Por favor complete el campo requerido'),
		gender: yup.string().required('Por favor seleccione un género'),
		age: yup
			.number()
			.positive()
			.typeError('Por favor ingrese un número válido')
			.required('Por favor complete el campo requerido'),
		peso: yup
			.number()
			.positive()
			.typeError('Por favor ingrese un número válido')
			.required('Por favor complete el campo requerido'),
		nationality: yup.string().required('Por favor complete el campo requerido'),
		chip: yup.boolean(),
		img: yup.mixed().test('required', 'Por favor suba una imagen', (value) => {
			return value[0]?.name && !undefined;
		}),
	})
	.required();

const EditPetForm = ({ id }) => {
	const [updatePet, { isSuccess, isError }] = useUpdatePetMutation();

	const MySwal = withReactContent(Swal);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const formSubmit = (data) => {
		let formData = new FormData();
		formData.append('full_name', data.full_name);
		formData.append('description', data.description);
		formData.append('breed', data.breed);
		formData.append('gender', data.gender);
		formData.append('age', data.age);
		formData.append('chip', data.chip);
		formData.append('peso', data.peso);
		formData.append('owner', 1);
		formData.append('nationality', data.nationality);
		formData.append('img', data.img[0]);

		updatePet(id, formData);

		reset();
	};

	useEffect(() => {
		if (isSuccess) {
			MySwal.fire({
				title: 'Registro exitoso!!',
				icon: 'success',
				scrollbarPadding: false,
			});
		} else if (isError) {
			MySwal.fire({
				title: 'Registro fallido!!',
				icon: 'error',
				scrollbarPadding: false,
			});
		}
	}, [isSuccess, isError]);

	return (
		<form
			onSubmit={handleSubmit(formSubmit)}
			className='flex flex-col items-center gap-5 max-w-[1300px] h-full'>
			<div className='w-full'>
				<input
					{...register('full_name')}
					placeholder='Nombre de la mascota'
					autoFocus
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.full_name?.message}
				</p>
			</div>
			<div className='w-full'>
				<textarea
					{...register('description')}
					placeholder='Escriba una breve descripción'
					className='p-3 outline-none w-full border-b border-primary-light bg-white resize-none'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.description?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('breed')}
					placeholder='Raza'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.breed?.message}</p>
			</div>
			<div className='w-full'>
				<select
					{...register('gender')}
					className='p-3 outline-none w-full border-b border-primary-light bg-white'>
					<option value='Macho'>Macho</option>
					<option value='Hembra'>Hembra</option>
				</select>
				<p className='text-tertiary text-center text-sm'>
					{errors.gender?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('age')}
					placeholder='Edad'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.age?.message}</p>
			</div>
			<div className='w-full'>
				<input
					{...register('peso')}
					placeholder='Peso'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.peso?.message}</p>
			</div>
			<div className='w-full'>
				<input
					{...register('nationality')}
					placeholder='Nacionalidad'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.nationality?.message}
				</p>
			</div>
			<div className='w-full flex items-center gap-4'>
				<label htmlFor='chip'>Chip</label>
				<input {...register('chip')} type='checkbox' id='chip' />
			</div>
			<div className='w-full'>
				<input
					{...register('img')}
					type='file'
					accept='.jpg, .jpeg, .png'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.img?.message}</p>
			</div>
			<button
				type='submit'
				className='bg-primary px-5 py-3 rounded hover:bg-primary-dark transition-all text-secondary-light shadow-md min-w-[250px] mt-4 outline-none'>
				Enviar
			</button>
		</form>
	);
};
export default EditPetForm;
