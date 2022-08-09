const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports  = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpe?g|png|gif|svg|ico$/i,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: outputPath,
        host: '0.0.0.0',
        port: 8080,
    }
}