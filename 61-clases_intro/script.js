
class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    run(speed){
        console.log(this.name + ' is runnig in ' + speed);
    }
}
const bmw = new Car('BMW',1999);
console.log(bmw);
bmw.run('200 kmh');

const audi = new Car('AUDI',2000);
console.log(audi);
audi.run('100 kmh');