import { Link } from "react-router-dom"

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/empresas">Empresas</Link>
				</li>
				<li>
					<Link to="/mis-reservas">Mis Reservas</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;