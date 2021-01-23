import createApp from './app'

export default (content) => {
    return new Promise((resolve, reject) => {
        const { app, router,store } = createApp()
        router.push(content.url)  
        router.onReady(()=>{
            const matchComponents = router.getMatchedComponents()
            if(matchComponents.length>0){  
            Promise.all(matchComponents.map(item=>{
                if(item.asyncData){
                  return  item.asyncData(store)
                }
            })).then(()=>{ 
                // content.state 只要写这个就会在window上挂载一个__INITIAL_STATE__属性   vue-server-renderer 实现的
                content.state = store.state
                resolve(app)
            })
            }else{
                reject({code:404})
            }

        },reject)
    })
}
