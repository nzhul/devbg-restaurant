import { Route, Routes } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import NavBar from "./nav/NavBar";
import RecipesPage from "../pages/RecipesPage";
import { initializeTheme } from "./Theme";

function App() {
  const theme = initializeTheme();

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container data-testid="page-container" sx={{ marginTop: 5 }}>
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
