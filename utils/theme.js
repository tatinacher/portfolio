import { createTheme } from "@mui/material/styles";
import { common, green, lime, purple } from "@mui/material/colors";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: lime[500],
            background: '#f0f0f0',
            text: '#1C1C1C'
        },
        secondary: {
            main: green[500],
        },
        base: {
            main: '#1C1C1C',
            text: common.white
        },
        mode: "light",
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            background: '#1C1C1C',
            text: '#f0f0f0'
        },
        secondary: {
            main: green[500],
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