import { useState, useEffect } from 'react';

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function AvailabilityPage() {
	const [availability, setAvailability] = useState({});

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('availability')) || {};
		setAvailability(saved);
	}, []);

	const handleChange = (day, field, value) => {
		setAvailability(prev => ({
			...prev,
			[day]: {
				...prev[day],
				[field]: value,
			},
		}));
	};

	const handleSave = () => {
		localStorage.setItem('availability', JSON.stringify(availability));
		alert('Disponibilidad guardada');

	};

	return (
		<div>
			<h1>Disponibilidad Horaria</h1>
			<div>
				{dias.map(dia => (
					<div key={dia}>
						<h3>{dia}</h3>
						<input 
							type='time'
							value={availability[dia]?.inicio || ''}
							onChange={(e) => handleChange(dia,'inicio', e.target.value)}
						/>
						{'  - '}
						<input
							type='time'
							value={availability[dia]?.fin || ''}
							onChange={(e) => handleChange(dia, 'fin', e.target.value)}
						/>
					</div>
				))}
			</div>
			<button onClick={handleSave}>Guardar Disponibilidad</button>
		</div>
	);
}

export default AvailabilityPage;