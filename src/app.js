import Vue from 'vue'
import App from './App.vue'
import createRouter from './create-router'
export default function(){
    const router = createRouter()  
    const app = new Vue({
        router,
        render:h=>h(App)
    })
    return {app,router} //可能还要导出其他的
}