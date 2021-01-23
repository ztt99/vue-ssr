import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
  
export default ()=>{
    let store = new Vuex.Store({
        state:{
            name:'zt'
        },
        mutations:{
            setName (state,val){
                state.name = val
            }
        },
        actions:{
            setName({commit },val){
              return  new Promise((resolve,reject)=>{
                    setTimeout(() => {
                       commit('setName',val)
                       resolve() 
                    }, 0);
                })
            }
        }
    })

    if(typeof window !== 'undefined' && window.__INITIAL_STATE__ ){
        store.replaceState(window.__INITIAL_STATE__)
    }
    return store
}