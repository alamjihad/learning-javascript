let text = "ABCDEF GHIJKLMN OPQRST UVWXYZ";

console.log(text.length);

                                              // \ new line in code can only use inside the string not out of it

let text2 = "We are \tthe so-called \
Vikings from the north.";
console.log(text2);

let x = "Jhon";
let y = new String ("Jhon");
                                                // conflict with lws x==y should print true but output is false
                                                // but === result is okay
console.log(typeof x);
console.log(typeof y);
console.log(typeof x === y);