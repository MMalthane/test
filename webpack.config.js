const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: ['./main.js', './style.scss'],
    output: {
        path: path.resolve(__dirname, "public/assets")
    },
    module: {
        rules: [{
                test: /.(js|jsx)$/,
                exclude: /node_module/,
                loader: 'babel-loader'
            },
            {
                test: /\.json5$/i,
                loader: 'json5-loader',
                options: {
                    esModule: true,
                },
                type: 'javascript/auto',

            },
            {
                test: /.(scss|css)$/,
                exclude: /node_modules/,
                use: [{
                        loader: MinicssExtractPlugin.loader,
                        options: {
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MinifyPlugin({}, {
            comments: false
        }),
        new MiniCssExtractPlugin({}, {
            filename: '[name].css'
        })

    ]
}