const fruits=new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);

let text="";
for(const x of fruits.entries())
{
    text+=x;
    console.log(x);
}
console.log(text);
console.log(fruits);


const fruit=new Map();
fruit.set(600,400);
fruit.set("guava",200);
fruit.set("watermelon",300);

fruit.size;
console.log(fruit.size);
console.log(fruit);