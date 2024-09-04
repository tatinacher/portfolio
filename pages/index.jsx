import React, { useReducer } from "react";

import { createTheme } from "@mui/material/styles";
import { green, lime, purple } from "@mui/material/colors";

import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  ThemeProvider,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Item,
} from "@mui/material";
import { HeadMenu } from "../components/menu";
import { Typing } from "../components/typing";

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
      <HeadMenu
        pages={["Products", "Pricing", "Blog"]}
        themeButton={
          <Button onClick={toggleTheme} variant="secondary">
            Сменить тему
          </Button>
        }
      />
      <Box height="100vh" display="flex" flexDirection="column">
        <Container>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
          >
            <Grid size={8}>
              <Typography variant="h1">Таня, Frontend разработчик</Typography>
            </Grid>
            <Grid size={4}>size=4</Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        style={{ "background-color": "blue" }}
      >
        <Typing />
      </Box>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        style={{ "background-color": "purple" }}
      >
        <Container>
          <Typography variant="h3">Связаться со мной</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
