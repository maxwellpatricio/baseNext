"use client";

import React from 'react';
import { useRouter } from 'next/navigation'
import { Layout, Menu, theme, MenuProps } from 'antd';
import { HomeOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const rotas: MenuProps['items'] = [
    { key: '/', label: 'Dashboard', icon: <HomeOutlined /> },
    { key: '/Users', label: 'Lista de usuários', icon: <UserOutlined /> },
    { key: '/Users/Create', label: 'Novo usuário', icon: <UserAddOutlined /> },
];

interface SideMenuProps {
    children: React.ReactNode; // Tipagem para o componente children
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const router = useRouter();

    const handleMenuClick = (key: string) => {
        switch (key) {
            case '/':
                router.push('/DashBoard');
                break;
            // case '/Users':
            //     router.push('/Users');
            //     break;
            // case 'Users/Create':
            //     router.push(key);
            //     break;
            default:
                router.push(key);
        }
    };

    return (
        <Layout style={styles.sideBar}>
            <Header>
                <div className="demo-logo" />
            </Header>
            <Layout style={{ flex: 1 }}>
                <Sider style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['/DashBoard']}
                        items={rotas}
                        onClick={({ key }) => handleMenuClick(key)}
                    />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

const styles = {
    sideBar: {
        height: "100vh",
        overflow: "hidden"
    }
};

export default SideMenu;