const path = require('path');

module.exports = {
    entry: './src/script/index.ts',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader",
                },
                {
                  loader: "css-loader"
                },
                {
                  loader: "sass-loader"
                }
              ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
    }
};
