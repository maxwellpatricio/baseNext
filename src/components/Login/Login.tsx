"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button, Flex, Form, Input, Card, Col, Row, Typography, Alert } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

type LoginProps = {
    title: string;
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

function Login(props: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                setError('Email ou senha incorretos. Por favor, tente novamente.');
            }
        } catch (error) {
            alert('Erro ao tentar fazer login. Por favor, tente novamente.');
        }
    };

    return (
        <div style={styles.container}>
            <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
                <Col xs={62} sm={42} md={34} lg={24}>

                    {error && ( //CASO DE ERRO NO LOGIN, EXIBE ESTE ALERT
                        <Alert
                            message="Erro de Login"
                            description={error}
                            type="error"
                            showIcon
                            closable
                            onClose={() => setError(null)}
                            style={{ marginBottom: '20px' }}
                        />
                    )}

                    <Card>
                        <Flex gap="middle" align="center" vertical>
                            <Typography.Title level={3}>
                                {props.title}
                            </Typography.Title>
                            <Form
                                name="login"
                                initialValues={{ remember: true }}
                                style={{ maxWidth: 360 }}
                                onSubmitCapture={handleSubmit}
                            >
                                <Form.Item<FieldType>
                                    label="Usuário"
                                    name="username"
                                    rules={[{ required: true, message: "Por favor informe o usuário!" }]}
                                >
                                    <Input prefix={<UserOutlined />} placeholder="Usuário" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    label="Senha"
                                    name="password"
                                    rules={[{ required: true, message: 'Por favor insira a senha!' }]}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                                </Form.Item>

                                <Form.Item>
                                    <Button block type="primary" htmlType="submit">
                                        Entrar
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Flex>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    title: {
        textAlign: "center",
        marginBottom: "24px",
    },
};

export default Login;