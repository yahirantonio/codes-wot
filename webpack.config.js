const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: "./src/index.js",
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, "dist"),
    // filename le pone el nombre al archivo final
    filename: "[name].[contenthash].js",
    clean:true
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js", ".mjs"],
    alias:{
      '@ruta': path.resolve(__dirname, "ruta")
    }
  },
  //modulo que tiene un objeto
  module:{
    //que tiene unas reglas pra establecer  un arreglo donde voy a tener
      //distintas configuraciones dependiendo de lo que le agregue a esas variables
    rules :[
      {
        test: /\.m?js$/, // LEE LOS ARCHIVOS CON EXTENSION .JS,
        exclude: /node_modules/,  // IGNORA LOS MODULOS DE LA CARPETA
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
  // SECCION DE PLUGINS
  plugins: [
      new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
          inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
          template: './public/index.html', // LA RUTA AL TEMPLATE HTML
          filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
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