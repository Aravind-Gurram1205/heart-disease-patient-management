import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn, setUserRole }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'admin@example.com' && password === 'admin123') {
            setIsLoggedIn(true);
            setUserRole('admin');
            navigate('/admin');
        } else if (email === 'patient@example.com' && password === 'patient123') {
            setIsLoggedIn(true);
            setUserRole('patient');
            navigate('/');
        } else {
            setMessage('Incorrect email or password.');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-600">{message}</p>}
        </div>
    );
}

export default Login;
