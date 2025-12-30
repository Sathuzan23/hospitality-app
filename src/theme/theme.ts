import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#800040', // Sage Hotels Purple
        },
        background: {
            default: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: '__Inter_Fallback_6af60b, Inter, Arial, sans-serif', // Standard clean sans-serif
        h4: {
            fontWeight: 700,
            color: '#800040',
        },
    },
});