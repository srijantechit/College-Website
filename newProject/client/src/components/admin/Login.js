import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
      <form className='admin-login-form'>
        <h1>Admin Login</h1>
        <div className='admin-login-container'>
            <div className='admin-login-field'>
                <label for="name">Username:</label>
                <input type="text" id="name" name="name" className='admin-input' placeholder='Enter Password' required/>   
            </div> 

            <div className='admin-login-field'>
                <label for="name">Password:</label>
                <input type="password" id="password" name="password" className='admin-input' placeholder='Enter Password' required/>  
            </div>

            <button type='submit' name='submit' className='login-submit'>Login</button>          
        </div>
      </form>
    </div>
  )
}

export default Login
