function validateForm(){                             /* hicui  buji na kicui hoy na */           
    const form=document.forms['myForm'];
   // console.log(form['fname']);
    const value=(form['fname'].value);
    if(value === ""){
        alert("You must type name");
        return false;
    }
    
}