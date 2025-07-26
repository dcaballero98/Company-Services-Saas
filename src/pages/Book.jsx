import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

function Book() {
	const { id, serviceId} = useParams();
	const { user } = useAuth();
	const navigate = useNavigate();

	const { register, handleSubmit} = useForm();

	const companies = JSON.parse(localStorage.getItem('empresas')) || [];
  	const company = companies.find(e => e.id === id);
  	const service = company?.services.find(s => s.id === servicioId);

	const disponibilities = JSON.parse(localStorage.getItem('disponibilidades')) || {};
	const days = Object.keys(disponibilities);

	const onSubmit = (data) => { 
		const fechaActual = new Date();
		const fecha = new Date(`${data.fecha}T${data.hora}`);
		if (fecha < fechaActual) {
			alert('La fecha y hora deben ser futuras');
			return;
		}
		const newReservation = {
			id: crypto.randomUUID(),
			companyId: id,
			serviceId: serviceId,
			userId: user.id,
			date: fecha.toISOString(),
		};
		const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
		localStorage.setItem('reservations', JSON.stringify([...reservations, newReservation]));
		navigate('/mis-reservas');
	};

	return (
		<div>
			<h1>Reservar {service?.name}</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Día</label>
				<input type="date" {...register('fecha')} required />
				<label>Hora</label>
				<input type="time" {...register('hora')} required />
				<button type="submit">Reservar</button>
			</form>
		</div>
	);
}

export default Book;