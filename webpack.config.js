const path = require("path");
let HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main-[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //3. Injext Styles into DOM.
                    'css-loader',   //2. Turn css into commonjs
                    'sass-loader'   //1. Turn sass into css
                ]
            }
        ]
    }
}