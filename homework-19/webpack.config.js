const path = require('path');
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: [
            path.join(__dirname, './src/js/index.js'),
            path.join(__dirname,'./src/scss/style.scss'),
        ]
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    plugins: [new miniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    }
}