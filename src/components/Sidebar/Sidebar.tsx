import React, { useState } from 'react'
import { Container, Content } from './styles'
import { List, User } from 'phosphor-react';

import SidebarItem from '../SidebarItem/SidebarItem';

type SidebarType = {
    initialActive?: boolean;
};

export const Sidebar = ({ initialActive = false }: SidebarType) => {
    const [active, setActive] = useState(initialActive);

    const closeSidebar = () => {
        setActive(false)
    }

    return (
        <Container sidebar={active}>
            <List onClick={closeSidebar} />
            <Content>
                <SidebarItem Icon={<User />} Text="Usuários" />
            </Content>
        </Container>
    )
}