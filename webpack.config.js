const path = require("path");
//const Webpack = require("webpack");
//const WebpackDevServer = require("webpack-dev-server");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.jpg$/,
        dependency: { not: ["url"] },
        use: [{ loader: "url-loader" }],
      },
    ],
  },
};
