import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.endsWith('@uncc.edu')) {
      navigate('/home');
    } else {
      alert('Only UNCC emails allowed!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Login to SYN</h1>
        <input
          type="email"
          placeholder="Enter UNCC Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 text-black rounded"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
