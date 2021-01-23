const Vue = require('vue')
const VueServerRenderer = require('vue-server-renderer')
const koa = require('koa')
const Router = require('@koa/router')
const path = require('path')
const static = require('koa-static')
const { readFileSync } = require('fs')
const app = new koa()
const router = new Router()
// const fsbundle = readFileSync(path.resolve('./dist/server.bundle.js'), 'utf8')

const template = readFileSync(path.resolve('./dist/index.ssr.html'), 'utf8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const render = VueServerRenderer.createBundleRenderer(serverBundle,{
   template,
   clientManifest   //告诉模板引用的文件是clientManifest中对应的文件
})
// router.get('/', async (tex) => {
//     tex.body = await render.renderToString({url:tex.url})
// })
// router.get('/bar', async (tex) => {
//     tex.body = await render.renderToString({url:tex.url})
// })

router.get('/(.*)', async (tex) => {
    try{
        tex.body = await render.renderToString({url:tex.url})
    }catch(e){
        console.log(e);
    }
})

//需要把静态服务放在前面，不然路由拦截完了，就走不到静态服务了 
//静态服务插件  先匹配静态资源，资源找不到就找对应的接口
// 如果静态服务中有idnex.html那么就会直接给客户端返回index.html,就不会往下走了
app.use(static(path.resolve(__dirname,'dist')))  

app.use(router.routes())

app.listen(3000)