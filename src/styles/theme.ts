import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        primary: '#f4f7f7',
        secondary: '#aacfd0',
        thirdary: '#79a8a9',
        fouthary: '#1f4e5f',
        background: '#ffffff',
        text: '#333333',
        accent: '#eaeaea',
        button: {
            primary: '#008CBA',
            secondary: '#6995a4',
            success: '#04AA6D',
            error: '#f44336'
        }
    },
    fonts: {
        body: 'Arial, sans-serif',
        heading: 'Georgia, serif',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '32px',
    },
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
    },
};

export { theme };