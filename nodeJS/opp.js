class mobil{
    constructor(type,color){
        this.type=type
        this.color=color
        this.enginestatus='off'
    }

    engineStar(){
        this.engineStatus='on'
        console.log('engine star, mobilnya warna'+this.color+"typenya:"+ this.type+"status mesin:"+this.engineStatus)
    }

    engineStop(){
        this.engineStatus='off'
        console.log('engine star,mobil warna'+this.color+"typenya:"+this.type+"status mesin:"+this.engineStatus)
    }

    static isEngineOn(mobil){
        if (mobil.engineStatus==='on'){
            console.log('Engine on')
        }else{
            console.log('Engine off')
        }
    }
}

const m =new mobil('phanter','hitam');
//m.engineStop
mobil.isEngineOn(m);

// whitout and set

class car{
    constructor(color){
        this.color =color;
    }
}
let a = new car('merah')
console.log(a.color);
 
//whiout set and get
class Car2{
    constructor(color){
        this._color=null
    }
    get color(){
        return`warna mobilnya adalah ${this._color}`
    }
    set color(color){
        this._color=`${color}keren`
    }
}
const car2 = new Car2() 
car2.color='merah'
console.log(car2.color)
