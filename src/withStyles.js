import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import { css, withStyles } from "react-with-styles";
import { createMuiTheme } from "material-ui/styles";

import "MaurioP/initialize";

import MyTheme from "MaurioP/lib/theme/DefaultTheme";

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(MyTheme);

import "MaurioP/css/storybook.scss";

const muiThemeMaterial = createMuiTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#F23434",
      dark: "gray",
      currentColor: "silver",
      contrastText: "#fff"
    },
    secondary: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "gray"
    },
    typography: {
      fontFamily:
        "-apple-system,system-ui,BlinkMacSystemFont," +
        "'Roboto Web:100,300,400,700', 'sans-serif'"
    }
  }
});

export { css, withStyles, ThemedStyleSheet, muiThemeMaterial };
