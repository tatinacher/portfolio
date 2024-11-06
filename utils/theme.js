import { createTheme } from "@mui/material/styles";
import { common, green, lime, purple } from "@mui/material/colors";
import localFont from 'next/font/local'

const BDOGrotesk = localFont({
    name: 'BDOGrotesk',
    src: './BDOGrotesk-VF.woff2',
    weight: "normal",
})

const lightTheme = createTheme({
    typography: {
        fontFamily: BDOGrotesk.style.fontFamily
    },
    palette: {
        primary: {
            main: lime[500],
            background: '#f0f0f0',
            text: '#1C1C1C'
        },
        secondary: {
            main: '#ffffff',
            light: '#858585',
            dark: '#000',
            contrastText: '#000',
        },
        base: {
            main: '#1C1C1C',
            text: common.white
        },
        mode: "light",
    },
});

const darkTheme = createTheme({
    typography: {
        fontFamily: BDOGrotesk.style.fontFamily
    },
    palette: {
        primary: {
            main: purple[500],
            background: '#1C1C1C',
            text: '#f0f0f0'
        },
        secondary: {
            main: '#000000',
            light: '#858585',
            dark: '#fff',
            contrastText: '#fff',
        },
        base: {
            main: '#1C1C1C',
            text: common.white
        },
        mode: "dark",
    },
});

export const theme = {
    light: lightTheme,
    dark: darkTheme,
};