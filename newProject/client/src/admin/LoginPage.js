// admin/LoginPage.js
import './admin.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const response = await fetch('/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      navigate('/admin/dashboard');
    } else {
      alert(data.message);
    }
  };
  

  return (
    <div className='login-page'>
      <h2 className='login-heading'>Admin Login</h2>
      <div className='admin-login'>
      <form onSubmit={handleLogin}>
        <div className='fields'>
          <label>Username</label>
          <input
            type="text"
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='fields'>
          <label>Password</label>
          <input
          placeholder='Enter Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"className='login-button'>Login</button>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
