import React, { useReducer } from "react";

import { createTheme } from "@mui/material/styles";
import { green, lime, purple } from "@mui/material/colors";

import { Box, ThemeProvider, Button } from "@mui/material";
import { HeadMenu } from "../components/menu";

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

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default function Home() {
  const [isDarkTheme, toggleTheme] = useReducer((is) => !is, false);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Box height="100vh" display="flex" flexDirection="column">
        <HeadMenu
          pages={["Products", "Pricing", "Blog"]}
          themeButton={
            <Button onClick={toggleTheme} variant="secondary">
              Сменить тему
            </Button>
          }
        />
      </Box>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        style={{ "background-color": "blue" }}
      ></Box>
    </ThemeProvider>
  );
}
