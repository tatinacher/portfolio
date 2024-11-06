import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "secondary.contrastText", padding: "20px 0 40px" }}
    >
      <Container>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2 }}
          direction="row"
          justifyContent="center"
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column-reverse" },
          }}
        >
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ textAlign: { sm: "left", xs: "center" } }}
          >
            <Typography
              variant="h1"
              sx={{
                typography: { md: "h5", xs: "h6" },
                padding: "20px 0 10px",
                color: "secondary.main",
              }}
            >
              Connect
            </Typography>
            <Typography
              sx={{
                color: "secondary.light",
              }}
            >
              tatinacher@gmail.com
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>13</Grid>
        </Grid>
      </Container>
    </Box>
  );
};
