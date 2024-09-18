import { Button, TextField, Box, Typography } from "@mui/material";
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
    <div>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(fields);
        }}
        sx={{
          borderRadius: 1,
          bgcolor: "primary.main",
          p: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" style={{ paddingBottom: "40px" }}>
          Связаться со мной
        </Typography>
        <div>
          <TextField
            id="EMAIL"
            type="email"
            placeholder="your@email.com"
            value={fields.EMAIL}
            onChange={handleFieldChange}
            variant="standard"
            sx={{
              mb: 2,
            }}
            fullWidth
          />
          <Button
            sx={{
              bgcolor: "base.main",
              color: "base.text",
            }}
            fullWidth
          >
            Связаться
          </Button>
        </div>
      </Box>
      {loading && "submitting"}
      {error && message}
      {success && message}
    </div>
  );
}
