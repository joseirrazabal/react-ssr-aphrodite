import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import { createMuiTheme } from "@material-ui/core/styles";

import MyTheme from "Maurio/theme/DefaultTheme";
ThemedStyleSheet.registerTheme(MyTheme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

import "Maurio/css/storybook.scss";

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

export { muiThemeMaterial };
