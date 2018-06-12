import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "Maurio/lib/Atoms/Button/Button";
import Calendar from "Maurio/lib/Molecules/Calendar/Calendar";

import ErrorBoundary from "../errorBoundary";
import cssGlobal from "../../css/styles.scss";

class App extends Component {
  render() {
    return <ErrorBoundary>123</ErrorBoundary>;
  }
}

export default App;
