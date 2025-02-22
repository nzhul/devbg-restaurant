import { alpha } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
const initializeTheme = () => {
  return createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            let styles = {};

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "primary"
            ) {
              styles = {
                color: theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "secondary"
            ) {
              styles = {
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.light,
                },
              };
            }

            return {
              ...styles,
              borderRadius: 8, // todo use tokens
              boxShadow: "none",
              textTransform: "none",
              fontWeight: 400,
            };
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              boxShadow: "none",
              borderBottom: `1px solid ${theme.palette.secondary.main}`,
            };
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              borderRadius: 8, // todo use tokens
              color: theme.palette.text.primary,
              fontWeight: 400,
              backgroundColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
              },
              textTransform: "none",
              marginRight: 5,
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              },
            };
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              borderRadius: 12, // todo use tokens
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.text.primary,
            };
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              backgroundColor: alpha(theme.palette.primary.main, 0.2),
              color: theme.palette.primary.main,
            };
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: ({ ownerState, theme }) => {
            return {
              backgroundColor: theme.palette.secondary.main,
            };
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
              },
            };
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#10B981",
        light: "#1EDA9C",
      },
      secondary: {
        main: "#1F2937",
        dark: "#111827",
        light: "#2D3748",
      },
      custom: {
        searchBorder: "#111827",
      },
      text: {
        primary: "#D1D5DB",
        secondary: "#9CA3AF",
      },
    },
  });
};

export { initializeTheme };
