import React from "react";
import { hydrate } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";

import App from "../src";

const generateClassName = createGenerateClassName({
  productionPrefix: "c"
});

const supportsHistory = "pushState" in window.history;

const doRender = Component => {
  hydrate(
    <AppContainer>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <JssProvider generateClassName={generateClassName}>
          <Component />
        </JssProvider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById("root")
  );
};

doRender(App);

if (module.hot) {
  module.hot.accept("../src", () => {
    doRender(require("../src").default);
  });
}
