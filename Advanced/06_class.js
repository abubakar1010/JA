// syntax of class 
/* ##############################################################


class ClassNameInPascalCase {

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

// console.log(volvo.year);

// volvo.play()

const tesla = new car("Tesla", "2022")

// tesla.play()

class Products {

    type = "car"

    constructor( name, region, year, author){

        this.name = name;
        this.region = region;
        this.year = year;
        this.author = author;
    }
}

const BMQ = new Products( "BMQ", "KSA", '2021', 'Abdullah')

const Tesla = new Products( "Tesla", "UAE", "2022", "Omar")

// console.log(BMQ, Tesla);

class OurProducts {

    constructor ( region, shop, service){
        this.region = region;
        this.shop = shop;
        this.service = service;
    }

    quality (ProductName){

        console.log(`${ProductName} is highly efficient for you`);
    }
}

class Laptop extends OurProducts {

    constructor( region, shop, service, name, year, author){
        super(region, shop, service);
        this.name = name;
        this.year = year;
        this.author = author;
    }
}


const mac = new Laptop("UAE", "Dubai", "Unlimited", "MackBook Air", 2023, "Omar")

console.log(mac);
mac.quality(this.name)


class Apple{

    constructor(name,author, color){

        this.name = name;
        this.author = author;
        this.color = color
    }

    isRun(){

        console.log(this.name + 'is on fire');
    }
}

const MackBook = new Apple("MacBook Air Pro", "Osman", "BlackGray");

console.log(MackBook);

MackBook.name = "MackBook Light"

console.log(MackBook);

MackBook.isRun()
