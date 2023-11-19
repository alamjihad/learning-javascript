class Fruit{
    constructor(name,quantity){
        this.name = name;
        debugger;
        this.quantity= quantity;
    }
    sweet(status){
        debugger;
        console.log(`${this.name} quantity ${this.quantity} is sweet ${status}`);
    }
};

const fruit1= new Fruit("Mango",2012);   //create acctual object
const fruit2= new Fruit("Lemon",2014);
const fruit3= new Fruit("Waterelon",2018);
const fruit4= new Fruit("Plum");
const fruit5= new Fruit("Guava",2020);

fruit1.sweet("much");
fruit2.sweet("none");
fruit3.sweet("much more");
fruit4.sweet("avarage");
fruit5.sweet("medium");