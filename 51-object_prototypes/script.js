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

// Person.prototype.country='Bangladesh';
// console.dir(Person);
// console.log(sumit.country)

const john = new String('John');
// console.dir(john);
// console.log(john.toUpperCase());
String.prototype.doingFun=function(){
    return 'I am having fun';
}
const x="Bangladesh";
console.log(x.doingFun());