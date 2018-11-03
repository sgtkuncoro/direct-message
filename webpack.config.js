const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const moduleObj = {
  loaders: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    },
    {
      test: /\.css$/,
      exclude: ["node_modules"],
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

const client = {
  entry: {
    client: "./src/client/index.js"
  },
  target: "web",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public")
  },
  module: moduleObj,
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/client/index.html"
    })
  ]
};

const server = {
  entry: {
    server: "./src/server/index.js"
  },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: moduleObj,
  externals: [nodeExternals()]
};

module.exports = [client, server];
