const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = (dir)=>{
    return path.resolve(__dirname,dir)
}

module.exports = {
    output:{
        filename:'[name].bundle.js',
        path:resolve('../dist')
    },
    resolve:{
        extensions:['.js','.vue','.css']  //查找后缀
    },
    module:{
        rules:[
            {
                test:/\.vue/,
                use:'vue-loader'
            },
            {
                test:/\.css/,
                use:['vue-style-loader','css-loader']  //vue-style-loader 如果出不来，就降一下版本
            },
            {
                test:/\.js/,
                use:{
                    options:{
                        presets:['@babel/preset-env']
                    },
                    loader:'babel-loader'
                },
                exclude:/node_modules/
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ]
}