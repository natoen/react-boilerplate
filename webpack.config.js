const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      }
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./index.html"
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};