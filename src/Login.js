import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const loginUser = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(userEmail, userPassword)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))

    }

    const signUpUser = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
            .then(auth => {
                history.push('/');
            })
            .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <Link>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                    className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={userEmail} onChange={event => setUserEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={userPassword} onChange={event => setUserPassword(event.target.value)} type="password" />
                    <button onClick={loginUser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in,you agree to Amazon's Terms and Conditions</p>
                <button onClick={signUpUser} className="login__registerButton">Create  your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;