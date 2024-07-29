"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Input from '../Input';
import Button from '../Button';
import './Login.css'

function Login(props: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        if (email == 'teste@teste' && password == 'teste') {
            router.push('/BusinessPartner', { scroll: false })
        }
    };

    return (
        <>
            <div className='LoginForm'>
                {/* <div>
                    <p>{props.projectName}</p>
                </div> */}
                <form onSubmit={handleSubmit} method="POST">
                    <div>
                        <label htmlFor="email">
                            Usuário
                        </label>

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email" />

                    </div>

                    <div>
                        <label htmlFor="password" >
                            Senha
                        </label>

                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password" />

                    </div>

                    <div>
                        <Button
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;