let emailArray = new Array();
emailArray.push("abc");
emailArray.push("a-bcd");
emailArray.push("1abc");

function emailValidator(email){
    let emailRegex = RegExp("(^[a-zA-Z][a-zA-Z0-9_-]*[a-z|A-Z|0-9])");
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