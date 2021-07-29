# baseWebpack

These are basic configuration to webpack, in commits before there is a version with a unique webpack.config.js

This project has the following settings

# DevDependencies

```json
"devDependencies": {
    "@babel/core": "^7.14.8",
    "@babel/plugin-transform-runtime": "^7.14.5",
    "@babel/preset-env": "^7.14.8",
    "babel-loader": "^8.2.2",
    "css-loader": "^6.2.0",
    "css-minimizer-webpack-plugin": "^3.0.2",
    "html-webpack-plugin": "^5.3.2",
    "mini-css-extract-plugin": "^2.1.0",
    "stylus": "^0.54.8",
    "stylus-loader": "^6.1.0",
    "terser-webpack-plugin": "^5.1.4",
    "webpack": "^5.46.0",
    "webpack-bundle-analyzer": "^4.4.2",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
}
```

# Scripts

```json
"scripts": {
    "build": "webpack --config webpack.config.production.js",
    "dev": "webpack --config webpack.config.js",
    "start": "webpack serve --config webpack.config.js",
    "build:analyze": "webpack --config webpack.config.production.js --analyze"
},
```

# Basic settings in webpack.config.production.js

```js
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
```