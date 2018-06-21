const express = require("express");
const bodyParser = require("body-parser");

const isDevelopment = process.env.NODE_ENV !== "production";
const PORT_NUMBER = process.env.PORT || 8080;

const app = express();

const compression = require("compression");
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist", { maxAge: "365d" }));
app.use(express.static("assets", { maxAge: "365d" }));

if (isDevelopment) {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackHotServerMiddleware = require("webpack-hot-server-middleware");

  const webpackConfig = require("./webpack.config");

  const multiCompiler = webpack(webpackConfig);

  const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
  multiCompiler.apply(
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://localhost:${PORT_NUMBER}`
        ]
      },
      clearConsole: true
    })
  );

  app.use(
    webpackDevMiddleware(multiCompiler, {
      stats: "none",
      logLevel: "silent"
    })
  );
  app.use(
    webpackHotMiddleware(
      multiCompiler.compilers.find(compiler => compiler.name === "client"),
      { log: false }
    )
  );
  app.use(webpackHotServerMiddleware(multiCompiler, { chunkName: "server" }));

  // multiCompiler.plugin("done", function() {
  // });
} else {
  // const manifests = {};
  // manifests.server = require("../dist/dist/server-manifest");
  // manifests.client = require("../dist/dist/client-manifest");
  const serverRender = require("../dist/server/main").default;
  app.use(serverRender({ clientStats: require("../dist/client-stats.json") }));
}

app.listen(PORT_NUMBER, () => {
  console.log(`Server listening at port ${PORT_NUMBER}`);
});
