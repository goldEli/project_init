module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'jsBundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015'],
                plugins: [
                    ["import", [{
                        "libraryName": "antd",
                        "libraryDirectory": "lib", // default: lib
                        "style": true
                    }, {
                        "libraryName": "antd-mobile",
                        "libraryDirectory": "component",
                    }, ]]
                ]
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, ]
    }
}
