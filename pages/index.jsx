import React, { useReducer } from "react";

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  FormControlLabel,
  Grid2 as Grid,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";

import Form from "../features/form";
import { theme } from "../utils/theme";

import { ConnectChip, HeadMenu, Footer } from "../ui";
import { connects, menu, projects } from "../app/data";

export default function Home() {
  const [isDarkTheme, toggleTheme] = useReducer((is) => !is, false);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <HeadMenu
        pages={menu}
        themeButton={
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={toggleTheme} />}
            label={
              <Avatar
                src={"./night.png"}
                sx={{
                  width: { xs: 32 },
                  height: { xs: 32 },
                }}
              />
            }
          />
        }
      />
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: "secondary.main",
          color: "primary.text",
        }}
        id="main"
      >
        <Container>
          <Grid
            rowSpacing={{ xs: 1, sm: 2 }}
            direction="row"
            justifyContent="center"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { sm: "row", xs: "column-reverse" },
              paddingTop: "170px",
            }}
          >
            <Grid
              size={{ xs: 6, md: 8 }}
              sx={{ textAlign: { sm: "left", xs: "center" } }}
            >
              <Typography
                variant="h1"
                sx={{
                  typography: { sm: "h2", xs: "h2" },
                  color: "secondary.light",
                }}
              >
                Hi! I'm Tatiana,
              </Typography>
              <Box>
                <Typography
                  variant="h1"
                  sx={{ typography: { md: "h1", xs: "h3" } }}
                >
                  Frontend
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    typography: { md: "h1", xs: "h3" },
                    padding: "0 0 20px 150px",
                  }}
                >
                  developer
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Avatar
                src={isDarkTheme ? "./av_d.webp" : "./avatar.webp"}
                sx={{
                  width: { md: 250, xs: 200 },
                  height: { md: 250, xs: 200 },
                }}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: { sm: "row", xs: "column" },
              mt: "30px",
            }}
          >
            {connects.map(({ label, link, icon }) => (
              <Box sx={{ padding: "0 15px 0 0" }}>
                <ConnectChip label={label} link={link} icon={icon} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        id="projects"
        sx={{
          bgcolor: "secondary.main",
          color: "primary.text",
          pt: 15,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {projects.map(
              ({ image, imageDescription, description, link }, key) => (
                <Grid size={{ xs: 12, sm: 6 }} key={key}>
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
        </Container>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        id="connect"
        sx={{
          bgcolor: "secondary.main",
          color: "primary.text",
          pt: 15,
          pb: 15,
        }}
      >
        <Container>
          <Form />
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
