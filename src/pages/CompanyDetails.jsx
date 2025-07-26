import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CompanyDetails() {
	const { id } = useParams();
	const [company, setCompany] = useState(null);

	useEffect(() => {
		const companies = JSON.parse(localStorage.getItem('companies')) || [];
		const foundCompany = companies.find(c => c.id === parseInt(id));
		setCompany(foundCompany);
	}, [id]);

	if (!company) return <p>Empresa no encontrada</p>

	return (
		<div>
			<h1>{company.name}</h1>
			<p>{company.description}</p>
			<h2>Servicios:</h2>
			<ul>
				{company.services.map(service => (
					<li key={service.id}>
						<p>{service.name} - {service.price}€</p>
						<p>{service.description}</p>
						<Link to={`/empresas/${company.id}/reservar/${service.id}`}>Reservar</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CompanyDetails;