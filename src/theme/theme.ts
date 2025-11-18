import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a1b9a", // Roxo CamMove
      light: "#9c4dcc",
      dark: "#38006b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000", // Preto CamMove
      light: "#2c2c2c",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: "none", // Remove o uppercase automático dos botões
    },
  },
  shape: {
    borderRadius: 8, // Border radius padrão para componentes
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Botões mais arredondados
          padding: "10px 24px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none", // Remove sombra do header
        },
      },
    },
  },
});

export default theme;