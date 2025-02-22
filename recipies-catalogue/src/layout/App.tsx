import { Route, Routes } from "react-router-dom";
import { Box, Container, ThemeProvider } from "@mui/material";
import NavBar from "./nav/NavBar";
import RecipesPage from "../pages/RecipesPage";
import { initializeTheme } from "./Theme";

function App() {
  const theme = initializeTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.dark,
        height: "100vh",
        width: "100vw",
      }}
    >
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container data-testid="page-container" sx={{ marginTop: 5 }}>
          <Routes>
            <Route path="/" element={<RecipesPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default App;
