import createTheme from "@mui/material/styles/createTheme";
import {
  primitiveColorPrimaryDark,
  primitiveColorPrimaryDark3,
  primitiveColorPrimaryLight,
  primitiveColorPrimaryMain,
  primitiveColorSecondaryDark,
  primitiveColorSecondaryLight,
  primitiveColorSecondaryMain,
  primitiveTextFontFamily,
  primitiveTextPrimaryColor,
  primitiveTextSecondaryColor,
  semanticsButtonsBorderRadiusLg,
  semanticsButtonsPrimaryBgColorEnabled,
  semanticsButtonsPrimaryBgColorHover,
  semanticsButtonsPrimaryTextColor,
  semanticsButtonsSecondaryBgColorEnabled,
  semanticsButtonsSecondaryBgColorHover,
  semanticsButtonsSecondaryTextColor,
  semanticsCardsBackgroundColor,
  semanticsCardsBorderRadius,
  semanticsCardsChipsText,
} from "@nzhul/devbg-design-tokens/js/tokens.js";

const initializeTheme = () => {
  return createTheme({
    typography: {
      fontFamily: primitiveTextFontFamily,
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
                color: semanticsButtonsPrimaryTextColor,
                backgroundColor: semanticsButtonsPrimaryBgColorEnabled,
                "&:hover": {
                  backgroundColor: semanticsButtonsPrimaryBgColorHover,
                },
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "secondary"
            ) {
              styles = {
                color: semanticsButtonsSecondaryTextColor,
                backgroundColor: semanticsButtonsSecondaryBgColorEnabled,
                "&:hover": {
                  backgroundColor: semanticsButtonsSecondaryBgColorHover,
                },
              };
            }

            return {
              ...styles,
              borderRadius: semanticsButtonsBorderRadiusLg, // todo use tokens
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
          root: ({ ownerState }) => {
            return {
              borderRadius: 8, // todo use tokens
              color: semanticsButtonsSecondaryTextColor,
              fontWeight: 400,
              backgroundColor: semanticsButtonsSecondaryBgColorEnabled,
              "&:hover": {
                backgroundColor: semanticsButtonsSecondaryBgColorHover,
              },
              textTransform: "none",
              marginRight: 5,
              "&.Mui-selected": {
                color: semanticsButtonsPrimaryTextColor,
                backgroundColor: semanticsButtonsPrimaryBgColorEnabled,
                "&:hover": {
                  backgroundColor: semanticsButtonsPrimaryBgColorHover,
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
              borderRadius: semanticsCardsBorderRadius, // todo use tokens
              backgroundColor: semanticsCardsBackgroundColor,
              color: theme.palette.text.primary,
            };
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ ownerState }) => {
            return {
              backgroundColor: primitiveColorPrimaryDark3,
              color: semanticsCardsChipsText,
              borderRadius: semanticsCardsBorderRadius,
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
        dark: primitiveColorPrimaryDark,
        main: primitiveColorPrimaryMain,
        light: primitiveColorPrimaryLight,
      },
      secondary: {
        main: primitiveColorSecondaryMain,
        dark: primitiveColorSecondaryDark,
        light: primitiveColorSecondaryLight,
      },
      custom: {
        searchBorder: primitiveColorSecondaryDark,
      },
      text: {
        primary: primitiveTextPrimaryColor,
        secondary: primitiveTextSecondaryColor,
      },
    },
  });
};

export { initializeTheme };
