import { set } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';

function MyReservations() {
	const { user } = useAuth();
	const [reservations, setReservations] = useState([]);

	useEffect(() => {
		const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
		const userReservations = storedReservations.filter(reservation => reservation.userId === user.id);
		setReservations(userReservations);
	}, [user]);

	const cancelReservation = (id, date) => {
		const currentDate = new Date();
		const reservationDate = new Date(date);
		if ((reservationDate - currentDate) / (1000 * 60 * 60) < 24) {
			alert('No puedes cancelar con menos de 24h de antelación.');
			return;
		}
		const updatedReservations = reservations.filter(reservation => reservation.id !== id);
		setReservations(updatedReservations);
		localStorage.setItem('reservations', JSON.stringify(updatedReservations));
	}
	
	return (
		<div>
			<h1>Mis Reservas</h1>
			{reservations.length === 0 ? (
				<p>No tienes reservas.</p>
			) : (
				<ul>
					{reservations.map(reservation => (
						<li key={reservation.id}>
							<p>Servicio: {reservation.serviceName}</p>
							<p>Fecha: {new Date(reservation.date).toLocaleString()}</p>
							<button onClick={() => cancelReservation(reservation.id, reservation.date)}>Cancelar Reserva</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default MyReservations;