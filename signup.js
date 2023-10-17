
let allusers= JSON.parse(localStorage.getItem("regUsers"));
console.log(allusers)
let handelregisterbtn=()=>{
    validate();
    let fnamegot=document.getElementById("fname").value
    if(!fnamegot){
        let enterFname=document.getElementById("fname-necessary")
        enterFname.setAttribute("style","display:block;color:red")
    }else{
        let enterFname=document.getElementById("fname-necessary")
        enterFname.setAttribute("style","display:none")
    }

    let lnamegot=document.getElementById("lname").value
    if(!lnamegot){
        let enterlname=document.getElementById("lname-necessary")
        enterlname.setAttribute("style","display:block;color:red")
    }

    let emailgot=document.getElementById("email").value
    if(!emailgot){
        let enteremail=document.getElementById("email-necessary")
        enteremail.setAttribute("style","display:block;color:red")
    }else{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailgot)){
            document.getElementById("email-necessary").innerHTML = "Invalid Email Id*";
        let invalidemail=document.getElementById("email-necessary")
        invalidemail.setAttribute("style","display:block;color:red")
        
        }else{
            let invalidemail=document.getElementById("email-necessary")
        invalidemail.setAttribute("style","display:none;color:red")
        }
    }

    let pwd=document.getElementById("password").value;
    if(!pwd){
        let enterpass=document.getElementById("password-necessary")
        enterpass.setAttribute("style","display:block;color:red")
        
        
    }else{
        if(pwd.length<8){
            document.getElementById("password-necessary").innerHTML = "PassWord Must be more than 8 Letters*";
            let invalidpass=document.getElementById("password-necessary")
            invalidpass.setAttribute("style","display:block;color:red")
        }else{
            let invalidpass=document.getElementById("password-necessary")
            invalidpass.setAttribute("style","display:none;color:red")
        }
    }

    let cpwd=document.getElementById("cpassword").value;
    if(!cpwd){
        let enterpass=document.getElementById("cpassword-necessary")
        enterpass.setAttribute("style","display:block;color:red")
    }else{
        if(cpwd!==pwd){
        document.getElementById("cpassword-necessary").innerHTML = "PassWord Must be same as Given Before*";
        let invalidpass=document.getElementById("cpassword-necessary")
        invalidpass.setAttribute("style","display:block;color:red")
        }else{
        let invalidpass=document.getElementById("cpassword-necessary")
        invalidpass.setAttribute("style","display:none;color:red")
        }
    }

    
    let adhaargot=document.getElementById("adhaar").value;
        if(!adhaargot){
            document.getElementById("adhaar-necessary").innerHTML = "Type your adhaar no. Please*";
            let enteradhaar=document.getElementById("adhaar-necessary");
            enteradhaar.setAttribute("style","display:block;color:red")
        }else if(adhaargot.length!==12){
            document.getElementById("adhaar-necessary").innerHTML = "Adhaar must be 12 digits*";
            let smalladhaar=document.getElementById("adhaar-necessary")
            smalladhaar.setAttribute("style","display:block;color:red")
        }else{

        }
}

//from validate function
function fnameDataInput(){
    fnameInputbox=document.getElementById("fname")
    fnameInputbox.setAttribute("style","")
    fnameptag=document.getElementById("fname-necessary")
    fnameptag.setAttribute("style","display:none")
}
function lnameDataInput(){
    lnameInputbox=document.getElementById("lname")
    lnameInputbox.setAttribute("style","")
    lnameptag=document.getElementById("lname-necessary")
    lnameptag.setAttribute("style","display:none")
}
function emailDataInput(){
    mailInputbox=document.getElementById("email")
    mailInputbox.setAttribute("style","")
    mailptag=document.getElementById("email-necessary")
    mailptag.setAttribute("style","display:none")
}

function passwordDataInput(){
    pwInputbox=document.getElementById("password")
    pwInputbox.setAttribute("style","")
    pwptag=document.getElementById("password-necessary")
    pwptag.setAttribute("style","display:none")

}
function cpasswordDataInput(){
    cpwInputbox=document.getElementById("cpassword")
    cpwInputbox.setAttribute("style","")
    cpwptag=document.getElementById("cpassword-necessary")
    cpwptag.setAttribute("style","display:none")

}
function adhaarDataInput(){
    adhaarInputbox=document.getElementById("adhaar")
    adhaarInputbox.setAttribute("style","")
    adhaarptag=document.getElementById("adhaar-necessary")
    adhaarptag.setAttribute("style","display:none")

}

//validate at timme of input

