import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../errorBoundary";
import cssGlobal from "../../css/styles.scss";

import Landing from "Maurio/Templates/Landing/Landing";

class App extends Component {
  render() {
    return <ErrorBoundary>123-123-123</ErrorBoundary>;
  }
}

export default App;
