// const persons = {
//     "employees":[
//         {"firstName":"Jhon","lastName":"Doe"},
//         {"firstName":"Harry","lastName":"Porperty="},
//     ]
// }


let text = '{ "employees":[' +
'{"firstName":"Jhon","lastName":"Doe"},'+
'{"firstName":"Harry","lastName":"Potter"}]}';
const obj =JSON.parse(text);
console.log(obj);
console.log(text);
console.log(obj.employees[1].firstName);


let person = {
    firstName: "Jhon",
    lastName: "Sina"
};

console.log(JSON.stringify(person));