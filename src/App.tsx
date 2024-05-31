import Header from "./components/header/header";
import Landing from "./components/landing";
import { Box } from "@mui/material";

function App() {
  return (
    <Box component="main" sx={{ height: "calc(100vh - 80px)" }}>
      <Header />
      <Landing />
    </Box>
  );
}

export default App;
