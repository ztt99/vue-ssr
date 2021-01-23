import Vue from 'vue'
import App from './App.vue'
import createRouter from './create-router'
import CreateStore from './create-store'
export default function(){
    const router = createRouter()  
    const store = CreateStore()
    const app = new Vue({
        store,
        router,
        render:h=>h(App)
    })
    return {app,router,store} //可能还要导出其他的
}