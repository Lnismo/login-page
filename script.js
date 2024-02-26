const email = document.getElementById("email");
const password = document.getElementById("password");

//verify if email is valid
function verifyEmail(){
    if(!email.value.includes("@") || !email.value.includes(".com")){
        email.style.border = "solid 1px red";
        email.placeholder = "invalid email";
        email.value = " "
        return false;
    } else {
        email.style.border = "none";
        email.placeholder = "email";
        return true;
    }
}

//verify if password isn't empty
function verifyPass(){
    if (password.value == ""){
        password.style.border = "solid 1px red";
        password.placeholder = "enter a password";
        return false;
    } else {
        password.style.border = "none";
        password.placeholder = "password";
        return true;
    }
}

//do the functions on button click
function login(){
    verifyEmail();
    verifyPass();
    if (verifyEmail() && verifyPass()){
        window.location.href = "thanks/index.html";
    }
}
