const password = document.getElementById("password");
 const confirmPassword = document.getElementById("confirm-password");
const setPasswordBtn = document.getElementById("setpassword");



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


const validatePassword = () => {
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    if (passwordValue == ""){
        setError(password, "password cannot be empty")
        setError(confirmPassword, "confirm your password")
    }
    else if ( passwordValue !== confirmPasswordValue)
    {
        setError(confirmPassword, "password did not match")
    }
    else
    {
        setSuccess(password);
        setSuccess(confirmPassword);
    }
}

setPasswordBtn.addEventListener("click", function(){
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    if (passwordValue != "" && confirmPasswordValue != "" && passwordValue == confirmPasswordValue)
    {
        window.location.href ="http://127.0.0.1:5500/verify.html"
    }
    else
    {
        validatePassword();
        window.location.href ="http://127.0.0.1:5500/setpassword.html"
    }
    
})