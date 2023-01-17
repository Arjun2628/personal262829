function validform(){
  
    var name=document.sentMessage.name.value
    var email=document.sentMessage.email.value;
    var subject=document.sentMessage.subject.value;
    var message=document.sentMessage.message.value;
   
   

    // form.addEventListener('submit',(e)=> {
    //     let messages=[]

    //     if(name.value == ""||name.value == null){
    //         messages.push("name is required")
    //         errorname.innerHTML=messages
    //     }
    // })
    if(name==""){
        // alert("jhgjjh")
        document.getElementById("errorname").innerHTML="Please enter name"
        document.getElementById("errorname").style.color="red"
        return false

    }else{
        document.getElementById("errorname").innerHTML=""

    }
    var patternvalue=/^\w+@[A-Za-z]{3,10}\.[a-zA-z]{2,3}$/;
    if(patternvalue.test(email)==false){
        document.getElementById("erroremail").innerHTML="Enter valid email id"
        document.getElementById("erroremail").style.color="red"
        return false
    }
    else{
        document.getElementById("erroremail").innerHTML=""

    }
    if(subject==""){
        document.getElementById("errorsubject").innerHTML="subject required"
        document.getElementById("errorsubject").style.color="red"
        return false
    }
    else{
        document.getElementById("errorsubject").innerHTML=""

    }
    if(message==""){
        document.getElementById("errormessage").innerHTML="Write message"
        document.getElementById("errormessage").style.color="red"
        return false
    }
    else{
        document.getElementById("errormessage").innerHTML=""

    }
  
    
}

