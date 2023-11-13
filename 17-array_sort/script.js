const fruits=["Banana","Orange","Apple","Mango"];
let y=fruits.sort();
let z=fruits.reverse();
console.log(z);
console.log(y);


const point=[40,100,1,5,25,10];
point.sort(function(a,b){
    return a-b;
});
console.log(point);
const num=[40,100,1,5,25,10];
num.sort(function(a,b){
    return 0.5-Math.random();
});
console.log(num);


//math_max_apply
//math_min_apply

const car=[
    {type:"volvo",year:2016},
    {type:"saab",year:2001},
    {type:"bmw",year:2010}
];
car.sort(function(a,b){return a.year-b.year});
console.log(car);