let validate=()=>{
  

    fnamebox=document.getElementById("fname")
    fnamebox.addEventListener("input",()=>{
        fnameDataInput()
    })
    lnamebox=document.getElementById("lname")
    lnamebox.addEventListener("input",()=>{
        lnameDataInput()
    })

    mailbox=document.getElementById("email")
    mailbox.addEventListener("input",()=>{
        emailDataInput()
    })

    pwbox=document.getElementById("password")
    pwbox.addEventListener("input",()=>{
        passwordDataInput()
    })

    cpwbox=document.getElementById("cpassword")
    cpwbox.addEventListener("input",()=>{
        cpasswordDataInput()
    })
    adhaarbox=document.getElementById("adhaar")
    adhaarbox.addEventListener("input",()=>{
        adhaarDataInput()
    })
    

    FName=document.getElementById("fname").value;
    LName=document.getElementById("lname").value;
    Email=document.getElementById("email").value;
    Pw=document.getElementById("password").value;
    Cpw=document.getElementById("cpassword").value;
    Adhaar=document.getElementById("adhaar").value;
    if(FName!="" && fnamevalidate() &&LName!=""&& lnamevalidate() && Email!="" && emailValidate() && Pw!=""&& pwvalidation() && Cpw==Pw && Adhaar!="" && adhaarvalidate()){
        register()
    }
    else{
        console.log("ok")
        if(FName==""){
          
            fnameInputbox=document.getElementById("fname")
            fnameInputbox.setAttribute("style","border-color: red")
            fnameptag=document.getElementById("fname-necessary")
            fnameptag.setAttribute("style","display:block;color:red")
        }else{
            
        }
        if(LName==""){
          
            lnameInputbox=document.getElementById("lname")
            lnameInputbox.setAttribute("style","border-color: red")
            lnameptag=document.getElementById("lname-necessary")
            lnameptag.setAttribute("style","display:block;color:red")
        }else{
            
        }
        if(Email==""){
            mailInputbox=document.getElementById("email")
            mailInputbox.setAttribute("style","border-color: red")
            mailptag=document.getElementById("email-necessary")
            mailptag.setAttribute("style","display:block;color:red")
        }else {

        }

        
        if(Pw==""){
            pwInputbox=document.getElementById("password")
            pwInputbox.setAttribute("style","border-color: red")
            pwptag=document.getElementById("password-necessary")
            pwptag.setAttribute("style","display:block;color:red")
        }else{

        }
        if(Cpw==""){
            cpwInputbox=document.getElementById("cpassword")
            cpwInputbox.setAttribute("style","border-color: red")
            cpwptag=document.getElementById("cpassword-necessary")
            cpwptag.setAttribute("style","display:block;color:red")
        }else{
            
        }
        if(Adhaar==""){
            adhaarInputbox=document.getElementById("adhaar")
            adhaarInputbox.setAttribute("style","border-color: red")
            adhaarptag=document.getElementById("adhaar-necessary")
            adhaarptag.setAttribute("style","display:block;color:red")
        }else{
            
        }
       
    }
}


//all validations
let fnamevalidate=()=>{
    let fnamegot=document.getElementById("fname").value;
    if(fnamegot.length>2){
        console.log("fname true")
        return true
    }else{
        console.log("fname false")
        return false
    }
}
let lnamevalidate=()=>{
    let lnamegot=document.getElementById("lname").value;
    if(lnamegot.length>1){
        console.log("lname true")
        return true
    }else{
        console.log("lname false")
        return false
    }
}
let emailValidate=()=>{
    let emailgot=document.getElementById("email").value;
    var emailshouldbe='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    if (emailgot.match(emailshouldbe)){
        console.log("mail true")
        return true
    }else{
        console.log("mail false")
       return false
    }
}

let pwvalidation =()=>{
    let pwgot=document.getElementById("password").value;
    if(pwgot.length>8){
        console.log("pw true")
        return true;
    }else{
        console.log("pw false")
        return false;
    }
}
let adhaarvalidate=()=>{
    let adhaargot=document.getElementById("adhaar").value;
    if(adhaargot.length==12){
        console.log("adhaar true")
        return true
    }else{
        console.log("adhaar false")
        return false
    }
}

let register=()=>{
    console.log("registering")
    let registeredUser={
    fname:document.getElementById("fname").value,
    lname:document.getElementById("lname").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,
    adhaar:document.getElementById("adhaar").value
    }
    if(allusers){
    allusers.push(registeredUser)
    }else{
    allusers=[registeredUser]
    }
    // console.log(regUsers)
    localStorage.setItem("regUsers",JSON.stringify(allusers))
    window.location.href='login.html'
    reset();
}

var reset=()=>{
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("cpassword").value="";
    document.getElementById("adhaar").value="";
}

