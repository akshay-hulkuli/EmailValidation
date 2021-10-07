let emailArray = new Array();
emailArray.push("abc@bridgelabz.co");
emailArray.push("a-bcd.bridgelabz-co");

function emailValidator(email){
    let emailRegex = RegExp("(^[a-zA-Z][a-zA-Z0-9_-]*[a-z|A-Z|0-9])(@[a-zA-Z0-9]*)(.)([a-z]{2,})");
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