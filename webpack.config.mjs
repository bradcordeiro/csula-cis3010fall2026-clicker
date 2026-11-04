import path from 'node:path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const currentDir = import.meta.dirname;

export default {
  mode: process.env.NODE_ENV || 'development',
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  entry: path.resolve(currentDir, 'src', 'index.tsx'),
  resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx'] },
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(currentDir, 'src', 'index.html') }),
    new MiniCssExtractPlugin(),
  ],
  ignoreWarnings: [{
    module: /\.\/src\/index.scss/,
  }],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
    ],
  },
};
