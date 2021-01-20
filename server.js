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

router.get('/', async (tex) => {
    tex.body = await render.renderToString()
})
app.use(router.routes())
app.use(static(path.resolve(__dirname,'dist')))  //静态服务插件
app.listen(3000)