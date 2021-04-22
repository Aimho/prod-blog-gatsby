import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  props: {
    MuiPaper: {
      square: true
    }
  },
  palette: {
    primary: {
      main: "#202020"
    },
    secondary: {
      main: "#ffdf6c"
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  },
  overrides: {
    MuiChip: {
      root: {
        fontWeight: "bold",
        borderRadius: "3px"
      }
    }
  }
});

export default theme;
