import path from 'node:path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const currentDir = import.meta.dirname;

const mode = process.env.NODE_ENV ?? 'development';

export default {
  mode,
  devtool: mode === 'development' ? 'source-map' : false,
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
        test: /\.(svg|png)$/,
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
      {
        test: /AutoClickers\.json$/,
        type: 'asset/resource',
        generator: {
          filename: 'data.json',
        },
      },
    ],
  },
};
