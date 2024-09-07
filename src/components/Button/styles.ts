import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${theme.colors.button.secondary};
  color: 'white';
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  height: 3rem;
  width: 5rem;
`;

