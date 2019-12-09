const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        publicPath: 'xuni',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};