const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode: mode,
    entry: './build/index.js',
    output: {
        filename: 'public/index.js',
        path: path.resolve(__dirname, '.'),
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].css',
            chunkFilename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'build/index.html', to: 'public/index.html' },
                { from: 'build/css/themes/', to: 'public/css/themes/' },
                { from: 'build/img/', to: 'public/img/' },
            ],
        }),
    ],
};
