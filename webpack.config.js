// module.exports = {
//     entry: "./src/main.js",

//     output: {
//         filename: "./build/build.js"
//     },
//     module: {
//         loaders: [
//             //.css 文件使用 style-loader 和 css-loader 来处理
//             {
//                 test: /.css$/,
//                 loader: "style!css"
//             },
//             //.js 文件使用 jsx-loader 来编译处理
//             {
//                 test: /.js$/,
//                 loader: "jsx-loader"
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     plugins: []
// };

var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./src/main.js"
    ],
    output: {
        path: './_dist',
        filename: "./js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'jsx-loader'
            },
            {
                test: /.css$/,
                loader: "style!css"
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};