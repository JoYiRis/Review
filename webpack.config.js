'use strict';

const path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.scss$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translate css to common js
                'postcss-loader', // add prefix to css 
                'sass-loader'   // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }, {
            test: /.js$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [path.resolve(__dirname, 'src')], 
            options: {
                formatter: require('eslint-friendly-formatter') // error message format
            }
        }]
    }
};