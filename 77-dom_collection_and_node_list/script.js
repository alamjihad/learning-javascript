// in htmlcollection we can find any value with id or class name along with index no.
// but dom node can find value with only index no. 
console.dir(document.getElementsByTagName('p'));
console.dir(document.getElementsByClassName('hello'));
console.dir(document.querySelectorAll('.hello')[0]);
console.dir(document.querySelectorAll('.hello'));