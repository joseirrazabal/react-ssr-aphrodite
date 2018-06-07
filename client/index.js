import React from "react";
import { hydrate } from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "../src";

const doRender = Component => {
  hydrate(
    <AppContainer>
      <Component />
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
