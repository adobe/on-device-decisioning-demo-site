/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

var webpack = require('webpack');
var path = require('path');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { options } = require('yargs');

module.exports = {
    context: path.join(__dirname, "./"),
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/assets/js',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: { 
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/")
        }
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use : [
                {
                    loader : 'babel-loader',
                    options : {
                        presets: ['@babel/preset-env', '@babel/preset-react'].map(require.resolve)
                    }
                }
            ]
        },
        {
            test: /\.(jpg|jpeg|gif|png)$/,
            exclude: /node_modules/,
            use : [
                {
                    loader : 'url-loader',
                    options : {
                        limit : 1024,
                        name : 'images/[name].[ext]'
                    }
                }
            ]
        }
      ]
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      contentBase: "./public"
    }
}
