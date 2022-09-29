// DOM CAll
const firstName = document.getElementById("firstname");
const middleName = document.getElementById("middlename");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const refferalCode = document.getElementById("referral")
const subscribeEmail = document.getElementById("email-subcription");
const termsAccept = document.getElementById("termsandcondition")
const createAcctBtn = document.getElementById("createacct");
const loginBtn = document.getElementById("login")


//validation part

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const setError = (element, message) =>
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.add("success");
}
const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.remove("error")
    inputControl.classList.add("success")
}


const validateCreateAccout =  () => {
    const firstNameValue = firstName.value.trim();
    const middleNameValue = middleName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();

    if(firstNameValue === "")
    {
        setError(firstName, "First Name cannot be empty")
    }else{
        setSuccess(firstName)
    }
    if (lastNameValue == "") 
    {
        setError(lastName, "last name cannot be empty")
    }
    else
    {
        setSuccess(lastName)
    }
    if (phoneNumberValue == "")
    {
        setError(phoneNumber, "Enter a valid phone number")
    }
    else
    {
        setSuccess(phoneNumber)
    }
    if (emailValue == "") {
        setError(email, "Email cannot be empty")
    } 
    else if (!isEmailValid(emailValue)) {
        setError(email, "please enter a valid email")
    }
    else
    {
        setSuccess(email)
    }
}


createAcctBtn.addEventListener("click" ,function(){
    const firstNameValue = firstName.value.trim();
    const middleNameValue = middleName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();

    // if(firstNameValue === "")
    // {
    //     setError(firstName, "First Name cannot be empty")
    // }else{
    //     setSuccess(firstName)
    // }
    // if (lastNameValue == "") 
    // {
    //     setError(lastName, "last name cannot be empty")
    // }
    // else
    // {
    //     setSuccess(lastName)
    // }
    // if (phoneNumberValue == "")
    // {
    //     setError(phoneNumber, "Enter a valid phone number")
    // }
    // else
    // {
    //     setSuccess(phoneNumber)
    // }
    // if (emailValue == "") {
    //     setError(email, "Email cannot be empty")
    // } 
    // else if (!isEmailValid(emailValue)) {
    //     setError(email, "please enter a valid email")
    // }
    // else
    // {
    //     setSuccess(email)
    // }

    if (firstNameValue != "" && lastNameValue != "" && phoneNumberValue != "" && emailValue != "" ) {
       window.location.href = "http://127.0.0.1:5500/setpassword.html";  
    }
    else
    {
        validateCreateAccout();
        window.localStorage.href = "http://127.0.0.1:5500/createacct.html"
    }

})




loginBtn.addEventListener("click", function(){

})