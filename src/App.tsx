import Header from "./components/header";
import Landing from "./components/landing";
import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Session from "./components/session";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "sesion",
        element: <Session />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

function Main() {
  return (
    <Box component="main" sx={{ height: "calc(100vh - 80px)" }}>
      <Header />
      <Outlet />
    </Box>
  );
}

export default App;
