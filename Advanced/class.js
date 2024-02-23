// syntax of class 
/* ##############################################################


class Car {

    constructor(){}

}

################################################################ */

class car{

    constructor( name, year){

        this.name = name;
        this.year = year;
    }

    play(){
        console.log(`${this.name} is rule the world of car`);
    }
}

const volvo = new car( "volvo", 2010)

console.log(volvo.year);

volvo.play()

const tesla = new car("Tesla", "2022")

tesla.play()