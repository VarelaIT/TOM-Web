import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import FetchApi from "../scripts/fetchApi";
import { Link } from "react-router-dom";

export default function Session() {
  const inputProps = [
    {
      label: "Email",
      type: "email",
      name: "email",
      value: undefined,
      required: true,
    },
    {
      label: "Contraseña",
      type: "password",
      name: "password",
      value: undefined,
      required: true,
      inputProps: { pattern: "(\\w|\\d){8,32}" },
    },
  ];
  const [inputState, setInputState] = useState(inputProps);

  const inputChange = (input: HTMLInputElement) => {
    if (!input.checkValidity()) {
      setInputState(
        inputState.map((element) => {
          if (element.name === input.name) {
            element.error = true;
            element.helperText = "Inválido.";
          }
          return element;
        }),
      );
      return false;
    } else {
      setInputState(
        inputState.map((element) => {
          if (element.name === input.name) {
            element.error = false;
            element.helperText = undefined;
          }
          return element;
        }),
      );
    }
    return true;
  };

  const submitForm = (ev: React.SyntheticEvent | undefined) => {
    if (ev !== undefined) {
      ev.preventDefault();
      const body = {};
      let validCount = 0;

      inputProps.forEach((ele) => {
        if (inputChange(ev.target[ele.name])) {
          body[ele.name] = ev.target[ele.name].value;
          validCount++;
        }
      });

      if (inputState.length === validCount) {
        setInputState(inputProps);

        FetchApi("authentication", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then((data) => console.log(data));
      }
    } else console.log("not submitted");
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
      <Box style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography variant="h2">Sesión</Typography>
        <Box
          component="form"
          onSubmit={submitForm}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
          noValidate
        >
          {inputState.map((props, index) => (
            <TextField
              key={props.label + index}
              {...props}
              onBlur={(ev) => inputChange(ev.target)}
            />
          ))}

          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            sx={{ widht: "100%", fontWeight: "bold" }}
          >
            Iniciar
          </Button>

          <Link
            style={{ display: "block", textAlign: "center" }}
            color="secondary"
          >
            Olvidaste tu contraseña?
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
