import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
      navigate('/admin/dashboard'); // Redirect to the Dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login-container'>
      <form className='admin-login-form' onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <div className='admin-login-container'>
          <div className='admin-login-field'>
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              className='admin-input'
              placeholder='Enter Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className='admin-login-field'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className='admin-input'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>} {/* Display error if credentials are wrong */}
          
          <button type='submit' name='submit' className='login-submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
