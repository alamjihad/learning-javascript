const fruits = new Map();
fruits.set("oranges",200);
fruits.set("bananas",300);
fruits.set("apples",500);



fruits.set("bananas",500);
fruits.set("lemons",200);
// fruits.delete("apples");                                 clear a particular key-value
// fruits.clear();                                          clear the whole map
// fruits.has("oranges");  //print true or false for the type is presents or not in the map but its not working 
console.log(fruits);

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const fruit = new Map();

fruit.set(apples,500);
fruit.set(bananas,300);
fruit.set(oranges,200);

console.log(fruit.get(apples));
console.log(fruit.get(bananas));
console.log(fruit.get(oranges));