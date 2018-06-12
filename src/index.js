import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { muiThemeMaterial } from "./withStyles";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiThemeMaterial}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
