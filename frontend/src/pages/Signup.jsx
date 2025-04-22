import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      setError(err.response?.data.message || 'Signup failed');
    }
  };

  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-900">
        <div className="font-semibold text-2xl">Signup</div>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              Sign Up
            </button>
            <Link to="/Login" className="text-gray-400 hover:text-gray-200 font-semibold">
              Already have an Account? Log in here!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;