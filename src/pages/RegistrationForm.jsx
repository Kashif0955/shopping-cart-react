import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const signupHandler = async () => {
    setLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container flex items-center justify-center min-h-screen bg-gray-100">
      <div className="registration-form bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <header className="text-2xl font-semibold text-center mb-6">Signup</header>
        <form>
          <div className="mb-4">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter your username..."
              className="h-14 w-full px-4 text-lg border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="h-14 w-full px-4 text-lg border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>
          <div className="mb-6">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Create a password"
              className="h-14 w-full px-4 text-lg border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>
          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}
          <button
            type="button"
            onClick={signupHandler}
            className={`w-full bg-teal-700 text-white text-lg font-medium py-2 px-4 rounded-lg mt-6 transition duration-300 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
        <div className="text-center text-lg mt-4">
          <span>
            Already have an account?{' '}
            <Link to="/login" className="text-teal-700 hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
