import Vue from 'vue'
import App from './App.vue'

export default function(){
    const app = new Vue({
        render:h=>h(App)
    })
    return {app} //可能还要导出其他的
}