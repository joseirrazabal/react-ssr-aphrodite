import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../errorBoundary";
import cssGlobal from "../../css/styles.scss";
import Landing from "Maurio/lib/Templates/Landing/Landing";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Landing />
      </ErrorBoundary>
    );
  }
}

export default App;
