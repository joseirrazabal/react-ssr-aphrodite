import React from "react";
import PropTypes from "prop-types";

function Html({ js, styles, css, html, head, initialState, material }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge,chrome=1" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="60fram.es" />
        <meta name="application-name" content="60fram.es" />
        <meta name="theme-color" content="#ffffff" />

        {head.link.toComponent()}
        <style>{material}</style>
        <style>{styles.content}</style>
        {css.map(css => <link key={css} rel="stylesheet" href={`/${css}`} />)}
      </head>
      <body>
        <div
          id="root"
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
        {js.map(js => <script key={js} src={`/${js}`} />)}
      </body>
    </html>
  );
}

Html.propTypes = {
  js: PropTypes.array.isRequired,
  material: PropTypes.any,
  styles: PropTypes.object.isRequired,
  css: PropTypes.array.isRequired,
  html: PropTypes.string,
  head: PropTypes.object.isRequired,
  initialState: PropTypes.object.isRequired
};

export default Html;
