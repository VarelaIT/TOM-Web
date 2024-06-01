import { Box, Typography, Button } from "@mui/material";
import InputELement from "./form/input";

export default function Session() {
  const inputProps: Array<InputElementProps> = [
    {
      label: "Email",
      type: "email",
      name: "email",
      value: undefined,
      required: true,
      pattern: undefined,
    },
    {
      label: "Contraseña",
      type: "password",
      name: "password",
      value: undefined,
      required: true,
      pattern: undefined,
    },
  ];

  const submitForm = (ev: React.SyntheticEvent | undefined) => {
    if (ev !== undefined) {
      ev.preventDefault();
      console.log(ev.target);
    }
    console.log("form submitted");
  };

  console.log("rendered");

  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box>
        <Typography variant="h2">Sesión</Typography>
        <form
          onSubmit={submitForm}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {inputProps.map((props, i) => (
            <InputELement key={props.label + i} {...props} />
          ))}

          <Button
            onClick={submitForm}
            variant="contained"
            size="large"
            color="secondary"
            sx={{ widht: "100%", fontWeight: "bold" }}
          >
            Iniciar
          </Button>
        </form>
      </Box>
    </Box>
  );
}
