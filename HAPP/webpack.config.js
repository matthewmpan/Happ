const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // mode: process.env.NODE_ENV,
  mode: 'development',

  // entry point of the app
  entry: './src/index.js',

  // specify the name and location of bundle file that will be generated when a production build is produced
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        // test: /.js$/,
        exclude: /node_modules/,
        // use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        // }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // creates `style` nodes from JS strings
          'style-loader',
          // translates CSS into CommonJS
          'css-loader',
          // compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },

  // resolve: {
  //   fallback: {
  //     util: require.resolve("util/")
  //   }
  // },

  // resolve: {
  //   // extensions: ['*', '.js', '.jsx'],
  //   alias: {
  //     "styled-components": path.resolve('./src/App.jsx', "node_modules", "styled-components"),
  //   }
  // },

   // tells webpack to inject bundle files it generates into the html file
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html'
    })
  ],

  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: {
      '/api': 'http://localhost:3003',
    }
  }

};