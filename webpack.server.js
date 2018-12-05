const path = require('path');
const merge = require('webpack-merge'); // merge base file
const baseConfig = require('./weback.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    // informing webpack that we are building bundle 
    // for server (nodeJS), and not for client browser
    target: 'node',

    // informing webpack about the 
    // root file of server application
    entry: './src/index.js',
    
    // Informing webpack about the output file location
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build') 
    },

    // informing webpack that do not bundle any lib into
    // output if it exist inside node-modules
    externals: [webpackNodeExternals()],
    plugins: [
        new CleanWebpackPlugin(['build']),
    ]
};

module.exports = merge(baseConfig, config);