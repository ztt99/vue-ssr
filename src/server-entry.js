import createApp from './app'

export default (content) => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp()
        router.push(content.url)  
        router.onReady(()=>{
        resolve(app)
        },reject)
    })
}
