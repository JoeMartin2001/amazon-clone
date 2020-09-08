import React, { useState } from 'react'
import './Styles/Login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = event => {
        event.preventDefault()
    }

    const handleRegister = event => {
        event.preventDefault()
    }
    
    return (
        <div className='login'>
           <Link to='/'>
                <img 
                    className='login__logo' 
                    src='https://pngimg.com/uploads/amazon/amazon_PNG6.png'
                    alt='Logo' 
                    />
           </Link>
           <div className='login__container'>
               <h1>Sign in</h1>
               <form>
                   <h5>E-mail</h5>
                   <input value={email} type='email' onChange={e => setEmail(e.target.value)} />
                   <h5>Password</h5>
                   <input value={password} type='password' onChange={e => setPassword(e.target.value)} />
                   <button onClick={handleLogin} 
                    className='login__signInButton'>Sign In</button>
               </form>
               <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please, see our Privacy Notice,
               our Cookies Notice and our Interest-Based Ads Notice.</p>
               <button
                    onClick={handleRegister}  
                    type='submit' 
                    className='login__registerButton'>Create Your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login