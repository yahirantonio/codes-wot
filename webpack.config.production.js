const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean:true
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".mjs"],
    alias:{
      '@ruta': path.resolve(__dirname, "ruta")
    }
  },
  module:{
    rules :[
      {
        test: /\.m?js$/, 
        exclude: /node_modules/,  
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|styl)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({ 
          inject: true, 
          template: './public/index.html', 
          filename: './index.html' 
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css"
      }),
  ],
  optimization:{
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
}