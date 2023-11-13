/* 1st problem: print a random number form 1 to 6 in lodu game*/

function getRndNum(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
}
let ans1=(getRndNum(1,6));
document.getElementById("demo1").innerHTML=ans1;


/* 2nd sort all the names of every students in the class */

const students = ["Amit","Nahidul","Shuvo","Nazim"];
let ans2=(students.sort());
document.getElementById("demo2").innerHTML=ans2;


/* 3rd sort all the rolls of every students in the class */

const roll=[3,5,1,6,2,30];
let ans3 =(roll.sort(function(a,b){
    return a-b;
}));
document.getElementById("demo3").innerHTML=ans3;

/* 4th find a year that is leap year or not */

function isLeapYear (year){
    if(year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))){
        document.getElementById("demo4").innerHTML="This is a leap year !";
    }
    else{
        document.getElementById("demo4").innerHTML="This is not a leap yearm!";   
    }
}
isLeapYear(2025);


/* 5th find the number of vowels in a sentence */

const vowels=["a","e","i","o","u","A","E","I","O","U"];
function countVowels(sentence){
    let count=0;
    const letters =Array.from(sentence);
    letters.forEach(function(value,index,array){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count
}
document.getElementById("demo5").innerHTML= countVowels("I love Bangladesh");


/* 6th snach duplicate numbers from an arry */

{
    const number=[1,4,5,5,6,7,6,8,9,10,4];
    const duplicates = number.filter(function(value,index,array){
        return array.indexOf(value)!== index
    });
    document.getElementById("demo6").innerHTML=duplicates;
}


/* 6.2th snach unique numbers from an arry */


{
    const number=[1,4,5,5,6,7,6,8,9,10,4];
    const unique = number.filter(function(value,index,array){
        return array.indexOf(value) === index
    });
    document.getElementById("demo6.2").innerHTML=unique;
}