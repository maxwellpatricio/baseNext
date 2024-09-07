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
    date = 2,
    imgUrl = ''
}: CardType) => {
    return (
        <S.CardWrapper>
            <S.CardImage background={imgUrl} />
            <S.CardTextWrapper>
                <S.CardTextDate>{date} days ago</S.CardTextDate>
                <S.CardTextTitle>{title}</S.CardTextTitle>
                <S.CardTextBody>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                    temporibus omnis illum maxime quod deserunt eligendi dolor
                </S.CardTextBody>
            </S.CardTextWrapper>
            <S.CardStatWrapper>
                {/* <CardStats>
              <div>
                1<sup>m</sup>
              </div>
              <div>read</div>
            </CardStats> */}
                <S.CardStats>
                    <S.LinkText href="#">website</S.LinkText>
                </S.CardStats>
                <S.CardStats>
                    <S.LinkText href="#">github</S.LinkText>
                </S.CardStats>
            </S.CardStatWrapper>
        </S.CardWrapper>
    );
};