import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const users = JSON.parse(localStorage.getItem('users')) || [];
		const user = users.find(user => user.email === email && user.password === password);

		if (user) {
			login(user);
			navigate('/dashboard');
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' required />
		<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' required />
			{error && <p>{error}</p>}
			<button type='submit'>Iniciar sesión</button>
		</form>
	);
}

export default Login;