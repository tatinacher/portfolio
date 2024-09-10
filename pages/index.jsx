import React, { useReducer } from "react";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2 as Grid,
  ThemeProvider,
  Typography,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";

import { Form } from "./form";

import { HeadMenu } from "../components/menu";
import { theme } from "../utils/theme";

export default function Home() {
  const [isDarkTheme, toggleTheme] = useReducer((is) => !is, false);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <HeadMenu
        pages={["На главную", "Проекты", "Связаться со мной"]}
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
            sx={{ minHeight: "90vh" }}
          >
            <Grid size={8}>
              <Grid spacing={2} direction="row">
                <Grid size={6}>
                  <Typography
                    variant="h1"
                    sx={{ typography: { sm: "h1", xs: "h3" } }}
                    style={{ paddingBottom: "20px" }}
                  >
                    Татьяна
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography
                    variant="h1"
                    sx={{ typography: { sm: "h1", xs: "h3" } }}
                    style={{ paddingBottom: "20px" }}
                  >
                    Frontend разработчик
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                variant="h1"
                sx={{ typography: { sm: "h5", xs: "subtitle1" } }}
              >
                Реализовываю web-проекты на React.JS
              </Typography>
            </Grid>
            <Grid size={4}>
              <Avatar src="./avatar.png" sx={{ width: 300, height: 300 }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box height="100vh" display="flex" flexDirection="column">
        <Container>
          <Typography variant="h1" sx={{ typography: { sm: "h2", xs: "h4" } }}>
            Проекты
          </Typography>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid size={8}>Магазин</Grid>
            <Grid size={4}>скоро будет...</Grid>
          </Grid>
          <Button variant="contained">See more projects</Button>
        </Container>
      </Box>
      <Box height="100vh" display="flex" flexDirection="column">
        <Container>
          <Typography variant="h3">Связаться со мной</Typography>
          <Form />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
