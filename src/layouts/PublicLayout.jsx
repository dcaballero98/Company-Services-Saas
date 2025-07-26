import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function PublicLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default PublicLayout;