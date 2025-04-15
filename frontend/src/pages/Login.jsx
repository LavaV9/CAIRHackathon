import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.endsWith('@uncc.edu')) {
      navigate('/home');
    } else {
      setError('Only UNCC emails allowed!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-full max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-white font-[Inter] mb-6 tracking-wide">
          Login to SYN
        </h1>

        <input
          type="email"
          placeholder="Enter UNCC Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 text-black rounded outline-none"
          required
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white font-semibold transition"
        >
          Log In
        </button>
      </motion.form>
    </div>
  );
};

export default Login;

