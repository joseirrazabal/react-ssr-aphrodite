import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import ErrorBoundary from "./errorBoundary";
import { withStyles, css, muiThemeMaterial } from "./withStyles";

import Prueba from "MaurioP/lib/Button/prueba";
import Button from "MaurioP/lib/Button";
import BackgroundImageHome from "MaurioP/lib/BackgroundImageHome";
import { Text } from "MaurioP/lib/TitleLabel";
import Carousel from "MaurioP/lib/Carousel";

import cssGlobal from "../css/styles.scss";

class App extends Component {
  render() {
    const { styles } = this.props;

    return (
      <MuiThemeProvider theme={muiThemeMaterial}>
        <div>
          <div className={cssGlobal.prueba}>css modules</div>
          <ErrorBoundary>
            <Prueba text="asfd" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Button text="prueba" />
          </ErrorBoundary>

          <ErrorBoundary>
            <Text
              content={"Luciano Recchini"}
              center={false}
              lineThrough={false}
              right={false}
              bold={false}
              italic={false}
              color="red"
              size={20}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <BackgroundImageHome />
          </ErrorBoundary>

          <div>
            <span {...css(styles.red)}>This is red.</span>
            <span {...css(styles.hover)}>This turns red on hover.</span>
            <span {...css(styles.small)}>
              This turns red when the browser is less than 600px width.
            </span>
            <span {...css(styles.red, styles.blue)}>This is blue.</span>
            <span {...css(styles.blue, styles.small)}>
              This is blue and turns red when the browser is less than 600px
              width.
            </span>
          </div>

          <ErrorBoundary>
            <Carousel />
          </ErrorBoundary>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(() => ({
  red: {
    backgroundColor: "red"
  },
  blue: {
    backgroundColor: "blue"
  },
  hover: {
    ":hover": {
      backgroundColor: "red"
    }
  },
  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red"
    }
  }
}))(App);
