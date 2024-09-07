"use client"
import { InputHTMLAttributes, ReactNode, useId } from 'react';
import * as S from './styles';

type InputProps = {
    label?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
    label = '',
    name = '',
    type = 'text',
    startAdornment,
    endAdornment,
    ...rest
}: InputProps) => {
    const labelId = useId();

    return (
        <>
            <S.DivFlex>
                <div>
                    {label && <S.Label htmlFor={labelId}>{label}</S.Label>}
                </div>

                <S.Container>
                    {startAdornment && <S.StartAdornment>{startAdornment}</S.StartAdornment>}
                    <S.Input id={labelId} type={type} name={name} {...rest} />
                    {endAdornment && <S.EndAdornment>{endAdornment}</S.EndAdornment>}
                </S.Container>
            </S.DivFlex>
        </>
    )

}