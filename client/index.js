import React from "react";
import { hydrate } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import App from "../src";

const supportsHistory = "pushState" in window.history;

const doRender = Component => {
  hydrate(
    <AppContainer>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <Component />
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
