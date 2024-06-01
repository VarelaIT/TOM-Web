import { Box, Typography, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function Landing() {
  //center the content
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
      <Box
        sx={{
          marging: "auto",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ textAlign: "center" }}
          color="primary"
        >
          TOM
        </Typography>
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
        <Box>
          <Link to="/">home</Link>
          <Link to="/sesion">session</Link>
        </Box>
      </Box>
    </Box>
  );
}
