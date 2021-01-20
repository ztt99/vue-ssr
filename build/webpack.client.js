
const merge = require('webpack-merge').default
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const base = require('./webpack.base')
const VueSsrClientPlugin = require('vue-server-renderer/client-plugin')
const resolve = (dir)=>{
    return path.resolve(__dirname,dir)
}

module.exports = merge(base,{
    entry:{
        client:resolve('../src/client-entry.js')
    },
    plugins:[
        new VueSsrClientPlugin(),
        new HtmlWebpackPlugin({
            template:resolve('../public/index.html')
        })
    ]
})