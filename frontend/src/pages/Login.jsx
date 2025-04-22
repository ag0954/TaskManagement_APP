import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setUsername('');
      setPassword('');
      navigate('/');
    } catch (err) {
      setError(err.response?.data.message || 'Login failed');
    }
  };

  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-900">
        <div className="font-semibold text-2xl">Login</div>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <div className="w-full flex items-center justify-between">
            <button type="submit" className="bg-blue-400 text-xl font-semibold text-white px-3 py-2 rounded">
              Login
            </button>
            <Link to="/Signup" className="text-gray-400 hover:text-gray-200 font-semibold">
              Don't have an account? Sign up here!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;