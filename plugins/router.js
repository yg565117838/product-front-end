export default function({ app }) {
    app.router.beforeEach((to, from, next) => {
        // if(to.path !='/login'){
        //     let a = 100
        //     if(a>10){
                next()
        //     }
        // }
    })
}