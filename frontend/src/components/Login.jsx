import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [context, setContext] = useState('');
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/verify_account?username=${username}&password=${password}`);
      const data = await res.json();
      console.log(data);
      if (data.status === true) {
        const userDetails = await fetch(`http://127.0.0.1:8000/api/v1/get_account?username=${username}&password=${password}`);
        const userInfo = await userDetails.json();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError(err.message || 'Server error');
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/create_account?username=${username}&password=${password}&name=${name}&context=${context}`);
      const data = await res.json();

      if (data.status === true) {
        const userDetails = await fetch(`http://127.0.0.1:8000/api/v1/get_account?username=${username}&password=${password}`);
        const userInfo = await userDetails.json();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        navigate('/');
      } else {
        setError(data.message || 'Account creation failed');
      }
    } catch (err) {
      setError(err.message || 'Server error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={isCreating ? handleCreateAccount : handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isCreating ? 'Create Account' : 'Login'}</h2>

        {error && <div className="text-red-400 mb-4 text-center">{error}</div>}

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isCreating && (
          <>
            <div className="mb-4">
              <label className="block mb-1">Character Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1">Context</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-4"
        >
          {isCreating ? 'Create Account' : 'Login'}
        </button>

        <p className="text-center text-sm">
          {isCreating ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            className="text-blue-400 hover:underline"
            onClick={() => setIsCreating(!isCreating)}
          >
            {isCreating ? 'Login here' : 'Create one'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;