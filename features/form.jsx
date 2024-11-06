import {
  Button,
  TextField,
  Box,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function Form() {
  const url =
    "https://gmail.us8.list-manage.com/subscribe/post?u=83fef41166c60da9abfe81aba&amp;id=d376d61bd5&amp;f_id=004816e1f0";
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
    <Grid
      rowSpacing={{ xs: 1, sm: 2 }}
      direction="row"
      alignItems="center"
      justifyContent="center"
      container
    >
      <Grid size={{ xs: 12, sm: 6 }}></Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(fields);
          }}
          sx={{
            borderRadius: 1,
            bgcolor: "secondary.contrastText",
            color: "secondary.main",
            p: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            style={{ paddingBottom: "40px", color: "secondary.contrastText" }}
          >
            Связаться со мной
          </Typography>
          <div>
            <TextField
              id="EMAIL"
              type="email"
              placeholder="your@email.com"
              value={fields.EMAIL}
              onChange={handleFieldChange}
              variant="outlined"
              color="primary"
              sx={{
                mb: 2,
                input: {
                  color: "secondary.main",
                  p: "20px 30px 20px 10px",
                  borderColor: "secondary.main",
                },
              }}
              fullWidth
            />
            <Button
              sx={{
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                width: "100%",
                p: "20px 30px",
              }}
              fullWidth
            >
              Связаться
            </Button>
          </div>
          {loading && "submitting"}
          {error && message}
          {success && message}
        </Box>
      </Grid>
    </Grid>
  );
}
