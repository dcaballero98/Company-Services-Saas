import { Link } from "react-router-dom";

function Home() {
	return (
		<section >
			<h1>Mi App</h1>
			<p>Reserva productos con un click</p>
			<Link to='/register'>Regístrate ahora</Link>
		</section>
	)
}

export default Home;