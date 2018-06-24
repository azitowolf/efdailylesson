var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // maybe use - bundles css or scss into separate bundle file
var doiuse = require('doiuse');

module.exports = {
    entry: {
        app: ['./src/js/app.js']
    },
    output: {
        path: require('path').resolve('build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader?name=fonts/[hash].[ext]"
            },
            {
                test: /\.(html)$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    }
};
