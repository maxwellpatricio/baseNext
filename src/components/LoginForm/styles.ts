import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.primary};
`;

export const Title = styled.h1`
    margin: 2rem;
    font-size: 2rem;
`;

export const Form = styled.form`
  background: ${theme.colors.secondary};
  padding: 2rem;
  border-radius: 0.6rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;