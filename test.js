// crete a biosensor simulator 
// start with the heart

randomNumber=function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
class Heart{
    constructor(age,name){
        this.age=age
        this.owner=name
        this.lastHR=0
        this.live()
    }

    beat(){
        this.lastHR=randomNumber(60,70)
        console.log('[Owner]:'+this.owner+' - Heart Rate='+this.lastHR)
    }
    live(){
        setInterval(()=>{this.beat()},1000)
    }
}

let james=new Heart(28,'james')
let sara=new Heart(15,'Sara')