// function myMove(){
//     let id=null;         //const animate=document.getElementById("animate");
//     const elem =document.getElementById("animate");
//     let pos=0;
//     clearInterval(id);
//     id=setInterval(frame,5);
//     function frame(){
//         if(pos==430){
//             clearInterval(id);
//         }
//         else{
//             pos++;
//             elem.style.top=pos+'px';
//             elem.style.left=pos+'px';
//         }
//     }
// }

// myMove();


function myMove(){
    const animate=document.getElementById("animate");
    let pos=0;
    const interval =setInterval(frame,5);
    function frame(){
        if(pos<430)
        {
            pos++;
            animate.style.top=pos+'px';
            animate.style.left=pos+'px';
        }else{
            clearInterval(id);
        }
    }
}