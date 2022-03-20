// pathはnpmの初期モジュール
const path = require('path');
// このファイルでwebpackに書いたものがwebpackの中身に反映されます
module.exports = {
    entry: {
        //entryポイント用の、bundleのモジュールになる起点になるファイル。これをみてソースをまとめていきますよ
        bundle: './src/index.ts'
    },
    //出力先
    output: {
        //__dirname のrootのdirと''の名前をくっつけつ
        path: path.join(__dirname, 'dist'),
        //[name]にすることでこの場合だとbundle.jsになる
        filename: '[name].js'
    },
    // importとexportの時にファイルの拡張子
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        //参照するとき
        // contentBase: path.join(__dirname, 'dist'),
        static: {
            directory: path.join(__dirname, "dist"),
        },
        //立ち上げた時に
        // open: true
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                //せいき表現
                test: /\.ts$/
            }
        ]
    }   
}