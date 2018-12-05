const path = require('path');
const merge = require('webpack-merge');  // merge base file
const baseConfig = require('./weback.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    // informing webpack that we are building bundle 
    // for client
    entry: './src/client/client.js',
    
    // informing webpack about the 
    // root file of client application
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') 
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
    ]
};

module.exports = merge(baseConfig, config);