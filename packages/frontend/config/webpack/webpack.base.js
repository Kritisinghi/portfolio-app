const path = require("path");
const webpack = require("webpack");

module.exports = (options) => ({
  mode: options.mode,

  entry: options.entry,

  output: {
    path: path.resolve(process.cwd(), "dist"),
    ...options.output, // Merging additional output options if provided
  },

  optimization: options.optimization,

  plugins: [
    ...options.plugins
  ],

  devtool: options.devtool,
  performance: options.performance || {},
  devServer: options.devServer,

  module: {
    rules: [
      ...options.module.rules,
      // TypeScript Loader for .ts and .tsx files
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },

      // Babel Loader for JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(ansi-regex)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/env",
                {
                  targets: ">1%", // Adjust this based on your browser support
                },
              ],
              "@babel/react",
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/syntax-dynamic-import",
            ],
          },
        },
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(html)$/,
        loader: "string-replace-loader",
        options: {
          search: "&&API_URL&&",
          replace: process.env.API_BASE_URL,
          flags: "g",
        },
      },
      // Asset Handling for images (using Webpack 5 asset modules)
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },

      // Asset Handling for PDFs (using Webpack 5 asset modules)
      {
        test: /\.pdf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/files",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts",".json", ".css"],
    modules: [
      path.resolve(process.cwd(), "../../node_modules"),
      path.resolve(process.cwd(), "node_modules"),
      path.resolve(process.cwd(), "src"),
    ],
  },
});
