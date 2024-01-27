import React from 'react';
import './signInFrm.css'
import { FaUser , FaLock} from "react-icons/fa";

export const LogingForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Sign In</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required />
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type='text' placeholder='Password' required />
                <FaLock className='icon' />
            </div>

            <div className='remember-forgot'>
                <label><input type='checkbox' />Remember me</label>
                <a href='#'>Forgot Password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register-link'>
                <p>Don't have an account?<a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  );
}



