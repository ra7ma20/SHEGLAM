function validation(){
    if(document.formfill.username.value==""){
     document.getElementById("result").innerHTML="Enter username*";
     return false;
    }
    else if(document.formfill.username.value.length<6){
     document.getElementById("result").innerHTML=" Atleast six letter*";
     return false;
 
    }
    else if(document.formfill.Email.value==""){
     document.getElementById("result").innerHTML=" Enter your Email*";
     return false;
 
    }
    else if(document.formfill.password.value==""){
     document.getElementById("result").innerHTML="Enter your password*";
     return false;
 
    }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML=" password must be 6-digits";
        return false;
    }
    else if(document.formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML=" Enter confirm password*";
        return false;
}

    
    else if(document.formfill.Cpassword.value !== document.formfill.password.value){
     document.getElementById("result").innerHTML=" password doesnot matched*";
     return false;
 
    }
    else if(document.formfill.Cpassword.value == document.formfill.password.value){

 
    popup.classList.add("open-slide")
        return false;
}
    }
    var popup=document.getElementById('popup');
    function closeSlide(){
        popup.classList.remove("open-slide")
     
    }