const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            "react",
                            "stage-2",
                            "env"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
									{
										loader: 'file-loader',
										options: {
											name: './img/[name].[ext]'
										}
									}
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};