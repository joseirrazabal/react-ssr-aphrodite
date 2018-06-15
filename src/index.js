import React, { Component } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { muiThemeMaterial } from "./withStyles";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiThemeMaterial}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
