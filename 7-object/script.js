const car = {
    name: 'Fiat',
    model:  500,
    weight: "850kg",
    color: "white",
    start: function (){     
        this.drive();                                        // function syntax inside a object 
        console.log("car has started");
    },
    drive: function (){                                           
        console.log("car is driving");
    },
};

console.log(car.weight);
console.log(car['model']);
car.start();

//                                                                     // function start(){                               
//                                                                     // }

//                                                                     // function's general syntax 

                                                            // let x = 5;        // act as a number
                                                            // let x = new Number(5);          //act as a string

//let x=5;
let x= new Number(5);
console.log(x);
console.log(typeof x);