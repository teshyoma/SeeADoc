const verifyCode = document.getElementById("verifycode");
const verifyBtn = document.getElementById("verify");


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

const validateVerificationCode = () => {
    const verificationCode = verifyCode.value.trim();
    if (verificationCode == "") {
        setError(verifyCode, "Input the verification code")
    } 
    else {
        setSuccess(verificationCode)
    }

}

verifyBtn.addEventListener("click", function(){
    const verificationCode = verifyCode.value.trim();
    if (verificationCode != "") {
    window.location.href ="http://127.0.0.1:5500/login.html";
        
    }
    else
    {
       validateVerificationCode();
       window.location.href ="http://127.0.0.1:5500/verify.html";
    }

 })