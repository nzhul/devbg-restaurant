import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      searchBorder?: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      searchBorder?: string;
    };
  }
}
