"use client"
import React, { useState } from 'react';
import SideMenu from '@/components/SideMenu/SideMenu';

const Dashboard = () => <div>Dashboard Content</div>;
const Users = () => <div>Users Content</div>;

const App: React.FC = () => {
    const [activeContent, setActiveContent] = useState<React.ReactNode>(<Dashboard />);

    const handleMenuClick = (key: string) => {
        switch (key) {
            case '1':
                setActiveContent(<Dashboard />);
                break;
            case '2':
                setActiveContent(<Users />);
                break;
            default:
                setActiveContent(<Dashboard />);
        }
    };

    return (
        <SideMenu>
            <></>
        </SideMenu>
    );
};

export default App;
