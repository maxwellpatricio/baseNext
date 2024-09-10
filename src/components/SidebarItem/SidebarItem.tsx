import React, { ReactNode } from 'react'
import * as S from './styles'
import { List } from 'phosphor-react';

type SidebarItemType = {
    Text?: string;
    Icon: ReactNode;
};


const SidebarItem = ({ Icon = <List />, Text }: SidebarItemType) => {
    return (
        <S.Container>
            {Icon}
            {Text}
        </S.Container>
    )
}

export default SidebarItem