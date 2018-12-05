var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
    devtool: 'source-map',
    // Informing webpack to run babel on every file it runs through for conversion
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', 
                        'stage-0', // handle async code
                        ['env', { targets: { browsers: ['last 2 versions'] }}] // master preset that tells to run trnsform rules on last 2 version of browsers
                    ]
                }
            },
            {
                    test:/\.(s*)css$/, 
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                      })
             },{
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: ['babel-loader', 'url-loader']
                // use: ['@svgr/webpack','url-loader'],
              },
              {
                  test: /\.json$/, loader: 'json-loader'
              },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:'styles.css'
        })
        
    ]
};