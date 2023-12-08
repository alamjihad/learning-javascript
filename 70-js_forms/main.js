function validateForm(){                             /* hicui  buji na kicui hoy na */           
    const form=document.forms['myForm'];
   // console.log(form['fname']);
    const value=(form['fname'].value);
    if(value === ""){
        alert("You must type name");
        return false;
    }
    
}


function myFunction(){
    let x=document.getElementById('numb').value;
    let text ;
    if(isNaN(x)||x<1||x>10){
        text="Input not valid";
    }else{
        text="Input OK";
    }
    document.getElementById("demo").innerHTML=text;
}