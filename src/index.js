import React, { Component } from "react";
import PropTypes from "prop-types";
import JssProvider from "react-jss/lib/JssProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { muiThemeMaterial, jss, generateClassName } from "./withStyles";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={muiThemeMaterial}>
          <CssBaseline />
          <Routes />
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default App;
