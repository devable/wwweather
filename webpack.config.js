const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: [
        "./src/assets/style/global.css",
        "./src/index.tsx"
    ],
    resolve: {
        extensions: [ ".tsx", ".ts", ".js", ".css" ],
    },
    output: {
        path: path.join(__dirname, "/public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "ts-loader"
            }
        }, {
            test: /\.css$/,
            include: path.join(__dirname, '/src/assets'),
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.module\.css$/,
            include: path.join(__dirname, '/src'),
            exclude: path.join(__dirname, '/src/assets'),
            use: [
                'style-loader',
                '@teamsupercell/typings-for-css-modules-loader',
                'css-loader?modules'
            ]
        }]
    },
    watchOptions: {
        ignored: ['src/**/*.css.d.ts', 'node_modules/**']
    }
}
