const Vue = require('vue')
const VueServerRenderer = require('vue-server-renderer')
const koa = require('koa')
const Router = require('@koa/router')
const path = require('path')
const static = require('koa-static')
const { readFileSync } = require('fs')

const app = new koa()
const router = new Router()
const fsbundle = readFileSync(path.resolve('./dist/server.bundle.js'), 'utf8')
const template = readFileSync(path.resolve('./dist/index.ssr.html'), 'utf8')
const render = VueServerRenderer.createBundleRenderer(fsbundle,{
   template
})

router.get('/', async (tex) => {
    tex.body = await render.renderToString()
})
app.use(router.routes())
app.use(static(__dirname))  //静态服务插件
app.listen(3000)