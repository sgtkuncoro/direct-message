const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const dev = require("./webpack/webpack.dev");
const prod = require("./webpack/webpack.prod");

const mode = process.env.NODE_ENV === "production" ? prod : dev;

const modules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: "[name]__[local]__[hash:base64:5]"
          }
        }
      ]
    }
  ]
};

const client = merge(mode, {
  entry: {
    client: "./src/client/index.js"
  },
  target: "web",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public")
  },
  module: modules,
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/client/index.html"
    })
  ]
});

const server = merge(mode, {
  entry: {
    server: "./src/server/index.js"
  },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: modules,
  externals: [nodeExternals()]
});

module.exports = [client, server];
