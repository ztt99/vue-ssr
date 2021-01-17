
const merge = require('webpack-merge').default
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const base = require('./webpack.base')

const resolve = (dir)=>{
    return path.resolve(__dirname,dir)
}

module.exports = merge(base,{
    entry:{
        server:resolve('../src/server-entry.js')
    },
    target:'node', //运行在node环境中
    output:{
        libraryTarget:'commonjs2' //指定的到处方式
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:resolve('../public/index.ssr.html'),
            filename:'index.ssr.html',
            minify:false,//不压缩
            excludeChunks:['server'] //排除引入文件
        })
    ]
})