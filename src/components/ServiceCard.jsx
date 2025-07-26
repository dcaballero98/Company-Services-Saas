function ServiceCard({ service, onDelete }) {
  const {name, description, duration, price} = service;

  return (
	<div>
	  <h3>{service.name}</h3>
	  <p>{service.description}</p>
	  <p>Duración: {service.duration} minutos</p>
	  <p>Precio: {service.price}€</p>
	  <button
	  	onClick={() => {
			if (confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
				onDelete();
			}
		}}>Eliminar</button>
	</div>
  );
}

export default ServiceCard;
