const appRootDir = require("app-root-dir");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StatsWebpackPlugin = require("stats-webpack-plugin");
const autoprefixer = require("autoprefixer");
// const ManifestPlugin = require("webpack-manifest-plugin");
const jsonStableStringify = require("json-stable-stringify");
const xxHash = require("xxhashjs");
const nodeExternals = require("webpack-node-externals");

const NODE_ENV =
  process.env.NODE_ENV === "production" ? "production" : "development";
const IS_PRODUCTION = NODE_ENV === "production";
const IS_LOCAL = !!process.env.LOCAL;
const PUBLIC_PATH = !IS_PRODUCTION || IS_LOCAL ? "/" : process.env.ASSETS_URL;

const stripUselessLoaderOptions = value => value || undefined;
const hash = str => xxHash.h32(jsonStableStringify(str), 0).toString(16);

const config = {
  mode: "development",
  name: "server",
  context: path.join(appRootDir.get()),
  entry: { server: ["./server"] },
  output: {
    path: path.join(appRootDir.get(), "dist"),
    filename: "server/[name].js",
    sourceMapFilename: "server/[name].map.js",
    libraryTarget: "commonjs2",
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // include,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(scss|css)$/,
        include: /node_modules/,
        use: [
          {
            loader: "css-loader/locals",
            options: {
              modules: false,
              importLoaders: 1,
              localIdentName: !IS_PRODUCTION
                ? "[name]_[local]_[hash:base64:3]"
                : "[local]_[hash:base64:3]"
              // localIdentName: "[name]"
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(scss|css)$/,
        include: [
          path.join(appRootDir.get(), "src"),
          path.join(appRootDir.get(), "css")
        ],
        use: [
          {
            loader: "css-loader/locals",
            options: {
              modules: true,
              localIdentName: !IS_PRODUCTION
                ? "[name]_[local]_[hash:base64:3]"
                : "[local]_[hash:base64:3]"
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        // include,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(aac|m4a|mp3|oga|ogg|wav)$/,
        // include,
        loader: "url-loader",
        options: {
          name: "sounds/[name].[hash].[ext]",
          limit: 10000
        }
      },
      {
        test: /.*\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg|gif|ico|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[name].[hash].[ext]",
              limit: 1
            }
          },
          ({ resource }) => ({
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                quality: 90
              },
              pngquant: {
                quality: "90-95",
                speed: 1
              },
              svgo: {
                plugins: [
                  {
                    cleanupIDs: {
                      prefix: hash(path.relative(appRootDir.get(), resource)),
                      minify: true,
                      remove: true
                    }
                  }
                ]
              }
            }
          })
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules", path.join(appRootDir.get(), "src")]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
    // new ManifestPlugin({
    //   fileName: "server-manifest.json",
    //   publicPath: PUBLIC_PATH
    // })
    // new StatsWebpackPlugin(`server-stats.json`, {
    //   chunkModules: true
    // })
  ],
  target: "node",
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    process: false
  },
  devtool: !IS_PRODUCTION ? "eval" : undefined,
  bail: IS_PRODUCTION
  // externals: [
  //   nodeExternals({
  //     whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
  //   })
  // ]
  // externals: [nodeExternals()]
  // externals: fs.readdirSync("node_modules").reduce((externals, mod) => {
  //   externals[mod] = `commonjs ${mod}`;
  //   return externals;
  // }, {})
};
module.exports = config;
