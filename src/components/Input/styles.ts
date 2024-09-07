import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Input = styled.input`
    height: 1.6rem;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
`;

export const Label = styled.label`
    font-size: 0.8rem;
`;

export const Adornment = styled.span`
    color: ${theme.colors.fouthary};
`;

export const StartAdornment = styled(Adornment)`
    margin-right: 0.4rem;
`;

export const EndAdornment = styled(Adornment)`
    margin-left: 0.4 rem;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
    width: 70%;

    padding: 0.8rem 1rem;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.secondary};
    border-radius: 0.6rem;
    
    &:focus-within{
        border-color:  ${theme.colors.fouthary};

        ${Adornment}{
            color: ${theme.colors.fouthary};
        }
    }
`;

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`