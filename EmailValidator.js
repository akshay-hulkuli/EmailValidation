let emailArray = new Array ( "abc@bridgelabz.co.in",  "abc@gmail.com.com","abc@yahoo.com",  "abc@1.com","abc-100@yahoo.com",
 "abc.100@yahoo.com","abc111@abc.com","abc-100@abc.net","abc.100@abc.com.au","abc+100@gmail.com",
 ".abc@abc.com", "abc", "abc@.com.my","abc@abc@gmail.com","abc()*@gmail.com","abc..2002@gmail.com","abc.@gmail.com",
 "abc123@.com","abc123@.com.com","abc123@gmail.a","abc@%*.com",".abc@gmail.com.aa.au" );


function emailValidator(email){
    let emailRegex = RegExp("(^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9])(([+_.-][a-zA-Z0-9]*)?)(@[a-zA-Z0-9]+)([.])([a-z]{2,})(([.][a-z]{2,})?)");
    if(emailRegex.test(email))
        console.log("   passed");
    else throw '    email is not valid';
}


emailArray.forEach(email => {
    console.log("email : "+ email)
    try{
        emailValidator(email);
    }
    catch(e){
        console.error(e);
    }
});