import { signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider  } from 'firebase/auth';
import { auth } from '../utils/firebase';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate('/');
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };
  const loginwithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("errorMessage->", errorMessage);
      });
  }

  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-gray-100">
      <div className="login-form bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <header className="text-2xl font-semibold text-center mb-6">Login</header>
        <form>
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
              placeholder="Enter your password"
              className="h-14 w-full px-4 text-lg border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>
          <a
            href="#"
            className="text-teal-700 hover:underline block text-right mb-4"
          >
            Forgot password?
          </a>
          <button
            type="button"
            onClick={handleLogin}
            className={`w-full bg-teal-700 text-white text-lg font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <button
          onClick={loginwithGoogle}
            type="button"
            className="w-full bg-teal-500 text-white text-lg font-medium py-2 px-4 rounded-lg mt-4 transition duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Sign In With Google
          </button>
        </form>
        <div className="signup text-center text-lg mt-4">
          <span>
            Don't have an account?{' '}
            <Link to="/register" className="text-teal-700 hover:underline">
              Signup
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
