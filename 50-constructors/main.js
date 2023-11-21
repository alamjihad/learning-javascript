const samir ={                                                  // general object
    firstName: 'Samir',
    lastName: 'Hossain',
    age:42,
    fullName: function(){
        return this.firstName + ' ' + this.lastName + ` is ` + this.age + ` years old. `
    }
};

function Person(first,last,age){                            // contructor function
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName + ` is ` + this.age + ` years old. `
    }
}

const sumit = new Person('sumit','saha',35);
const jasim = new Person('jasim','khan',39);
const kenji = new Person('kenji','kun',30);

console.log(sumit.fullName());
console.log(jasim.fullName());
console.log(kenji.fullName());
console.log(samir.fullName());


sumit.country='Bangladesh';
console.log(sumit);