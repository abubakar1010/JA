
class Car{

    constructor(name, brand, color, speed){
        this.name =  name;
        this.brand = brand;
        this.color =  color;
        this.speed =  speed;
    }

    details(){
        console.log(`The ${this.color} ${this.name} is on fire`)
    }
}

const volvo = new Car("Volvo", "Trigger", "Yellow", "12000 KM/H")

console.log(volvo);

volvo.details()

class Another extends Car {

    constructor(name, brand, color, speed, feature){

        super(name, brand, color, speed)
        this.feature = feature

    }
}

const Tesla = new Another("Tesla", "Mars", "ShadCdn", "2M KM/H", "AI")

console.log(Tesla);
Tesla.details()