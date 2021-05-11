const path = require("path");

// plugins
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// publicPath
const publicPath = "/reactchallenge";

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "/src/index.tsx"),
  output: {
    path: path.resolve(__dirname, `dist${publicPath}`),
    filename: "bundle.js",
    publicPath: publicPath,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "/src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: port,
    historyApiFallback: true,
    open: true,
    contentBase: "./",
    hot: true,
  },
};
