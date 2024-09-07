"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

import * as S from './styles';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Password, User } from 'phosphor-react';

type LoginFormProps = {
    title?: string;
}

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export const LoginForm = ({ title = '' }: LoginFormProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                router.push('/DashBoard');
            } else {
                // setError('Email ou senha incorretos. Por favor, tente novamente.');
                alert("Email ou senha incorretos. Por favor, tente novamente.");
            }
        } catch (error) {
            // alert('Erro ao tentar fazer login. Por favor, tente novamente.');
            alert("Erro ao tentar fazer login. Por favor, tente novamente.");
        }
    };


    return (
        <S.LoginContainer>
            <S.Form onSubmit={handleSubmit}>
                <S.Title><b>{title}</b></S.Title>
                <Input
                    type="email"
                    label="Usuário"
                    placeholder="Digite seu usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    startAdornment={<User />}
                    required
                />
                <Input
                    type="password"
                    label="Senha"
                    placeholder="Digite a senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    startAdornment={<Password />}
                    required
                />
                <Button type="submit" label='Login' />
            </S.Form>
        </S.LoginContainer>
    );
};