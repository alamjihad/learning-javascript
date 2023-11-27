const person =[{                                                     // object syntax
    name: "Rayhan",
    age:19,
    skills: ["programming","educator"],
    book:{
        name:"Ekhono likhinai",
    },
    alive: true,
    diseases:Number,
    birthday: new Date('14-06-2003'),  // new Date , undifined are can't use in create JSON but null and [] can use
}];
console.log(JSON.stringify(person));

const person2 = '{ "name": "Rayhan", "age": 19, "skills": ["programming","educator"]}';       // check this line is
                                                    // this or not by json editor online it will show object

console.log(person2);