const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = require("./webpack.base")({
  mode: "development",
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000,
  },
  entry: ["./src/app.tsx"],
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html",
      favicon: "src/assets/images/logo.png",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "eval-source-map",
    hints: false,
});
