import React from "react";
import { hydrate } from "react-dom";
import { AppContainer } from "react-hot-loader";

// import { initializeServerSideHeaders } from "src/utils/EnvUtils";

// import * as Bundles from "./components/Bundles";
// import App from "./App";
import Home from "../../views/home/js/Slick";

const doRender = Component => {
  hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

// const serverSideHeaders = window.serverSideHeaders || {};
// initializeServerSideHeaders(serverSideHeaders);

// const splitPoints = window.splitPoints || [];
// Promise.all(splitPoints.map(chunk => Bundles[chunk].loadComponent())).then(
//   doRender
// );

doRender(Home);

if (module.hot) {
  module.hot.accept("../../views/home/js/Slick", () => {
    doRender(require("../../views/home/js/Slick").default);
  });
}
