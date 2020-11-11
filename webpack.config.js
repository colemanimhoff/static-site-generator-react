const path = require("path");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

const data = require("./data");

module.exports = {
  devtool: "none",
  devServer: {
    publicPath: "/",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  target: "node",
  plugins: [new StaticSiteGeneratorPlugin(data)],
};
