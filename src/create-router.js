import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



export default ()=>{
    const router = new VueRouter({
        mode:'history',
        routes:[
            {
                path:'/',
                redirect:'/foo'
            },
            {
                path:'/foo',
                component:()=>import('./components/Foo.vue')
            },
            // {
            //     path:'/bar',
            //     component:()=>import('./components/Bar.vue')
            // }
        ]
    })
    return router
}