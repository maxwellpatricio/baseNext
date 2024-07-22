"use client";

import { useState } from 'react';

function Login(props: any) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log('Login:', login);
        console.log('Password:', password);
    };

    return (
        <>
            <h1>{props.projectName}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;