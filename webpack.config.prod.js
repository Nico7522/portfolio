const path = require('path');
const cleanPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "app-bundle.js" 
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [new cleanPlugin.CleanWebpackPlugin()]
};