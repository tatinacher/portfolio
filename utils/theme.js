import { createTheme } from "@mui/material/styles";
import { green, lime, purple } from "@mui/material/colors";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: lime[500],
        },
        secondary: {
            main: green[500],
        },
        mode: "light",
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
        mode: "dark",
    },
});

export const theme = {
    light: lightTheme,
    dark: darkTheme,
};