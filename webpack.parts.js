const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV || 'development';

// Common
exports.settings = ({ options = {}, loaders = [] } = {}) => {
    return {
        mode: mode,
        entry: {
            main: './build/index.js',
            404: './build/404.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'public'),
        },
    };
}

// JS
exports.js = ({ options = {}, loaders = [] } = {}) => {
    return {
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
            ],
        },
    };
}

// CSS
exports.css = ({ options = {}, loaders = [] } = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.s?[ac]ss$/i,
                    use: [
                        {
                            loader: mode === 'production'
                                ? MiniCssExtractPlugin.loader
                                : 'style-loader'
                        },
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
            }),
        ],
    };
};

// Copy
exports.copy = ({ options = {}, loaders = [] } = {}) => {
    return {
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: 'build/index.html', to: 'index.html' },
                    { from: 'build/404.html', to: '404.html' },
                    { from: 'build/css/themes/', to: 'css/themes/' },
                    { from: 'build/img/', to: 'img/' },
                ],
            }),
        ],
    };
}

// Clean
exports.clean = ({ options = {}, loaders = [] } = {}) => {
    return {
        plugins: [
            new CleanWebpackPlugin(),
        ],
    };
}

// Clean
exports.analyzer = ({ options = {}, loaders = [] } = {}) => {
    return {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
            }),
        ],
    };
}