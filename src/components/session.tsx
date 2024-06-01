import { Box, Typography } from "@mui/material";

export default function Session() {
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
      <Box component="form">
        <Typography variant="h2">Sesión</Typography>
      </Box>
    </Box>
  );
}
