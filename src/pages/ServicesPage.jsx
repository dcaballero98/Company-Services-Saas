import {set, useForm} from 'react-hook-form'
import { useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import { v4 as uuidv4 } from 'uuid';

function ServicesPage() {
	const {register, handleSubmit, reset } = useForm();
	const [services, setServices] = useState([]);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('services')) || [];
		setServices(saved);
	}, []);

	const onSubmit = (data) => { 
		const newService = { ...data, id: uuidv4() };
		const updated = [...services, newService];
		setServices(updated);
		localStorage.setItem('services', JSON.stringify(updated));
		reset();
	}

	const handleDelete = (id) => {
		const filtered = services.filter(s => s.id !== id)
		setServices(filtered);
		localStorage.setItem('services', JSON.stringify(filtered));
	};

	return (
		<div>
			<h1>Gestionar Servicios</h1>
			
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('name')} placeholder='Nombre del servicio' />
				<input {...register('description')} placeholder='Descripción' />
				<input {...register('price')} placeholder='Precio' type='number' />
				<input {...register('duration')} placeholder='Duración en minutos' type='number' />
				<button type='submit'>Agregar Servicio</button>
			</form>

			<div>
				{services.map(service => (
					<ServiceCard 
						key={service.id}
						service={service}
						onDelete={() => handleDelete(service.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default ServicesPage;