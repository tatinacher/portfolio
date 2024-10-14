import React, { useReducer } from "react";

import {
  Avatar,
  Box,
  Switch,
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid2 as Grid,
  ThemeProvider,
  Typography,
  FormControlLabel,
  CardActionArea,
} from "@mui/material";

import Form from "./form";

import { HeadMenu } from "../components/menu";
import { theme } from "../utils/theme";

const menu = [
  {
    name: "На главную",
    id: "main",
  },
  {
    name: "Проекты",
    id: "projects",
  },
  {
    name: "Связаться со мной",
    id: "connect",
  },
];

export default function Home() {
  const [isDarkTheme, toggleTheme] = useReducer((is) => !is, false);

  const projects = [
    {
      image: "./shop.webp",
      imageDescription: "",
      description: "Furniture Shop",
      link: "https://shop-sigma-swart.vercel.app/",
    },
    {
      image: "./hangyl.webp",
      imageDescription: "",
      description: "Учим корейский!",
      link: "https://learn-korean-flax.vercel.app/",
    },
  ];

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <HeadMenu
        pages={menu}
        themeButton={
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={toggleTheme} />}
            label="сменить тему"
          />
        }
      />
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: "primary.background",
          color: "primary.text",
          p: 5,
        }}
        sm={{
          p: 10,
        }}
        id="main"
      >
        <Container>
          <Grid
            rowSpacing={{ xs: 1, sm: 2 }}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              minHeight: "90vh",
              display: "flex",
              flexDirection: { sm: "row", xs: "column-reverse" },
            }}
          >
            <Grid
              size={{ xs: 6, md: 8 }}
              sx={{ textAlign: { sm: "left", xs: "center" } }}
            >
              <Grid spacing={2} direction="row">
                <Grid size={6}>
                  <Typography
                    variant="h1"
                    sx={{ typography: { md: "h1", xs: "h3" } }}
                    style={{ paddingBottom: "20px" }}
                  >
                    Татьяна
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography
                    variant="h1"
                    sx={{ typography: { md: "h1", xs: "h3" } }}
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
            <Grid size={{ xs: 6, md: 4 }}>
              <Avatar
                src={isDarkTheme ? "./av_d.png" : "./avatar.png"}
                sx={{
                  width: { md: 300, xs: 200 },
                  height: { md: 300, xs: 200 },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        id="projects"
        sx={{ pt: 15 }}
      >
        <Container>
          <Typography
            variant="h1"
            sx={{ typography: { sm: "h2", xs: "h4" } }}
            style={{ paddingBottom: "40px" }}
          >
            Проекты
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {projects.map(
              ({ image, imageDescription, description, link }, key) => (
                <Grid size={{ xs: 12, sm: 6 }} id={key}>
                  <CardActionArea href={link}>
                    <Card variant="outlined">
                      <CardMedia
                        sx={{ height: 340 }}
                        image={image}
                        title={imageDescription}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              )
            )}
          </Grid>
          {/* <Button variant="contained">See more projects</Button> */}
        </Container>
      </Box>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        id="connect"
        sx={{ pt: 15 }}
      >
        <Container>
          <Form />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
