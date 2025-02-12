import { useState } from 'react'
import './App.css'
import {useNavigate, useNavigation} from "react-router-dom"

function App() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate('/portfolio');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {!loggedIn ? (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={user.username}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded text-white font-bold">Login</button>
        </form>
      ) : (
        <h2 className="text-2xl font-bold">Hi, {user.username}! Your email is {user.email}</h2>
      )}
    </div>
  );
}

export default App