import React, { useState } from 'react'
import * as S from './styles'
import { List } from 'phosphor-react';
import { Sidebar } from '../Sidebar/Sidebar';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <S.Container>
            <List onClick={showSiderbar} />
            {sidebar && <Sidebar initialActive={sidebar} />}
        </S.Container>
    )
}

export default Header