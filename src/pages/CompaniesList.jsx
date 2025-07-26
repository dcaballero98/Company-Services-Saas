import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function CompaniesList() {
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		const storedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
		setCompanies(storedCompanies);
	}, []);

	return (
		<div>
			<h1>Lista de Empresas</h1>
			<ul>
				{companies.map(company => (
					<li key={company.id}>
						<h2>{company.name}</h2>
						<Link to={`/empresas/${company.id}`}>Ver Detalles</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CompaniesList;