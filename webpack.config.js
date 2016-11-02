module.exports = {
    entry: './src/index.js',
    devtool:'inline-source-map',   //debuger
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
                presets: ['es2015','react','stage-0'],
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
        }, {
            test: /\.(png)|(jpg)$/,
            loader: "url?limit=50000"
        }]
    }
}
