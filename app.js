const app =  Vue.createApp({
    // dynamic changable value without limit of the type 
    // the only limit is the scope that i use and declare my vue app
    data(){
        return {
            showBooks:true,
            title:' The final ',
            author:' k.S',
            age:' 12',
            x:0,
            y:0
        }
    },
    methods: {
        changeTitle(title){
           // this.title = " words of readiance"
           this.title=title
        },
        toggleShowBooks(){
            // this.title = " words of readiance"
            this.showBooks=!this.showBooks
        },
        handleEvents(event){
            console.log(event,event.type)
        },
         handleMouseMove(event1){
            this.x=event1.offsetX
            this.y=event1.offsetY
        }
    }
})

app.mount('#app')