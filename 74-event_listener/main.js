function myFunction(){
    console.log('world');
};

function my(){
    console.log('hello world');
};
const button = document.getElementById('button');
button.addEventListener('click',my);

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function(){
    console.log('button clicked');
});

btn2.addEventListener('mouseover',function(){
    console.log('mouse is hovering');
});

function fusion(text){
    console.log(text)
}
function fun(text){
    console.log(text)
}
const btn3 = document.getElementById('btn3');
// const container = document.getElementById('container');    // useCapture test perpose is not working

btn3.addEventListener('click',function(){
    fusion("hello earth");
});

// container.addEventListener('click',function(){
//     fusion("hello mars");
// });