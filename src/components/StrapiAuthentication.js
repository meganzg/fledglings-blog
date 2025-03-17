import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Auth = ({ onLogin }) => {
    const [email, setEmail] = useState(''); // set initial empty email
    const [password, setPassword] = useState(''); // set initial empty password

    const handleLogin = async (e) => { // async function do rest of app does not freeze while processing log in
        e.preventDefault(); // prevent browser from refreshing page when form submitted
        try {
            // send POST request to Strapi authentication endpoint with user and pass, wait for response
            const response = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password
            });
            // if login success, save JWT to localStorage
            localStorage.setItem('strapiToken', response.data.jwt);
            onLogin(response.data.user); // pase user data to parent component
        } catch (error) {
            console.error('Login failed', error); 
        }
    };

    return (
        <div className="auth-container"> {/* create login section on frontend */}
            <form onSubmit={handleLogin}> {/* onSubmit event handler that triggers handleLogin when form submitted */}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder = "Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder = "Password"
                    required
                />
                <button type="submit">Login</button> {/* type submit triggers form */}
            </form>
        </div>
    );
};

export default Auth;