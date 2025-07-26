import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object({
	email: yup.string().email('Email inválido').required('Requerido'),
	password: yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
}).required();

function Register() {
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema),});
	
	const onSubmit = (data) => {
		const users = JSON.parse(localStorage.getItem('users')) || [];
		localStorage.setItem('users', JSON.stringify([...users, data]));
		alert('Registro exitoso');
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('email')} placeholder='Email' />
			<p>{errors.email?.message}</p>
			
			<input {...register('password')} type='password' placeholder='Contraseña' />
			<p>{errors.password?.message}</p>

			<button type='submit'>Registrar</button>
			<p>¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link></p>
		</form>
	)
}

export default Register;