const letter =new Set(["a","b","c"]);
letter.add("d");
letter.add("e");
letter.add("d");
letter.add("e");
console.log(letter.values());


let text2="";
for(const x of letter.values())
{
    text2+=x;
}
console.log(text2);


// <!--------------------------------------variable in ------------------------------------->

const letters=new Set();
const a="a";
const b="b";
const c="c";

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("a");
letters.add("b");
console.log(letters);
let text ="";
letters.forEach(function(value)
{
    text+=value;
})
console.log(text);

