const GasPlugin = require('gas-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/index.js'
    },
    module: {
        rules: [{
            test: /\\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new GasPlugin(),
    ]
};
