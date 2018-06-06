import React from "react";
import { compose } from "redux";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import Helmet from "react-helmet";

import Html from "./Html";
import Home from "../../views/home/js/Slick";

function flatten(arr) {
  return [].concat.apply([], arr);
}

function uniq(arr) {
  return [...new Set(arr)];
}

function isTruthy(val) {
  return !!val;
}

const flattenUniq = compose(
  uniq,
  flatten
);

function fetchComponentData(renderProps, store) {
  const requests = renderProps.components.filter(isTruthy).map(component => {
    // Handle `connect`ed components.
    if (component.WrappedComponent) {
      component = component.WrappedComponent;
    }
    if (component.fetchData) {
      const { query, params, history } = renderProps;
      return (
        component
          .fetchData({
            dispatch: store.dispatch,
            query,
            params,
            history
          })
          // Make sure promise always successfully resolves
          .catch(() => {})
      );
    }
  });

  return Promise.all(requests);
}

function isNotFound(renderProps) {
  return (
    !renderProps ||
    renderProps.components.some(component => component === NotFoundComponent)
  );
}

function getJsByChunkName(name, { assetsByChunkName }) {
  let assets = assetsByChunkName[name];
  if (!Array.isArray(assets)) {
    assets = [assets];
  }
  return assets.find(asset => /\.js$/.test(asset));
}

function getJsByModuleIds(moduleIds, { modulesById, chunksById }) {
  const chunkIds = flatten(
    moduleIds.map(id => {
      const clientModule = modulesById[id];
      if (!clientModule) {
        throw new Error(`${id} not found in client stats`);
      }
      return clientModule.chunks;
    })
  );
  return flattenUniq(
    chunkIds.map(id => {
      return chunksById[id].files
        .filter(file => /\.js$/.test(file))
        .filter(file => !/\.hot-update\.js$/.test(file));
    })
  );
}

function getCssByChunkName(name, { assetsByChunkName }) {
  let assets = assetsByChunkName[name];
  if (!Array.isArray(assets)) {
    assets = [assets];
  }
  return assets.find(asset => /\.css$/.test(asset));
}

function getJs(moduleIds, stats) {
  return [
    getJsByChunkName("vendors", stats),
    ...getJsByModuleIds(moduleIds, stats),
    getJsByChunkName("main", stats)
  ].filter(isTruthy);
}

function getCss(stats) {
  return [
    getCssByChunkName("main", stats),
    getCssByChunkName("vendors", stats)
  ].filter(isTruthy);
}

function render(stats) {
  const markup = renderToString(<Home />);
  const head = Helmet.rewind();
  const js = getJs([], stats);
  const css = getCss(stats);

  return renderToStaticMarkup(
    <Html js={js} css={css} html={markup} head={head} initialState={{}} />
  );
}

/**
 * Express middleware to render HTML using react-router
 * @param  {object}     stats Webpack stats output
 * @return {function}   middleware function
 */
export default ({ clientStats }) => {
  // Build stats maps for quicker lookups.
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
      html = render({
        modulesById,
        chunksById,
        assetsByChunkName
      });
    } catch (ex) {
      return next(ex);
    }
    res.status(404).send(`<!doctype html>${html}`);
  };
};
