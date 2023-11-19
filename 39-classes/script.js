class Fruit{
    constructor(name,year){
        this.name = name;
        this.year= year;
    }
    sweet(){
        console.log(`${this.name} is sweet`);
    }
};

const fruit1= new Fruit("Mango",2012);   //create acctual object
const fruit2= new Fruit("Lemon",2014);
const fruit3= new Fruit("Waterelon",2018);
const fruit4= new Fruit("Plum",2008);
const fruit5= new Fruit("Guava",2020);

fruit1.sweet();
fruit2.sweet();
fruit3.sweet();
fruit4.sweet();
fruit5.sweet();