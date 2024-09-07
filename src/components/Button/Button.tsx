"use client"
import { ButtonHTMLAttributes, useId } from 'react';
import * as S from './styles';

type Button = {
    label?: string;
    name?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    label = '',
    name = '',
    ...rest
}: Button) => {
    const labelId = useId();

    return (
        <>
            <S.Button id={labelId} name={name} {...rest}>
                {label}
            </S.Button>
        </>
    )
}