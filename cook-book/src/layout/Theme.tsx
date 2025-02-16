import createTheme from "@mui/material/styles/createTheme";
const initializeTheme = () => {
  return createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => {
            return {
              boxShadow: "none",
              textTransform: "none",
            };
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
            color: "#333",
            boxShadow: "none",
            borderBottom: "1px solid #ccc",
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#1976d2",
      },
      custom: {
        searchBorder: "#ccc",
      },
    },
  });
};

export { initializeTheme };
