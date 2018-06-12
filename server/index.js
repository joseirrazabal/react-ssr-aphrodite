import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import Helmet from "react-helmet";
import { StyleSheetServer } from "aphrodite";
import StaticRouter from "react-router-dom/StaticRouter";

import Html from "./html";
import App from "../src";

function getCss({ assetsByChunkName }) {
  var items = [];
  for (let item in assetsByChunkName) {
    let assets = assetsByChunkName[item];
    if (!Array.isArray(assets)) {
      assets = [assets];
    }
    let js = assets.find(asset => /\.css$/.test(asset));
    if (js) {
      items.push(js);
    }
  }
  return items;
}

function getJs({ assetsByChunkName }) {
  var items = [];
  for (let item in assetsByChunkName) {
    let assets = assetsByChunkName[item];
    if (!Array.isArray(assets)) {
      assets = [assets];
    }
    let js = assets.find(asset => /\.js$/.test(asset));
    if (js) {
      items.push(js);
    }
  }
  return items;
}

function render(stats, url) {
  const cssFiles = getCss(stats);
  const js = getJs(stats);
  const head = Helmet.rewind();

  var { html, css } = StyleSheetServer.renderStatic(() => {
    return renderToString(
      <StaticRouter location={url} context={{}}>
        <App />
      </StaticRouter>
    );
  });

  return renderToStaticMarkup(
    <Html
      js={js}
      styles={css}
      css={cssFiles}
      html={html}
      head={head}
      initialState={{}}
    />
  );
}

/**
 * Express middleware to render HTML using react-router
 * @param  {object}     stats Webpack stats output
 * @return {function}   middleware function
 */
export default ({ clientStats }) => {
  const modulesById = clientStats.modules.reduce((modules, mod) => {
    modules[mod.id] = mod;
    return modules;
  }, {});
  const chunksById = clientStats.chunks.reduce((chunks, chunk) => {
    chunks[chunk.id] = chunk;
    return chunks;
  }, {});
  const assetsByChunkName = clientStats.assetsByChunkName;

  /**
   * @param  {object}     req Express request object
   * @param  {object}     res Express response object
   * @return {undefined}  undefined
   */
  return (req, res, next) => {
    const url = req.url;

    let html;
    try {
      html = render(
        {
          modulesById,
          chunksById,
          assetsByChunkName
        },
        url
      );
    } catch (ex) {
      return next(ex);
    }
    res.status(404).send(`<!doctype html>${html}`);
  };
};
