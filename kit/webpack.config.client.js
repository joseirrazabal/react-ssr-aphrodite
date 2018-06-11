const appRootDir = require("app-root-dir");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StatsWebpackPlugin = require("stats-webpack-plugin");
const autoprefixer = require("autoprefixer");
const ManifestPlugin = require("webpack-manifest-plugin");
const jsonStableStringify = require("json-stable-stringify");
const xxHash = require("xxhashjs");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const notifier = require("node-notifier");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const NODE_ENV =
  process.env.NODE_ENV === "production" ? "production" : "development";
const IS_PRODUCTION = NODE_ENV === "production";
const IS_LOCAL = !!process.env.LOCAL;
const PUBLIC_PATH = !IS_PRODUCTION || IS_LOCAL ? "/" : process.env.ASSETS_URL;

const stripUselessLoaderOptions = value => value || undefined;
const hash = str => xxHash.h32(jsonStableStringify(str), 0).toString(16);

const devEntries = !IS_PRODUCTION ? ["webpack-hot-middleware/client"] : [];

const config = {
  mode: !IS_PRODUCTION ? "development" : "production",
  name: "client",
  context: path.join(appRootDir.get()),
  entry: ["@babel/polyfill", ...devEntries, "./client"],
  output: {
    path: path.join(appRootDir.get(), "dist"),
    filename: !IS_PRODUCTION ? "client/[name].js" : "client/[name].js",
    sourceMapFilename: !IS_PRODUCTION
      ? "client/[name].map.js"
      : "client/[name].map.js",
    chunkFilename: !IS_PRODUCTION
      ? "client/chunks/[name].js"
      : "client/chunks/[name].[chunkhash].chunk.js",
    publicPath: PUBLIC_PATH,
    pathinfo: !IS_PRODUCTION
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
          !IS_PRODUCTION ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
              importLoaders: 1,
              // localIdentName: "[name]",
              localIdentName: !IS_PRODUCTION
                ? "[name]_[local]_[hash:base64:3]"
                : "[local]_[hash:base64:3]",
              minimize: stripUselessLoaderOptions(IS_PRODUCTION)
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: stripUselessLoaderOptions(!IS_PRODUCTION),
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  env: NODE_ENV,
                  flexbox: "no-2009"
                })
              ]
            }
          },
          ...(!IS_PRODUCTION
            ? [
                {
                  loader: "resolve-url-loader"
                }
              ]
            : []),

          {
            loader: "sass-loader",
            options: !IS_PRODUCTION
              ? {
                  sourceMap: true
                }
              : undefined
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        include: [
          path.join(appRootDir.get(), "src"),
          path.join(appRootDir.get(), "css")
        ],
        use: [
          !IS_PRODUCTION ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: !IS_PRODUCTION
                ? "[name]_[local]_[hash:base64:3]"
                : "[local]_[hash:base64:3]",
              minimize: stripUselessLoaderOptions(IS_PRODUCTION)
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: stripUselessLoaderOptions(!IS_PRODUCTION),
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  env: NODE_ENV,
                  flexbox: "no-2009"
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: !IS_PRODUCTION
              ? {
                  sourceMap: true
                }
              : undefined
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        // include,
        loader: "url-loader",
        options: {
          name: "videos/[name].[hash].[ext]",
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
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(appRootDir.get())
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    // new ManifestPlugin({
    //   fileName: "client-manifest.json",
    //   publicPath: PUBLIC_PATH,
    //   filter: ({ path: filePath }) => !filePath.endsWith(".map.js")
    // }),
    new StatsWebpackPlugin(`client-stats.json`, {
      chunkModules: true
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    new MiniCssExtractPlugin({
      filename: !IS_PRODUCTION ? "[name].css" : "[name].[hash].css",
      chunkFilename: !IS_PRODUCTION ? "[id].css" : "[id].[hash].css"
    }),
    function() {
      this.plugin("done", stats => {
        notifier.notify({
          title: "Webpack : Build Succeeded",
          message: `${stats.compilation.errors.length} Error(s) - ${
            stats.compilation.warnings.length
          } Warning(s)`
        });
      });
      this.plugin("failed", () => {
        notifier.notify({
          title: "WebpackClient",
          message: "Build Failed HARD"
        });
      });
    }
  ],
  devtool: "eval",
  target: "web",
  externals: {},
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    process: false
  },
  bail: IS_PRODUCTION,
  optimization: {
    noEmitOnErrors: !IS_PRODUCTION,
    concatenateModules: IS_PRODUCTION,
    namedModules: IS_PRODUCTION,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendors",
          priority: 10,
          enforce: true
        }
      }
    }
  }
};
module.exports = config;
