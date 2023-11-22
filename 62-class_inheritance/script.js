class Car {
    constructor(brand){
        this.carnamme=brand;
    }
    present(){
        return 'I have a ' + this.carnamme;
    }
}

class Model extends Car{
    constructor (brand, mod){
        super(brand);
        this.model =mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}
let myCar = new Model("Ford","Mustang");
console.log(myCar.show());