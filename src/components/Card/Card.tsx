"use client"
import { ReactNode } from 'react';
import * as S from './styles';
import Link from 'next/link';

type CardType = {
    title?: string;
    date?: number;
    imgUrl?: string;
};

export const Card = ({
    title = '',
    imgUrl = ''
}: CardType) => {
    return (
        <S.CardWrapper>
            {/* <S.CardImage background={imgUrl} /> */}
            <S.CardTextWrapper>
                <S.CardTextTitle>{title}</S.CardTextTitle>
            </S.CardTextWrapper>
            <S.CardFooterWrapper>
                <S.CardStats>
                    <S.LinkText href="Users">Ver mais</S.LinkText>
                </S.CardStats>
                <S.CardStats>
                    <S.LinkText href="#">Adicionar</S.LinkText>
                </S.CardStats>
            </S.CardFooterWrapper>
        </S.CardWrapper>
    );
};