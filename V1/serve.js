const Vue = require('vue')
const VueServerRender = require('vue-server-renderer')
const koa = require('koa')
const Router = require('@koa/router')
const fs = require('fs')
const path = require('path')
const vm = new Vue({
    data:{
        name:'zt',
    },
    template:'<div>{{name}}</div>'
})
const template = fs.readFileSync(path.resolve(__dirname,'index.html'),'utf8')
const render = VueServerRender.createRenderer({template})

const app = new koa()
const router = new Router()

router.get('/',async (ctx)=>{
    ctx.body = await render.renderToString(vm)
})

app.use(router.routes())
app.listen(3000)