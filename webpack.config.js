const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const { WebpackWarPlugin } = require('webpack-war-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html", 
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: { // NEW
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  }, // NEW Ends
  plugins: [
    htmlPlugin,
    new WebpackWarPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'font',
            },
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'file',
            },
          }
        ]
      },
      {
        test: /\.xml$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'xml',
            },
          }
        ]
      }
    ],
  }
};