import {Outlet, Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function DashboardLayout() {
	const {logout} = useAuth();

	return (
		<div>
			<aside>
				<h2>Mi Empresa</h2>
				<nav>
					<Link to='/dashboard/services'>Servicios</Link>
					<Link to='/dashboard/availabilities'>Disponibilidades</Link>
					<button onClick={logout}>Cerrar sesión</button>
				</nav>
			</aside>

			<div>
				<Outlet />
			</div>
		</div>
	);
}

export default DashboardLayout;