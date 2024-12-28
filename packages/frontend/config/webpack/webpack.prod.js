const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OfflinePlugin = require("offline-plugin");
const OptimizedCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = require("./webpack.base")({
  mode: "production",
  devtool: 'source-map', 
  entry: ["./src/app.tsx"],
  output: {
    filename: "assets/js/[name].[chunkhash].js",
    chunkFilename: "assets/js/[name].[contenthash:8].chunk.js",
    publicPath: ''
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].css",
      chunkFilename: "assets/css/[name].[hash].css",
    }),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/assets/images/logo.png",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    })
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/css/",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    moduleIds: 'hashed',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
      new OptimizedCssAssetsPlugin({}),
    ],
    sideEffects: true,
    providedExports: true,
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `${packageName.replace("@", "")};`;
            },
          },  
        default: {
          minChunks: 2,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: "single",
  },
  devtool: false,
});
